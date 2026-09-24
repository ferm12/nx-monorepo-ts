import React, { Component, useState } from "react";
import { PropTypes } from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import { nameFilter, ageFilter } from "../actions/filterAction";

const Filter = ({ dispatch }) => {
  const [checked, setCheked] = useState(true);

  return (
    <div className="checkboxes">
      {checked ? console.log("ddd") : console.log("dxxxxxxxdd")}
      <Checkbox
        onClick={() => {
          setCheked(true);
          dispatch(nameFilter());
        }}
        checked={checked}
      />
      <label>Name </label>
      <Checkbox
        onClick={() => {
          setCheked(false);
          dispatch(ageFilter());
        }}
        checked={!checked}
      />
      <label>Age</label>
    </div>
  );
};

// class Filter extends Component {
//   render() {
//     return (
//       <div className="checkboxes">
//         <Checkbox />
//         <label>Name</label>
//         <Checkbox />
//         <label>Age</label>
//       </div>
//     );
//   }
// }

export default connect()(Filter);
