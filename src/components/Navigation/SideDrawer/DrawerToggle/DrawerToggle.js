import React from 'react';
import classes from './DrawerToggle.css';

const drawerToggle = (props) => {
  const containerClasses = [classes.DrawerToggle];
  let toggleText = 'Menu';
  const textClasses = [classes.menuText]
  if (props.active) {
    containerClasses.push(classes.Close);
    textClasses.push(classes.ActiveText);
    toggleText = 'Close'
  }
  return(
    <div className={containerClasses.join(' ')}>
      <div onClick={props.clicked} className={textClasses.join(' ')}>{toggleText}</div>
      <span className={classes.icon}>
        <i className="fas fa-arrow-down"></i>
      </span>
    </div>
  );
}

export default drawerToggle;
