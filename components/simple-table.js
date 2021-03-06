import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const headers = [
  "Dessert (100g serving)",
  "Calories",
  "Fat&nbsp;(g)",
  "Carbs&nbsp;(g)",
  "Protein&nbsp;(g)"
];

export default function SimpleTable({
  headers = [
    "Dessert (100g serving)",
    "Calories",
    "Fat (g)",
    "Carbs (g)",
    "Protein (g)"
  ],
  rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9)
  ]
}) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {headers.map((heading, index) => {
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
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              {Object.keys(row).map((col, index) => {
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
