import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    const containerClasses = [classes.Toolbar];
    if (props.fixed) {
        containerClasses.push(classes.Fixed);
    }
    return (
        <header className={containerClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo width={87}/>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
            <div className={classes.MobileOnly}>
                <DrawerToggle
                    clicked={props.drawerToggleClicked}
                    active={props.drawerToggleActive}
                />
            </div>
        </header>
    )
};

export default toolbar;