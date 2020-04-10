import React, { Component } from "react";
import classes from "./Button.module.css";
import {getButtonClassesByColor} from "../../../shared/Colors/Colors";
import {getClassesBySize} from '../../../shared/Sizes/Sizes';

export default class Button extends Component {
  /*
        Props:
         1. title : string of the button title.
         2. color : color for the background (The colors are: 1. , 2. , 3. )
         3. clicked: A method that will listen to click event
    */
  
  render() {
    let buttonClasses = [];
    let colorClass = getButtonClassesByColor(this.props.color, classes);
    let sizeClass =  getClassesBySize(this.props.size, classes);
    buttonClasses.push(classes.Button, colorClass,sizeClass);

    return (
      <div className={buttonClasses.join(" ")}>
          <button onClick={this.props.clicked}  className={classes.Btn}>{this.props.title}</button>
      </div>
    );
  }
}
