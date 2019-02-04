import React, { Component } from 'react';
import avatar from './assets/avatar.png';
import america from './assets/americatv.png';
import telefonica from './assets/telefonica.png';
import everis from './assets/everis.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <p className="warning">Website in development</p>
        </header>
        <main className="App-header">

          <img src={avatar} className="App-logo" alt="logo" />
          <h1 className="title">
            Anny <span className="orange">Gutierrez López</span>
          </h1>
          <p className="subtitle">Lima (Magdalena del Mar), Perú - <a href="mailto:annygutierrezlopez@gmail.com" className="orange">annygutierrezlopez@gmail.com</a></p>
          <div className="aboutBox">
            <p className="aboutText">
              I'm a software developer, currently focused on the development of hybrid mobile
              applications and developing in an environment with decentralized
              technologies in Everis Blockchain, looking for applications of these technologies
              in the real world and for the decentralized management of information.
              Interested in innovation projects and related to new technologies.
            </p>
          </div>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/annygutierrez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            className="App-link"
            href="https://github.com/annygutierrez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="App-link"
            href="https://medium.com/@annygutierrez"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/annygutierrez23"
          >
            Facebook
          </a>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/annyglop16/"
          >
            Instagram
          </a>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/annyglop23"
          >
            Twitter
          </a>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.reddit.com/user/annygutierrez3"
          >
            Reddit
          </a>
          <div className="experienceBox">
            <h2 className="experienceTitle">Exper<span className="orange">ience</span></h2>
            <div className="circle"></div>
            <p className="position">Front-end developer /Back-end</p>
            <p className="place">América Televisión</p>
            <p><span className="tools">Vue.js</span> . <span className="tools">MongoDB</span> . <span className="tools">Node.js</span> . <span className="tools">Vuex</span> . <span className="tools">Element UI</span></p>
            <div className="aboutBox">
              <p className="aboutText">
                As the first innovation team at America Television, we seek to create effective tools to manage
                information and improve the efficiency of work in the different areas of the channel, with a work method
                based on agile methodologies and focusing on the user.
            </p>
            </div>
            <img src={america} className="america" alt="america" />
            <div className="circle"></div>
            <p className="position">Front-end developer /Blockchain Developer</p>
            <p className="place">Everis an NTT Data Company</p>
            <p><span className="tools">React Native</span> . <span className="tools">IPFS</span> . <span className="tools">Solidity</span> . <span className="tools">Ethereum</span> . <span className="tools">Node.js</span></p>
            <div className="aboutBox">
              <p className="aboutText">
              We work on decentralized apps and digital tools projects, based on
              Blockchain technologies, we seek to be synonymous with disruption in the
              technological community in Latin America and the world. 
            </p>
            </div>
            <img src={everis} className="america" alt="america" />
            <div className="circle"></div>
            <p className="position">Front-end developer</p>
            <p className="place">Telefónica</p>
            <p><span className="tools">React Native</span></p>
            <div className="aboutBox">
              <p className="aboutText">
              We develop applications to improve the accessibility of information in the workplace.
            </p>
            </div>
            <img src={telefonica} className="america" alt="america" />
          </div>
        </main>
      </div>
    );
  }
}

export default App;