import React from 'react';
import classes from './IntroductionSection.css';
import SocialMediaTab from '../UI/SocialMediaTab/SocialMeciaTab';
import avatar from '../../assets/avatar_group.jpg';
import search from '../../assets/search.svg';
import Typed from 'react-typed';

const IntroductionSection = (props) => {
  return(
  <div className={classes.Introduction}>
    <img src={avatar} alt="avatar" className={classes.Avatar} />
    <p className={classes.MainTitle}>Anny Gutierrez</p>
    <SocialMediaTab icons={props.socialMedia} />
    <p className={classes.MainParagraph}>
      Front-end Developer
    </p>
    <hr className={classes.vr}></hr>
    <div className={classes.Input}>
      <img src={search} alt="search-icon" className={classes.search} />
      <Typed
        strings={[
            'javascript',
            'react.js',
            'React Native',
            'mongodb',
            'nodejs',
            'mobile apps',
            'web apps',
            'git'
          ]}
            typeSpeed={80}
            backSpeed={80}
            className={classes.InputDesign}
            loop
      />
    </div>
  </div>
)};

export default IntroductionSection;