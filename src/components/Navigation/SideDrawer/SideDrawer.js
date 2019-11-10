import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <div className={attachedClasses.join(' ')}>
      <nav>
        <NavigationItems closeDrawer={props.closeDrawer}/>
      </nav>
    </div>
  );
}

export default sideDrawer;