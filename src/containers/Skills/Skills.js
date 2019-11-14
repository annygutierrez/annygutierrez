import React, { Component } from 'react';
import classes from './Skills.css';
import { NavLink } from 'react-router-dom';
import reactLogo from '../../assets/react.svg';
import htmlLogo from '../../assets/html.svg';
import cssLogo from '../../assets/css.svg';
import gitLogo from '../../assets/git.svg';
import vueLogo from '../../assets/vue.svg';
import jsLogo from '../../assets/js.svg';


class Skills extends Component {

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.MargenContainer}>
          <p className={classes.MargenTitle}>Experience</p>
        </div>
        <div className={classes.Content}>
          <div className={classes.NavContainer}>
            <p className={classes.NavText}>
              <NavLink exact to="/" className={classes.RouteTextOne}>Home</NavLink>
              <span className={classes.Slash}> / </span>
              <span className={classes.CurrentRoute}>Skills</span></p>
          </div>

          <div className={classes.WorkCard}>
            <p className={classes.SectionTitle}>Here are the technologies in which I have expertise.</p>
            <p className={classes.SectionDescription}>My biggest strength is javascript definitely, I learned it quickly, and it allowed me to immerse myself a bit in the back-end world. I value the frameworks and libraries to make SPAs in javascript, especially React, for its adaptability to the specific needs of a project, and its great support in the community.</p>
          </div>
        <div className={classes.PageColorSeparator}></div>
        <div className={classes.PageSeparator}></div>

        <div className={classes.SkillsItems}>

           <div className={classes.SkillCard}>
               <div className={classes.SkillTextContainer}>
                   <p className={classes.SkillTitle}>React Native</p>
                   <p className={classes.SkillDescription}>Mobile development</p>
               </div>
               <div className={classes.SkillPicContainer}>
                   <div className={classes.SkillCardSeparator}></div>
                   <img src={reactLogo} alt="skill-pic" className={classes.SkillPic}/>
               </div>
           </div>

           <div className={classes.SkillCard}>
               <div className={classes.SkillTextContainer}>
                   <p className={classes.SkillTitle}>HTML</p>
                   <p className={classes.SkillDescription}>Front-end development</p>
               </div>
               <div className={classes.SkillPicContainer}>
                   <div className={classes.SkillCardSeparator}></div>
                   <img src={htmlLogo} alt="skill-pic" className={classes.SkillPic}/>
               </div>
           </div>

           <div className={classes.SkillCard}>
               <div className={classes.SkillTextContainer}>
                   <p className={classes.SkillTitle}>CSS</p>
                   <p className={classes.SkillDescription}>Front-end development</p>
               </div>
               <div className={classes.SkillPicContainer}>
                   <div className={classes.SkillCardSeparator}></div>
                   <img src={cssLogo} alt="skill-pic" className={classes.SkillPic}/>
               </div>
           </div>

           <div className={classes.SkillCard}>
               <div className={classes.SkillTextContainer}>
                   <p className={classes.SkillTitle}>Git</p>
                   <p className={classes.SkillDescription}>Software development</p>
               </div>
               <div className={classes.SkillPicContainer}>
                   <div className={classes.SkillCardSeparator}></div>
                   <img src={gitLogo} alt="skill-pic" className={classes.SkillPic}/>
               </div>
           </div>

           <div className={classes.SkillCard}>
               <div className={classes.SkillTextContainer}>
                   <p className={classes.SkillTitle}>Vue</p>
                   <p className={classes.SkillDescription}>Front-end development</p>
               </div>
               <div className={classes.SkillPicContainer}>
                   <div className={classes.SkillCardSeparator}></div>
                   <img src={vueLogo} alt="skill-pic" className={classes.SkillPic}/>
               </div>
           </div>
           <div className={classes.SkillCard}>
               <div className={classes.SkillTextContainer}>
                   <p className={classes.SkillTitle}>React.js</p>
                   <p className={classes.SkillDescription}>Front-end development</p>
               </div>
               <div className={classes.SkillPicContainer}>
                   <div className={classes.SkillCardSeparator}></div>
                   <img src={reactLogo} alt="skill-pic" className={classes.SkillPic}/>
               </div>
           </div>

           <div className={classes.SkillCard}>
               <div className={classes.SkillTextContainer}>
                   <p className={classes.SkillTitle}>Javascript</p>
                   <p className={classes.SkillDescription}>Front-end development</p>
               </div>
               <div className={classes.SkillPicContainer}>
                   <div className={classes.SkillCardSeparator}></div>
                   <img src={jsLogo} alt="skill-pic" className={classes.SkillPic}/>
               </div>
           </div>

        </div>
        </div>
      </div>
    );
  }
}

export default Skills;