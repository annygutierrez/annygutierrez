import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active >Home</NavigationItem>
        <NavigationItem link="/experience" active >Experience</NavigationItem>
        <NavigationItem link="/skills" active >Skills</NavigationItem>
        <NavigationItem link="/projects" active >Projects</NavigationItem>
        <NavigationItem link="/goals" active >Goals</NavigationItem>
        <NavigationItem link="/about" active >About</NavigationItem>
      </ul>
);

export default navigationItems;