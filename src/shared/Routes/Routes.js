import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from '../../components/Views/Login/Login';


const LOGIN_ROUTE = "/login";
const ORDERS_ROUTE = "/orders";

const routes = props => {
  let routes = (
    <Switch>
      <Route path={ORDERS_ROUTE} exact component={Login} />
      <Route path={LOGIN_ROUTE} exact component={Login} />
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
  return routes;
};

export default routes;
