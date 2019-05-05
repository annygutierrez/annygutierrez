import React from 'react';
import annygutierrezLogo from '../../assets/images/logo.png';
import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={annygutierrezLogo} alt="annygutierrezlogo"/>
  </div>
);

export default logo;