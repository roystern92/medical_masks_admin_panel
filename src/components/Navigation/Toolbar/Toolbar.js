import React from 'react';
import classes from './Toolbar.module.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    let toolbarClasses = [classes.Toolbar];
    if (props.showSideDrawer) {
        toolbarClasses.push(classes.SideDrawerOpen);
    }


    return (
        <header className={toolbarClasses.join(' ')}>
            <DrawerToggle clicked={props.drawerToggleClicked} />

            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>);

}

export default toolbar;
