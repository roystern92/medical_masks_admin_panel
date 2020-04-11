import React, { Component } from 'react';
import classes from './Filter.module.css';
import Logo from '../../../components/Logo/Logo';

class Filter extends Component {
    render() {
        let placeholder = '"filter" : "example"';
        return (
            <div className={classes.Filter}>
                <div className={classes.Logo}><Logo label="FILTER"/></div> 
                <div className={classes.Search}>
                    <input type="text" placeholder={placeholder} />
                </div>
            </div>
        )
    }
};

export default Filter;
