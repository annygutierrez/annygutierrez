import React from 'react';
import classes from './FooterDescription.css';

const footerDescription = () => (
  <footer className={classes.HomeFooter}>
    <p className={classes.FooterTitle}>Laboratoria - UNU</p>
    <p className={classes.FooterDescription}><a href={'/'} className={classes.FooterLink}> Barranco</a>, <a href={'/'} className={classes.FooterLink}> Lima</a>, <a href={'/'} className={classes.FooterLink}> LI</a>, <a href={'/'} className={classes.FooterLink}> Perú</a></p>
    <p className={classes.FooterDescription}><a href={'/'} className={classes.FooterLink}> Pucallpa</a>, <a href={'/'} className={classes.FooterLink}> Ucayali</a>, <a href={'/'} className={classes.FooterLink}> Perú</a></p>
  </footer>
);

export default footerDescription;