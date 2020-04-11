import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import {Redirect} from 'react-router-dom';

class Logout extends Component {

    componentDidMount() {
        this.props.logout();
        console.log("trying to logout....");
    }
    

    render() {
        return <Redirect to="/login"/>
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);
