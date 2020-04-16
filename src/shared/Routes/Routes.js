import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../../containers/Login/Login";
import Logout from "../../containers/Logout/Logout";
import Orders from '../../containers/Orders/Orders';
import Edit from '../../containers/Edit/Edit';
import NewOrder from '../../containers/NewOrder/NewOrder';
// Redux configuration
import { connect } from "react-redux";

const LOGIN_ROUTE = "/login";
const LOGOUT_ROUTE = "/logout";
const NEWORDER_ROUTE = '/new-order';
const ORDERS_ROUTE = "/orders";
const EDIT_ROUTE = "/edit";

class Routes extends Component {
  componentDidMount() {
    console.log("[Routes]componentDidMount");
  }

  render() {
    console.log("[Routes] render");
    let routes;
    if (this.props.connected) {
      routes = (
        <Switch>
          <Route path={NEWORDER_ROUTE} exact component={NewOrder} />
          <Route path={ORDERS_ROUTE} exact component={Orders} />
          <Route path={LOGOUT_ROUTE} exact component={Logout} />
          <Route path={ EDIT_ROUTE} exact component={Edit} />
          <Redirect to={NEWORDER_ROUTE} />
        </Switch>
      );
    } else {
      routes = (
        <Switch>
          <Route path={NEWORDER_ROUTE} exact component={NewOrder} />
          <Route path={LOGIN_ROUTE} exact component={Login} />
          <Redirect to={NEWORDER_ROUTE} />
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
