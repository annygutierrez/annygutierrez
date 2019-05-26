import React, { Component } from 'react';
import SocialMediaTab from '../../components/UI/SocialMediaTab/SocialMeciaTab';
import classes from './Home.css';

class Home extends Component {
  state = {
    socialMedia: [
      {
        icon: 'fab fa-facebook-square',
        link: 'https://www.facebook.com/annygutierrez23'
      },
      {
        icon: 'fab fa-twitter',
        link: 'https://twitter.com/annyglop23'
      },
      {
        icon: 'fab fa-youtube',
        link: 'https://www.youtube.com/channel/UCd1tv3Us0v1K6je86h5gQQA'
      },
      {
        icon: 'fab fa-instagram',
        link: 'https://www.instagram.com/annyglop16/'
      },
      {
        icon: 'far fa-envelope',
        link: 'mailto:annygutierrezlopez@gmail.com?Subject=Hello%20Anny'
      },
      {
        icon: 'fab fa-github',
        link: 'https://github.com/annygutierrez/'
      }
    ]
  }
  render() {
    return (
      <div className={classes.Home}>
        <p className={classes.MainTitle}>Anny Gutierrez</p>
        <SocialMediaTab icons={this.state.socialMedia} />
        <p className={classes.MainParagraph}>
          Front-end Developer with substantial experience building bridge movile applications and javascript.
        </p>
        <div className={classes.SpotlightContainer}>
          <img className={classes.SpotlightImage} src="https://user-images.githubusercontent.com/32302890/57985994-e3306b00-7a34-11e9-8725-c466ef84c48a.png" alt="post-image" />
          <p className={classes.SpotlightContent}>
            This is the Hackathon of gender equility, 720 minutes to find a creative solution for three big problems, teams of programmers in four Latin American countries working together.
          </p>
          <p className={classes.DateText}>Apr 12, 2019</p>
          <p className={classes.RecentSpotlightsTitle}>Recent Spotlights</p>
          <div className={classes.VerticalLine}></div>
          <div className={classes.SpotlightItem}>
            <div className={classes.SpotlightTitleCont}>
              <p className={classes.SpotlightTitle}>Hackathon Laboratoria 2018 - I</p>
            </div>
            <div className={classes.SpotlightDateCont}>
              <p className={classes.SpotlightDate}>Apr 12</p>
            </div>
          </div>
          <div className={classes.SpotlightItem}>
            <div className={classes.SpotlightTitleCont}>
              <p className={classes.SpotlightTitle}>Hackathon Laboratoria 2018 - I</p>
            </div>
            <div className={classes.SpotlightDateCont}>
              <p className={classes.SpotlightDate}>Apr 12</p>
            </div>
          </div>
          <div className={classes.SpotlightItem}>
            <div className={classes.SpotlightTitleCont}>
              <p className={classes.SpotlightTitle}>Hackathon Laboratoria 2018 - I</p>
            </div>
            <div className={classes.SpotlightDateCont}>
              <p className={classes.SpotlightDate}>Apr 12</p>
            </div>
          </div>

        </div>
        <footer className={classes.HomeFooter}>
          <p className={classes.FooterTitle}>Laboratoria - UNU</p>
          <p className={classes.FooterDescription}><a href={'/'} className={classes.FooterLink}> Barranco</a>, <a href={'/'} className={classes.FooterLink}> Lima</a>, <a href={'/'} className={classes.FooterLink}> LI</a>, <a href={'/'} className={classes.FooterLink}> Perú</a></p>
          <p className={classes.FooterDescription}><a href={'/'} className={classes.FooterLink}> Pucallpa</a>, <a href={'/'} className={classes.FooterLink}> Ucayali</a>, <a href={'/'} className={classes.FooterLink}> Perú</a></p>
        </footer>
      </div>
    );
  }
}

export default Home;