import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein };
};

const SimpleTable = ({
  headers = ["Name", "Slug", "Created", "Edit"],
  rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9)
  ]
}) => {
  const classes = useStyles();
  let key = 0;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {headers.map((heading, index) => {
              key = index;
              if (index === 0) {
                return <TableCell key={index}>{heading}</TableCell>;
              } else {
                return (
                  <TableCell align="right" key={index}>
                    {heading}
                  </TableCell>
                );
              }
            })}
            <TableCell align="right" key={key + 1}>
              Edit
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              {Object.keys(row).map((col, index) => {
                key = index;
                if (index === 0) {
                  return (
                    <TableCell component="th" scope="row" key={index}>
                      {row[col]}
                    </TableCell>
                  );
                } else {
                  return (
                    <TableCell align="right" key={index}>
                      {row[col]}
                    </TableCell>
                  );
                }
              })}
              <TableCell align="right" key={key + 1}>
                <Link href={`/client/edit/${row.id}`}>
                  <Button variant="contained" color="primary">
                    Edit
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default SimpleTable;
