import React from 'react';
import classes from './Breadcrumb.css';
import { NavLink } from 'react-router-dom';

const Breadcrumb = () => {
  return (
    <div className={classes.NavContainer}>
      <p className={classes.NavText}>
        <NavLink exact to="/" className={classes.RouteTextOne}>Home</NavLink>
        <span className={classes.Slash}> / </span>
        <span className={classes.CurrentRoute}>Experience</span></p>
    </div>
  )
};

export default Breadcrumb;