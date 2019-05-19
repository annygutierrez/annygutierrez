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
      </div>
    );
  }
}

export default Home;