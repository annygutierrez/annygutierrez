import React from 'react';
import classes from './DrawerToggle.css';

const drawerToggle = (props) => {
  const toggleIcon = props.active ? 'fas fa-arrow-up' : 'fas fa-arrow-down';
  const containerClasses = [classes.DrawerToggle];
  let toggleText = 'Menu';
  const textClasses = [classes.menuText]
  if (props.active) {
    containerClasses.push(classes.Close);
    textClasses.push(classes.ActiveText);
    toggleText = 'Close'
  }
  return(
    <div onClick={props.clicked} className={containerClasses.join(' ')}>
      <div className={textClasses.join(' ')}>{toggleText}</div>
      <span className={classes.icon}>
        <i className={toggleIcon}></i>
      </span>
    </div>
  );
}

export default drawerToggle;
