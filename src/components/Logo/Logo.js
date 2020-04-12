import React from "react";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <div className={classes.Title}>
      <h2>{props.label}</h2>
    </div>
  </div>
);

export default logo;
