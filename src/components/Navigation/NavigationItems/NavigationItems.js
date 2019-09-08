import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active >Home</NavigationItem>
        <NavigationItem link="/" active >Experience</NavigationItem>
        <NavigationItem link="/" active >Skills</NavigationItem>
        <NavigationItem link="/" active >Projects</NavigationItem>
        <NavigationItem link="/" active >Goals</NavigationItem>
        <NavigationItem link="/" active >About</NavigationItem>
      </ul>
);

export default navigationItems;