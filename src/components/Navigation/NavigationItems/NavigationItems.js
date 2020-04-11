import React, { Component } from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import {connect} from 'react-redux';

class NavigationItems extends Component {
  render() {

    let navigationItems;
    if(this.props.connected){
        navigationItems =     <ul className={classes.NavigationItems}>
        <NavigationItem link="/logout" exact>
          Logout
        </NavigationItem>
        <NavigationItem link="/orders" exact>
          Orders
        </NavigationItem>
      </ul>
    }else{
        navigationItems =     <ul className={classes.NavigationItems}>
        <NavigationItem link="/login" exact>
          Login
        </NavigationItem>
      </ul>
    }

    return navigationItems;
  }
};

const mapStateToProps = (state) => {
    return {
        connected: !!state.token
    }
}

 export default connect(mapStateToProps)(NavigationItems);
