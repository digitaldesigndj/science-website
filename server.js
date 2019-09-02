const environment = require("dotenv").config().parsed;
const Hapi = require("@hapi/hapi");
const Joi = require("@hapi/joi");
const Boom = require("@hapi/boom");
const next = require("next");
const { parse } = require("url");

const { promisify } = require("util");
const ls = promisify(require("fs").readdir);

const dotenv = require("dotenv");
const mysql = require("mysql");

const clientTableSchema = require("./schema/client");
// {
//   created: Joi.string()
//     .min(24)
//     .max(24)
//     .required(),
//   id: Joi.number()
//     .integer()
//     .min(0)
//     .required(),
//   name: Joi.string()
//     .min(3)
//     .max(64)
//     .required(),
//   password: Joi.string()
//     .min(8)
//     .max(64)
//     .required(),
//   slug: Joi.string()
//     .min(3)
//     .max(64)
//     .required()
// };

class Database {
  constructor(config) {
    this.connection = mysql.createConnection(config);
  }
  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }
  close() {
    return new Promise((resolve, reject) => {
      this.connection.end(err => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
}

// Be sure to pass `true` as the second argument to `url.parse`.
// This tells it to parse the query portion of the URL.
// const parsedUrl = parse(req.url, true);
// const { pathname, query } = parsedUrl;
//
// if (pathname === "/a") {
//   app.render(req, res, "/b", query);
// } else if (pathname === "/b") {
//   app.render(req, res, "/a", query);
// } else {
//   app.getRequestHandler(req, res, parsedUrl);
// }

(async () => {
  const app = next({ dev: process.env.NODE_ENV !== "production" });
  const nextRenderHandler = app.getRequestHandler();
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"], // an array of origins or 'ignore'
        headers: ["Authorization"], // an array of strings - 'Access-Control-Allow-Headers'
        exposedHeaders: ["Accept"], // an array of exposed headers - 'Access-Control-Expose-Headers',
        additionalExposedHeaders: ["Accept"], // an array of additional exposed headers
        maxAge: 60,
        credentials: true // boolean - 'Access-Control-Allow-Credentials'
      }
    }
  });
  const db = new Database({
    host: environment.MYSQL_HOST,
    user: environment.MYSQL_USER,
    password: environment.MYSQL_PASS,
    database: `next`
  });

  const getWholeTable = table => {
    return async (request, h) => {
      return await db.query(`SELECT * FROM ${table}`);
    };
  };

  const getPagesRecurse = async (path, prefix, array) => {
    let result;
    try {
      result = await ls(path);
    } catch (e) {
      return Boom.notFound(e);
    }
    return result.map(thing => {
      if (thing.slice(-3) === ".js") {
        return `${prefix}/${thing.replace(".js", "")}`;
      } else {
        return getPagesRecurse(`./pages/landing`, "/landing", array);
      }
    }, array);
  };

  server.route({
    method: "GET",
    path: "/autoindex",
    handler: async (request, h) => {
      return await getPagesRecurse(`./pages`, "");
    }
  });

  // server.route({
  //   method: "GET",
  //   path: "/autoindex/{folder?}",
  //   handler: async (request, h) => {
  //     let result;
  //     try {
  //       if (request.params.folder) {
  //         result = await ls(`./pages/${request.params.folder}`);
  //       } else {
  //         result = await ls(`./pages`);
  //       }
  //     } catch (e) {
  //       return Boom.notFound(e);
  //     }
  //     return result.map(thing => {
  //       if (thing.slice(-3) === ".js") {
  //         return `/${thing.replace(".js", "")}`;
  //       } else {
  //         return `/${thing}/`;
  //       }
  //     });
  //   }
  // });

  server.route({
    method: "GET",
    path: "/hi",
    handler: (request, h) => {
      return "Hello World!";
    }
  });

  const tables = [
    "clients",
    "extractions",
    "ovens",
    "packages",
    "pans",
    "socks"
  ];

  tables.map(table => {
    server.route({
      method: "GET",
      path: `/mysql/${table}`,
      handler: getWholeTable(table)
    });
    server.route({
      method: "GET",
      path: `/mysql/${table}/read/{id}`,
      config: {
        validate: {
          params: {
            id: Joi.number().required()
          }
        },
        handler: async (request, h) => {
          return await db.query(`SELECT * FROM ${table} WHERE id = ?`, [
            request.params.id
          ]);
        }
      }
    });
    return null;
  });

  server.route({
    method: "POST",
    path: `/mysql/clients/update/{id}`,
    config: {
      validate: {
        params: {
          id: clientTableSchema.id
        },
        payload: clientTableSchema
      },
      handler: async (request, h) => {
        console.log(request.payload);
        const table = "clients";
        const { name, password, slug, id } = request.payload;
        console.log("POST", `/mysql/${table}/update/${id}`);

        return await db.query(
          `UPDATE clients SET name = ?, password = ?, slug = ? WHERE id = ?`,
          [name, password, slug, id]
        );
      }
    }
  });

  // created: "2019-08-29T19:46:41.000Z"
  // id: 3
  // name: "Friendly Farms"
  // password: "cruzscience"
  // slug: "friendly-farms"

  server.route({
    method: "GET",
    path: "/{p*}",
    handler: async ({ raw, url }, h) => {
      await nextRenderHandler(raw.req, raw.res, url);
      return h.close;
    }
  });

  await app.prepare();
  await server.start();

  console.log("Server running on %s", server.info.uri);
})();

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});
