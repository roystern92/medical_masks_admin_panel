import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => {

    let navigationItems = (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/orders" exact>Orders</NavigationItem>
            <NavigationItem link="/login" exact>Login</NavigationItem>
        </ul>
    );


    return (
        navigationItems
    );
};

export default navigationItems;