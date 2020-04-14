import React, { Component } from 'react';
import classes from './Edit.module.css';
import EditOrder from './EditOrder/EditOrder';

class Edit extends Component {
    render() {
        return (
            <div className={classes.EditPage}>
                <EditOrder />
            </div>
        )
    }
}

export default Edit;
