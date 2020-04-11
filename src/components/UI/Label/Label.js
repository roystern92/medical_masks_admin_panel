import React from "react";
import classes from "./Label.module.css";

/*
        Props:
         1. label : The label name.
 */


const label = (props) => {
  return (
    <div className={classes.Label}>
      <label>{props.label}</label>
    </div>
  );
};
export default label;
