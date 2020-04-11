import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../../containers/Login/Login";
import Logout from "../../containers/Logout/Logout";
import Orders from '../../containers/Orders/Orders';

// Redux configuration
import { connect } from "react-redux";

const LOGIN_ROUTE = "/login";
const LOGOUT_ROUTE = "/logout";
const ORDERS_ROUTE = "/orders";

class Routes extends Component {
  componentDidMount() {
    console.log("[Routes]componentDidMount");
  }

  render() {
    let routes;
    if (this.props.connected) {
      routes = (
        <Switch>
          <Route path={ORDERS_ROUTE} exact component={Orders} />
          <Route path={LOGOUT_ROUTE} exact component={Logout} />
          <Redirect to={ORDERS_ROUTE} />
        </Switch>
      );
    } else {
      routes = (
        <Switch>
          <Route path={LOGIN_ROUTE} exact component={Login} />
          <Redirect to={LOGIN_ROUTE} />
        </Switch>
      );
    }
    return routes;
  }
}

const mapStatesToProps = (states) => {
  return {
    connected: !!states.token,
  };
};

export default connect(mapStatesToProps)(Routes);
