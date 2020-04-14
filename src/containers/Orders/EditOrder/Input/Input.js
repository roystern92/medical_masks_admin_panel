import React from "react";
//css module
import classes from "./Input.module.css";

const input = props => {
  let inputElement = null;
  let inputClasses = [];
  let res;
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case "select":
      inputClasses.push(classes.SelectElement);
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      res = <div className={classes.Select}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>;
      break;
    default:
      inputClasses.push(classes.InputElement);
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      res = <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>;
  }

  return res;
};

export default input;



