import React, { Component } from 'react';
import classes from './Title.module.css';
import {getButtonClassesByColor} from "../../../shared/Colors/Colors";
import {getClassesBySize} from '../../../shared/Sizes/Sizes';

export default class Title extends Component {
    /*
        Props:
         1. title : string of the title
         2. size
         3.color - 
    */

   render() {
    let titleClasses = [];
    let colorClass = getButtonClassesByColor(this.props.color, classes);
    let sizeClass =  getClassesBySize(this.props.size, classes);
    titleClasses.push(classes.Title, colorClass,sizeClass);


        return (
            <div className={titleClasses.join(" ")}>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
