import React, { Component } from 'react'
import classes from './Row.module.css';

export default class Row extends Component {
    render() {
        return (
            <div className={classes.Row}>
                {this.props.children}
            </div>
        )
    }
};
