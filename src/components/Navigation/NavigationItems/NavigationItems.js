import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem closeDrawer={props.closeDrawer} link="/" active >Home</NavigationItem>
        <NavigationItem closeDrawer={props.closeDrawer} link="/experience" active >Experience</NavigationItem>
        <NavigationItem closeDrawer={props.closeDrawer} link="/skills" active >Skills</NavigationItem>
        {/* <NavigationItem closeDrawer={props.closeDrawer} link="/projects" active >Projects</NavigationItem>
        <NavigationItem closeDrawer={props.closeDrawer} link="/goals" active >Goals</NavigationItem>
        <NavigationItem closeDrawer={props.closeDrawer} link="/about" active >About</NavigationItem> */}
      </ul>
);

export default navigationItems;