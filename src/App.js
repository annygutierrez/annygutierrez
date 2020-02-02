import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import menuIcon from './assets/menu-icon.svg';
import labelIcon from './assets/label-icon.svg';
import user from './assets/user.svg';
import arrow from './assets/arrow.svg';
import kaytrust from './assets/kaytrust.svg';
import kaytrustweb from './assets/kaytrustweb.svg';

function App() {
  return (
    <div className="main-container">
      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        <img className="menu-icon-img" src={menuIcon} alet="menu-icon" />
      </label>
      <img className="label-icon" src={labelIcon} alet="label-icon" />
      <div className="content-container">
        <div className="presentation-section">
          <p className="salute">HELLO THERE</p>
          <img className="user-image" src={user} alt="user-image" />
          <div className="title-container">
            <span className="title-presentation">My name is<br></br> Anny Gutierrez.</span>
            <br></br>
            <span className="title-presentation">I develop apps & progams.</span>
          </div>

          <div className="about-section">
            <div className="about-head d-flex align-items-center pr-2">
              <img className="arrow" src={arrow} alt="arrow-icon" />
              <span className="about-title">About me</span>
            </div>
            {/* <p className="about-description">I'm a software developer, currently focused on the development of hybrid mobile applications and developing in an environment with decentralized technologies in Everis Blockchain.</p> */}
            <p className="salute mt-5">ELSEWHERE</p>
            <div className="d-flex flex-row media-links">
              <a href="https://www.instagram.com/annyglop16/" target="_blank" className="media-icon-container d-flex align-items-center justify-content-center insta">
                <i className="fab fa-instagram icons-media"></i>
              </a>
              <a href="https://www.linkedin.com/in/annygutierrez/" target="_blank" className="media-icon-container d-flex align-items-center justify-content-center linked">
                <i className="fab fa-linkedin-in icons-media"></i>
              </a>
              <a href="mailto:annygutierrezlopez@gmail.com" target="_blank" className="media-icon-container d-flex align-items-center justify-content-center mail">
                <i className="far fa-envelope icons-media"></i>
              </a>
              <a href="https://twitter.com/annyglop23" target="_blank" className="media-icon-container d-flex align-items-center justify-content-center twitter">
                <i className="fab fa-twitter icons-media"></i>
              </a>
            </div>
          </div>


          <div className="projects-section pt-3">
            <p className="salute mt-5">RECENT WORK</p>

            <div className="project-container d-flex align-items-center justify-content-center flex-column py-3">
              <img className="project-img" src={kaytrust} alt="project" />
              <div className="project-text py-4">
                <p className="project-title">Kay Trust Wallet - Digital Identity</p>
                <p className="project-description">KayTrust is a trusted platform that allows you to manage the digital identities of your customers in a safe, reliable and end-to-end manner.</p>
              </div>
            </div>

            <div className="project-container d-flex align-items-center justify-content-center flex-column py-3">
              <img className="project-img" src={kaytrustweb} alt="project" />
              <div className="project-text py-4">
                <p className="project-title">Kay Trust Wallet - Digital Identity</p>
                <p className="project-description">KayTrust is a trusted platform that allows you to manage the digital identities of your customers in a safe, reliable and end-to-end manner.</p>
              </div>
            </div>


          </div>


          <div className="contact-section">
            <p className="salute mt-5 pl-4 pb-3">CONTACT ME</p>
            <form className="contact-form d-flex align-items-center justify-content-center flex-column">
              <div className="input-group flex-nowrap input-contact py-2">
                <input type="text" className="form-control input-form-contact" placeholder="Name" />
              </div>
              <div className="input-group flex-nowrap input-contact py-2">
                <input type="text" className="form-control input-form-contact" placeholder="Email" />
              </div>
              <div className="input-group flex-nowrap input-contact py-2">
                <textarea className="form-control input-form-contact" placeholder="Message"></textarea>
              </div>
              <button type="button" className="btn btn-outline-secondary form-button mt-4">Send Message</button>

            </form>
          </div>


        </div>

      </div>
      <div className="footer-container py-3 d-flex align-items-center justify-content-center flex-column mt-5">
        <div className="d-flex flex-row media-links pt-3">
          <a href="https://www.instagram.com/annyglop16/" target="_blank" className="media-icon-container d-flex align-items-center justify-content-center insta">
            <i className="fab fa-instagram icons-media"></i>
          </a>
          <a href="https://www.linkedin.com/in/annygutierrez/" target="_blank" className="media-icon-container d-flex align-items-center justify-content-center linked">
            <i className="fab fa-linkedin-in icons-media"></i>
          </a>
          <a href="mailto:annygutierrezlopez@gmail.com" target="_blank" className="media-icon-container d-flex align-items-center justify-content-center mail">
            <i className="far fa-envelope icons-media"></i>
          </a>
          <a href="https://twitter.com/annyglop23" target="_blank" className="media-icon-container d-flex align-items-center justify-content-center twitter">
            <i className="fab fa-twitter icons-media"></i>
          </a>
        </div>
        <p className="mt-5 footer-copyrights">© 2020 Anny Gutierrez. All rights reserved.</p>
      </div>

      <div className="slideout-sidebar d-flex align-items-center justify-content-center">
        <ul className="menu-list">
          <li>Kaytrust</li>
          <li>Cadena</li>
          <li>In_grid</li>
          <li>Alastria</li>
          <li>Honduras</li>
          <li>Contact</li>
        </ul>
      </div>

    </div>
  );
}

export default App;
