import React, { Component } from "react";
import classes from "./Button.module.css";
import {getButtonClassesByColor} from "./colors";

export default class Button extends Component {
  /*
        Props:
         1. label 
         2. color : color for the background.
         3. clicked: A method that will listen to click event
    */
  
  render() {
    let buttonClasses = [];
    let colorClass = getButtonClassesByColor(this.props.color, classes);
    buttonClasses.push(classes.Button, colorClass);
    return (
      <div className={buttonClasses.join(" ")}>
          <button onClick={(event) => {
            event.preventDefault();
            this.props.clicked();
          }
            }>{this.props.label}</button>
      </div>
    );
  }
}
