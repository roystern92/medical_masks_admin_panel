import React, { Component } from 'react';
import classes from './Header.module.css';

export default class Header extends Component {
    render() {
        return (
            <div className={classes.Header}>
                {this.props.children}
            </div>
        )
    }
}
