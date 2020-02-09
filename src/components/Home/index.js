import React, { useState, useEffect } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import menuIcon from '../../assets/menu-icon.svg';
import labelIcon from '../../assets/label-icon.svg';
import user from '../../assets/user.svg';
import arrow from '../../assets/arrow.svg';
import kaytrust from '../../assets/kaytrust.svg';
import people from '../../assets/people.svg';
import world from '../../assets/world.svg';
import kaytrustweb from '../../assets/kaytrustweb.svg';
import Notification from '../Notification';
import { useInput } from '../../hooks/input-hook';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { Router, Route, Switch, Redirect } from 'react-router';

function Home() {

  
  const [visible, setVisible] = useState(false);

  const hideMe = () => {
    setVisible(!visible);
  }

  useEffect(() => console.log('mounted'), []);

  // function getRandomColor() {
  //   var letters = '0123456789ABCDEF';
  //   var color = '#';
  //   for (var i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }
  
  function getRandomColor(){
    var r = (Math.round(Math.random()* 127) + 127).toString(16);
    var g = (Math.round(Math.random()* 127) + 127).toString(16);
    var b = (Math.round(Math.random()* 127) + 127).toString(16);
    return '#' + r + g + b;
}

  const color = getRandomColor();


  console.log(color);
  let style = { backgroundColor: color };
  if (!visible) style.display = "none";



  const [showNotification, setNotificationVisibility] = useState(-100);
  const [disableForm, setDisableForm] = useState(false);

  const { value: name, bind: bindName, reset: resetName } = useInput('');
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: message, bind: bindMessage, reset: resetMessage } = useInput('');


  useEffect(() => {
    let item = document.getElementsByTagName('main')[0];
    window.addEventListener('wheel', (e) => {

      if (e.deltaY > 0) item.scrollLeft += 100;
      else item.scrollLeft -= 100;
    });
    return () => window.removeEventListener('wheel', (e) => {

      if (e.deltaY > 0) item.scrollLeft += 100;
      else item.scrollLeft -= 100;
    });
  });

  const sendEmail = (event) => {
    event.preventDefault();
    if (name !== '' & email !== '' & message !== '') {
      setDisableForm(true);
      fetch('https://ag-db.herokuapp.com/post', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          message,
          email
        })
      })
        .then((msg) => {
          resetEmail();
          resetName();
          resetMessage();
          setNotificationVisibility(16);
          setDisableForm(false);
          setTimeout(() => {
            setNotificationVisibility(-100);
          }, 4000);
        })
        .catch(err => {
          setDisableForm(false);
        });


    }
  }

  return (
    <div className="main-container">
      {/* <div className="horizontal-scroll-wrapper squares">
        <div className="div-item">item 1</div>
        <div className="div-item">item 2</div>
        <div className="div-item">item 3</div>
        <div className="div-item">item 4</div>
        <div className="div-item">item 5</div>
        <div className="div-item">item 6</div>
        <div className="div-item">item 7</div>
        <div className="div-item">item 8</div>
      </div> */}
      <main className="cont-scroll">
        <div className="wrapper1" >
          <div className="texto photo1 proj-text">
            {/* <img className="kayweb1" src={kayweb1} alt="kayweb1" /> */}
            <div className="project-description-scroll px-4 py-4">
              <p className="p-2 font-weight-bold proj-text">
                <img className="icon-world mr-2" src={world} alt="world" />KayTrust
              </p>
              <p className="project-title proj-text">Kay Trust Wallet - Digital Identity</p>
              <p className="project-description proj-text">KayTrust is a trusted platform that allows you to manage the digital identities of your customers in a safe, reliable and end-to-end manner.</p>
            </div>
          </div>
          <div className="texto photo2">
            {/* <img className="kayweb1" src={people} alt="kayweb1" /> */}
            <div className="project-description-scroll px-4 py-4">
              <p className="p-2 font-weight-bold proj-text">
                <img className="icon-world mr-2" src={world} alt="world" />KayTrust
              </p>
              <p className="project-title proj-text">Kay Trust Wallet - Digital Identity</p>
              <p className="project-description proj-text">KayTrust is a trusted platform that allows you to manage the digital identities of your customers in a safe, reliable and end-to-end manner.</p>
            </div>
          </div>
          <div className="texto d-flex align-items-center justify-content-center">
            <form onSubmit={($event) => sendEmail($event)} className="contact-form d-flex align-items-center justify-content-center flex-column">
              <p className="salute pb-3 contact-title">CONTACT ME</p>
              {
                disableForm ? (
                  <div className="loading-container">
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                  </div>
                ) : (
                    <React.Fragment>
                      <div className="input-group flex-nowrap input-contact py-2">
                        <input {...bindName} type="text" className="form-control input-form-contact" placeholder="Name" />
                      </div>
                      <div className="input-group flex-nowrap input-contact py-2">
                        <input {...bindEmail} type="text" className="form-control input-form-contact" placeholder="Email" />
                      </div>
                      <div className="input-group flex-nowrap input-contact py-2">
                        <textarea {...bindMessage} className="form-control input-form-contact" placeholder="Message"></textarea>
                      </div>
                    </React.Fragment>
                  )
              }
              {
                disableForm ?
                  <p className="salute mt-4">Sending...</p> : (
                    <button
                      disabled={disableForm}
                      type="submit"
                      className="btn btn-outline-secondary form-button mt-4"
                    >
                      Send Message
                    </button>
                  )
              }

            </form>
          </div>
          {/* <div className="texto">Thats what you get</div>
          <div className="texto">Thats what you get</div>
          <div className="texto">Thats what you get</div>
          <div className="texto">Thats what you get</div>
          <div className="texto">Thats what you get</div>
          <div className="texto">Thats what you get</div>
          <div className="texto">Thats what you get</div>
          <div className="texto">Thats what you get</div>
          <div className="texto">Thats what you get</div>
          <div className="texto">Thats what you get</div> */}
        </div>
      </main>
      <Notification top={showNotification}></Notification>
      <input type="checkbox" id="menu-toggle" />
      <label onClick={() => hideMe()} htmlFor="menu-toggle" className="menu-icon">
        <img className="menu-icon-img" src={menuIcon} alt="menu-icon" />
      </label>
      <label htmlFor="menu-toggle" className="label-icon-container">
        <img className="label-icon" src={labelIcon} alt="label-icon" />
      </label>

      <div className="content-container">
        <div className="presentation-section">
          <p className="salute animation-text">HELLO THERE</p>
          <img className="user-image" src={user} alt="user-image" />
          <div className="title-container animation-text">
            <span className="title-presentation animation-text">My name is<br></br> Anny Gutierrez.</span>
            <br></br>
            <span className="title-presentation animation-text">I develop apps & progams.</span>
            <div className="rectangle-colorful" style={style}></div>
          </div>

          <div className="about-section">
            <div className="about-head d-flex align-items-center pr-2">
              <img className="arrow" src={arrow} alt="arrow-icon" />
              <span className="about-title animation-text">About me</span>
            </div>
            {/* <p className="about-description">I'm a software developer, currently focused on the development of hybrid mobile applications and developing in an environment with decentralized technologies in Everis Blockchain.</p> */}
            <p className="salute mt-5 animation-text">ELSEWHERE</p>
            <div className="d-flex flex-row media-links">
              <a href="https://www.instagram.com/annyglop16/" target="_blank" className="media-icon-container media-icon-container-press d-flex align-items-center justify-content-center insta animation-text">
                <i className="fab fa-instagram icons-media icons-media-press"></i>
              </a>
              <a href="https://www.linkedin.com/in/annygutierrez/" target="_blank" className="media-icon-container media-icon-container-press d-flex align-items-center justify-content-center linked animation-text">
                <i className="fab fa-linkedin-in icons-media icons-media-press"></i>
              </a>
              <a href="mailto:annygutierrezlopez@gmail.com" target="_blank" className="media-icon-container media-icon-container-press d-flex align-items-center justify-content-center mail animation-text">
                <i className="far fa-envelope icons-media icons-media-press"></i>
              </a>
              <a href="https://twitter.com/annyglop23" target="_blank" className="media-icon-container media-icon-container-press d-flex align-items-center justify-content-center twitter animation-text">
                <i className="fab fa-twitter icons-media icons-media-press"></i>
              </a>
            </div>
          </div>
        </div>



        <div className="content-web-section horizontal-scroll-wrapper squares">


          <div className="projects-section pt-3">
            <p className="salute work-title light-salute">RECENT WORK</p>
            <div className="just-projects-container">
              <div className="project-container d-flex align-items-center justify-content-center flex-column py-3">
                <img className="project-img" src={kaytrust} alt="project" />
                <div className="project-text py-4">
                  <p className="project-title light-salute">Kay Trust Wallet - Digital Identity</p>
                  <p className="project-description light-salute">KayTrust is a trusted platform that allows you to manage the digital identities of your customers in a safe, reliable and end-to-end manner.</p>
                </div>
              </div>

              <div className="project-container d-flex align-items-center justify-content-center flex-column py-3">
                <img className="project-img" src={kaytrustweb} alt="project" />
                <div className="project-text py-4">
                  <p className="project-title light-salute">Kay Trust Wallet - Digital Identity</p>
                  <p className="project-description light-salute">KayTrust is a trusted platform that allows you to manage the digital identities of your customers in a safe, reliable and end-to-end manner.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="contact-section pb-5">

            <form onSubmit={($event) => sendEmail($event)} className="contact-form d-flex align-items-center justify-content-center flex-column">
              <p className="salute mt-5 pb-3 contact-title">CONTACT ME</p>
              {
                disableForm ? (
                  <div className="loading-container">
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                  </div>
                ) : (
                    <React.Fragment>
                      <div className="input-group flex-nowrap input-contact py-2">
                        <input {...bindName} type="text" className="form-control input-form-contact" placeholder="Name" />
                      </div>
                      <div className="input-group flex-nowrap input-contact py-2">
                        <input {...bindEmail} type="text" className="form-control input-form-contact" placeholder="Email" />
                      </div>
                      <div className="input-group flex-nowrap input-contact py-2">
                        <textarea {...bindMessage} className="form-control input-form-contact" placeholder="Message"></textarea>
                      </div>
                    </React.Fragment>
                  )
              }
              {
                disableForm ?
                  <p className="salute mt-4">Sending...</p> : (
                    <button
                      disabled={disableForm}
                      type="submit"
                      className="btn btn-outline-secondary form-button mt-4"
                    >
                      Send Message
                    </button>
                  )
              }

            </form>

          </div>



          <div className="footer-container py-3 d-flex align-items-center justify-content-center flex-column">
            <div className="d-flex flex-row media-links pt-3">
              <a href="https://www.instagram.com/annyglop16/" target="_blank" className="media-icon-container media-icon-container-footer d-flex align-items-center justify-content-center insta">
                <i className="fab fa-instagram icons-media icons-media-footer"></i>
              </a>
              <a href="https://www.linkedin.com/in/annygutierrez/" target="_blank" className="media-icon-container media-icon-container-footer d-flex align-items-center justify-content-center linked">
                <i className="fab fa-linkedin-in icons-media icons-media-footer"></i>
              </a>
              <a href="mailto:annygutierrezlopez@gmail.com" target="_blank" className="media-icon-container media-icon-container-footer d-flex align-items-center justify-content-center mail">
                <i className="far fa-envelope icons-media icons-media-footer"></i>
              </a>
              <a href="https://twitter.com/annyglop23" target="_blank" className="media-icon-container media-icon-container-footer d-flex align-items-center justify-content-center twitter">
                <i className="fab fa-twitter icons-media icons-media-footer"></i>
              </a>
            </div>
            <p className="mt-5 footer-copyrights">© 2020 Anny Gutierrez. All rights reserved.</p>
          </div>

        </div>




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

export default Home;
