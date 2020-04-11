import React, { Component } from 'react';
import classes from './Container.module.css';
import {getButtonClassesByColor} from '../../shared/Colors/Colors';
import {getClassesBySize} from '../../shared/Sizes/Sizes';
/*
The Jumbotron component get as props 3 strings;
1. title.
2. paragraph.
3. button.
*/


class Jambotron extends Component {
    render() {
        let jambotronClasses = []; 
        let buttonClass = getButtonClassesByColor(this.props.color, classes);
        let sizeClass =  getClassesBySize(this.props.size, classes);

        jambotronClasses.push(classes.Jambotron, buttonClass, sizeClass);

        return (
            <div className={jambotronClasses.join(" ")}>
                {this.props.children}
            </div>
        )
    }
};

export default Jambotron;
