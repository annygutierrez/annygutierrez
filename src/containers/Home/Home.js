import React, { Component } from 'react';
import classes from './Home.css';
import DrawerToggle from '../../components/Navigation/SideDrawer/DrawerToggle/DrawerToggle';
import FooterDescription from '../../components/FooterDescription/FooterDescription';
import IntroductionSection from '../../components/IntroductionSection/IntroductionSection';
import SpotlightSection from '../../components/SpotlightSection/SpotlightSection';


class Home extends Component {
  state = {
    showMenu: false,
    intervalId: 0,
    thePosition: false,
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

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        this.setState({ thePosition: true })
      } else {
        this.setState({ thePosition: false })
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - "15");
  }

  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 70) {
      this.setState({ showMenu: true });
    } else {
      this.setState({ showMenu: false });
    }
  };

  scrollToTop = () => {
    let intervalId = setInterval(this.onScrollStep.bind(this), "16.66");
    this.setState({ intervalId: intervalId });
  }


  render() {
    const containerClasses = [classes.menuBtn];
    if (this.state.showMenu) {
      containerClasses.push(classes.menu2);
    }
    return (
      <div className={classes.Home}>
        {this.state.showMenu && (
          <div className={containerClasses.join(' ')}>
            <DrawerToggle
              clicked={() => this.scrollToTop()}
              active={false}
            />
          </div>
        )}
        <div className={classes.MainContainer}>
          <IntroductionSection socialMedia={this.state.socialMedia} />
          <SpotlightSection />
        </div>
        <FooterDescription />
      </div>
    );
  }
}

export default Home;