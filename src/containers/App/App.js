import "./App.css";
import Layout from "../Layout/Layout";
import React, { Component } from "react";
import Routes from "../../shared/Routes/Routes";
import {connect} from 'react-redux';
import * as actions from '../..//store/actions/index';

class App extends Component {
  componentDidMount() {
    console.log("[App] componentDidMount");
    this.props.autoLogin();
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Routes />
        </Layout>
      </div>
    );
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(actions.authCheckState())
  }
}

export default connect(null , mapDispatchToProps)(App);
