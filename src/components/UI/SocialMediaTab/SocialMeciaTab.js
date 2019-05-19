import React from 'react';
import classes from './SocialMediaTab.css';

const socialMediaTab = (props) => {
  const socialMediaIcons = props.icons.map(icon => {
    let iconStyle = [classes.Icon, icon.icon];
    return(
      <a
        href={icon.link}
        key={Math.random()}
        className={classes.Link}
      >
        <i className={iconStyle.join(' ')}></i>
      </a>
    );
  })
  return (
    <div className={classes.SocialMediaTab}>
      {socialMediaIcons}
    </div >
  );
}
export default socialMediaTab;