import React, { Component } from 'react';
import classes from './Experience.css';
import everisLogo from '../../assets/everis.png';
import americaLogo from '../../assets/americatv.png';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';


class Experience extends Component {
// Reorganize code
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.MargenContainer}>
          <p className={classes.MargenTitle}>Experience</p>
        </div>
        <div className={classes.Content}>
          <Breadcrumb />
          <div className={classes.WorkCard}>

            <div className={classes.ExperienceContainer}>
              <p className={classes.experienceTitle}>Front-end developer</p>
              <p className={classes.experienceSubtitle}>Blockchain developer</p>
              <ul className={classes.ListItems}>
                <li className={classes.Item}>Development of a bridge application with decentralized database.</li>
                <li className={classes.Item}>Participation in the agil de everis community.</li>
                <li className={classes.Item}>Work with agile methodologies.</li>
              </ul>
            </div>

            <div className={classes.SkillsContainer}>
              <div className={classes.CompanyContainer}>
               <div className={classes.separator}></div>
                <img className={classes.companyLogo} src={everisLogo} alt="company-one" />
                <div>
                  <p className={classes.CompanyName}>Everis <span className={classes.CompanyNameTwo}>an NTT Data Company</span></p>
                  <p className={classes.TeamName}>Everis Blockchain</p>
                </div>
              </div>
              <ul className={classes.SkillsItems}>
                <li className={classes.SkillItem}>React Native</li>
                <li className={classes.SkillItem}>MongoDB</li>
                <li className={classes.SkillItem}>Javascript</li>
                <li className={classes.SkillItem}>Agile Methodologies</li>
                <li className={classes.SkillItem}>Nodejs</li>
                <li className={classes.SkillItem}>Solidity</li>
                <li className={classes.SkillItem}>Ethereum - Blockchain</li>
                <li className={classes.SkillItem}>IPFS</li>
                <li className={classes.SkillItem}>Linux</li>
              </ul>
            </div>
            
          </div>
          <p className={classes.descriptionWork}>We work on decentralized apps and digital tools projects, based on Blockchain technologies, we seek to be synonymous with disruption in the technological community in Latin America and the world.</p>
        <div className={classes.PageColorSeparator}></div>
        <div className={classes.PageSeparator}></div>

          <div className={classes.WorkCard}>
            <div className={classes.ExperienceContainer}>
              <p className={classes.experienceTitle}>Front-end developer</p>
              <p className={classes.experienceSubtitle}>Back-end developer</p>
              <ul className={classes.ListItems}>
                <li className={classes.Item}>Front-end developer of a platform that helps workers in different areas to do their work more efficiently.</li>
                <li className={classes.Item}>Participation in user experience interviews.</li>
                <li className={classes.Item}>Design of the database architecture of the internal program of the channel.</li>
                <li className={classes.Item}>Creation and maintenance of database.</li>
                <li className={classes.Item}>Work with agile methodologies.</li>
              </ul>
            </div>
            <div className={classes.SkillsContainer}>
              <div className={classes.CompanyContainer}>
               <div className={classes.separator}></div>
                <img className={classes.companyLogo} src={americaLogo} alt="company-one" />
                <div>
                  <p className={classes.CompanyName}>América televisión</p>
                  <p className={classes.TeamName}>InnovoAmérica</p>
                </div>
              </div>
              <ul className={classes.SkillsItems}>
                <li className={classes.SkillItem}>Vue.js</li>
                <li className={classes.SkillItem}>MongoDB</li>
                <li className={classes.SkillItem}>Javascript</li>
                <li className={classes.SkillItem}>Agile Methodologies</li>
                <li className={classes.SkillItem}>Nodejs</li>
                <li className={classes.SkillItem}>Vuetify</li>
                <li className={classes.SkillItem}>Element UI</li>
              </ul>
            </div>
          </div>
          <p className={classes.descriptionWork}>As the first innovation team at America Television, we seek to create effective tools to manage information and improve the efficiency of work in the different areas of the channel, with a work method based on agile methodologies and focusing on the user. </p>
        

        </div>
      </div>
    );
  }
}

export default Experience;