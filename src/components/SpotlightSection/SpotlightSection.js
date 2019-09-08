import React from 'react';
import classes from './SpotlightSection.css';

const spotlightSection = () => (
  <div className={classes.SpotlightContainer}>
    <img alt="spotlight-capture" className={classes.SpotlightImage} src="https://user-images.githubusercontent.com/32302890/57985994-e3306b00-7a34-11e9-8725-c466ef84c48a.png" alt="post-image" />
    <p className={classes.SpotlightContent}>
      This is <a className={classes.textLink} target="_blank" href="https://medium.com/laboratoria/diversidad-x-desigualdad-salarial-entre-hombres-y-mujeres-881b32800ce">the Hackathon of gender equility</a>, 720 minutes to find a creative solution for three big problems, teams of programmers in four Latin American countries working together.
  </p>
    <p className={classes.DateText}>Apr 12, 2019</p>
    <p className={classes.RecentSpotlightsTitle}>Recent Spotlights</p>
    <div className={classes.VerticalLine}></div>
    <div className={classes.SpotlightItem}>
      <div className={classes.SpotlightTitleCont}>
        <p className={classes.SpotlightTitle}>Blockchain</p>
      </div>
      <div className={classes.SpotlightDateCont}>
        <p className={classes.SpotlightDate}>Apr 12</p>
      </div>
    </div>
    <div className={classes.SpotlightItem}>
      <div className={classes.SpotlightTitleCont}>
        <p className={classes.SpotlightTitle}>Tokenization</p>
      </div>
      <div className={classes.SpotlightDateCont}>
        <p className={classes.SpotlightDate}>Apr 12</p>
      </div>
    </div>
    <div className={classes.SpotlightItem}>
      <div className={classes.SpotlightTitleCont}>
        <p className={classes.SpotlightTitle}>Identidad Digital</p>
      </div>
      <div className={classes.SpotlightDateCont}>
        <p className={classes.SpotlightDate}>Apr 12</p>
      </div>
    </div>
  </div>
);

export default spotlightSection;