import React, { Component } from 'react';
import classes from './Paragrapg.module.css';
import {getButtonClassesByColor} from "../../../shared/Colors/Colors";

export default class Paragraph extends Component {
  /*
        Props:
         1. content : the content of the paragraph.
         2. color : the color of the font (red, blue, black).
    */

    render() {
        let paragraphClasses = [];
        let colorClass = getButtonClassesByColor(this.props.color, classes);
        paragraphClasses.push(classes.Paragraph , colorClass);

        return (
            <div className={paragraphClasses.join(" ")}>
                <p>{this.props.content}</p>
            </div>
        )
    }
}
