import React, { Component } from 'react';
import classes from './Edit.module.css';
import EditOrder from './EditOrder/EditOrder';
import withErrorHandler from './withErrorHandler/withErrorHandler';
import axios from '../../axios/axios';
class Edit extends Component {
    render() {
        return (
            <div className={classes.EditPage}>
                <EditOrder />
            </div>
        )
    }
}

export default withErrorHandler(Edit,axios);
