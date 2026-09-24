import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import Recored from "./Recored";

const RecordTable = ({ filter }) => {
  const people = [
    {
      name: "Veronica Mize",
      dob: "11/29/2011",
    },
    {
      name: "Cecilia Olsson",
      dob: "09/16/1992",
    },
    {
      name: "Peter Parker",
      dob: "01/16/1992",
    },
    {
      name: "Jimmy Shergil",
      dob: "12/12/2001",
    },
    {
      name: "Alexander Alfred",
      dob: "02/09/1891",
    },
    {
      name: "Janice Shroyer",
      dob: "12/01/1982",
    },
    {
      name: "Ralph White",
      dob: "11/30/2011",
    },
    {
      name: "Deborah T. Decker",
      dob: "10/31/1999",
    },
  ];

  function dateToNum(d) {
    // Convert date "26/06/2016" to 20160626
    d = d.split("/");
    return Number(d[2] + d[1] + d[0]);
  }

  const sortByAge = () => {
    people.sort(function (a, b) {
      return dateToNum(a.dob) - dateToNum(b.dob);
    });
  };

  const sortByName = () => {
    people.sort(function (a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      return 1;
    });
  };

  return (
    <Paper className="width">
      {console.log("record table")}
      {filter === "name" ? sortByName() : sortByAge()}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="table-header">Name</TableCell>
            <TableCell className="table-header">Date of Birth</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((person, index) => (
            <Recored key={index} {...person} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  filter: state,
});

export default connect(mapStateToProps)(RecordTable);
