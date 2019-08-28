const Hapi = require("@hapi/hapi");
const next = require("next");
const { parse } = require("url");
const Boom = require("boom");

const { promisify } = require("util");
const ls = promisify(require("fs").readdir);

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "XLR4C7NJpeb!yqA7XD!*",
  database: "next"
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function(error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

connection.end();

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
  const handler = app.getRequestHandler();
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

  server.route({
    method: "GET",
    path: "/{p*}",
    handler: async ({ raw, url }, h) => {
      await handler(raw.req, raw.res, url);
      return h.close;
    }
  });

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

  await app.prepare();
  await server.start();

  console.log("Server running on %s", server.info.uri);
})();

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});
