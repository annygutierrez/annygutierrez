import React, { useState, useEffect } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import menuIcon from '../../assets/menu-icon.svg';
import menuAbout from '../../assets/menu-about.svg';
import labelIcon from '../../assets/label-icon.svg';
import labelAbout from '../../assets/label-about.svg';
import annyIcon from '../../assets/anny-icon.svg';
import user from '../../assets/user.svg';
import arrow from '../../assets/arrow.svg';
import kaytrust from '../../assets/kaytrust.svg';
import people from '../../assets/people.svg';
import world from '../../assets/world.svg';
import Ingrid from '../../assets/ingrid.svg';
import kaytrustweb from '../../assets/kaytrustweb.svg';
import Notification from '../Notification';
import { useInput } from '../../hooks/input-hook';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { Router, Route, Switch, Redirect } from 'react-router';

import useDidMountEffect from '../../hooks/useDidMountEffect';
function Home() {

  
  const [visible, setVisible] = useState(false);
  const [activePage, setActivePage] = useState('Home');

  const hideMe = () => {
    console.log('Hide');
    setVisible(!visible);
  }

  useEffect(() => console.log('mounted'), []);

  useDidMountEffect(() => {
    document.getElementById('menu-toggle').click();
  }, [activePage]);

  const selectMenuItem = (routeName) => {
    setActivePage(routeName);
    hideMe();
  }

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
  if (!visible) style.backgroundColor = 'transparent';



  const [showNotification, setNotificationVisibility] = useState(-100);
  const [disableForm, setDisableForm] = useState(false);

  const { value: name, bind: bindName, reset: resetName } = useInput('');
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: message, bind: bindMessage, reset: resetMessage } = useInput('');


  useEffect(() => {
    if (activePage === 'Home') {
      let item = document.getElementsByTagName('main')[0];
    window.addEventListener('wheel', (e) => {

      if (e.deltaY > 0) item.scrollLeft += 100;
      else item.scrollLeft -= 100;
    });
    return () => window.removeEventListener('wheel', (e) => {

      if (e.deltaY > 0) item.scrollLeft += 100;
      else item.scrollLeft -= 100;
    });
    }
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
 
  const scrollPage = (event) => {
    event.preventDefault()
    // document.getElementsByTagName('body')[0].stopScroll();
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
      <Notification top={showNotification}></Notification>
      <input type="checkbox" id="menu-toggle" />
      <label onClick={() => hideMe()} htmlFor="menu-toggle" className={`menu-icon`}>
        <img className="menu-icon-img" src={activePage === 'Sobre mi' ? menuAbout : menuIcon} alt="menu-icon" />
      </label>
      <label onClick={() => hideMe()} htmlFor="menu-toggle" className="label-icon-container">
        <img className="label-icon" src={activePage === 'Sobre mi' ? labelAbout : labelIcon} alt="label-icon" />
      </label>
      {(activePage === 'Home') && <>
      <main id="scroll" className={`container-scroll cont-scroll ${visible ? 'move-scroll' : ''}`}>
        <div className="wrapper1" >

          <div className="texto photo1 proj-text">
            {/* <img className="kayweb1" src={kayweb1} alt="kayweb1" /> */}
            <div className="project-description-scroll px-4 py-4">
              <p className="p-2 font-weight-bold proj-text">
                <img className="icon-world mr-2" src={world} alt="world" />In Grid - América Televisión
              </p>
              <p className="project-title proj-text">In_grid - Management platform</p>
              <p className="project-description proj-text">Web App diseñada para administrar el catálogo de programas, los cortes comerciales, programación de productos audiovisuales y los ingresos por marketing.</p>
              <p className="project-description proj-text image-footer">* La imágen es una recreación de la web original para respetar privacidad de la empresa.</p>
            </div>
          </div>

          <div className="texto photo2">
            {/* <img className="kayweb1" src={people} alt="kayweb1" /> */}
            <div className="project-description-scroll px-4 py-4">
              <p className="p-2 font-weight-bold proj-text">
                <img className="icon-world mr-2" src={world} alt="world" />KayTrust Hub - Everis
              </p>
              <p className="project-title proj-text">Kay Trust - Landing page</p>
              <p className="project-description proj-text">KayTrust es una plataforma de confianza que permite gestionar las identidades digitales de tus clientes de manera segura, confiable y soberana.</p>
              <p className="project-description proj-text image-footer">* La imágen representa la página principal de la web original.</p>
            </div>
          </div>

          <div className="texto photo3">
            {/* <img className="kayweb1" src={people} alt="kayweb1" /> */}
            <div className="project-description-scroll px-4 py-4">
              <p className="p-2 font-weight-bold proj-text">
                <img className="icon-world mr-2" src={world} alt="world" />Honduras - Everis
              </p>
              <p className="project-title proj-text">Honduras - Proyecto de fiduciarios</p>
              <p className="project-description proj-text">El proyecto de fiduciarios Honduras es un piloto ideado para mejorar la trazabilidad, eficiencia y transparencia de los procesos de contratación.</p>
              <p className="project-description proj-text image-footer">* La imágen es una recreación de la web original para respetar privacidad de la empresa.</p>
            </div>
          </div>

          <div className="texto photo4">
            {/* <img className="kayweb1" src={people} alt="kayweb1" /> */}
            <div className="project-description-scroll px-4 py-4">
              <p className="p-2 font-weight-bold proj-text">
                <img className="icon-world mr-2" src={world} alt="world" />Cadena - Everis
              </p>
              <p className="project-title proj-text">Proyecto Cadena</p>
              <p className="project-description proj-text">El Proyecto Cadena es una web app que ayuda en la administración y conexión de las aduanas de: Perú, México, Colombia y Chile.</p>
              <p className="project-description proj-text image-footer">* La imágen es una recreación de la web original para respetar privacidad de la empresa.</p>
            </div>
          </div>


          <div className="texto photo5">
            {/* <img className="kayweb1" src={people} alt="kayweb1" /> */}
            <div className="project-description-scroll px-4 py-4">
              <p className="p-2 font-weight-bold proj-text">
                <img className="icon-world mr-2" src={world} alt="world" />Kaytrust - Everis
              </p>
              <p className="project-title proj-text">Kaytrust - David 19</p>
              <p className="project-description proj-text">La aplicación es parte de LACChain y busca recopilar información relacionada al COVID-19 de ciudadanos de forma privada y anónima.</p>
              <p className="project-description proj-text image-footer">* La imágen es una recreación de la app original para respetar privacidad de la empresa.</p>
            </div>
          </div>

          <div className="texto photo6">
            {/* <img className="kayweb1" src={people} alt="kayweb1" /> */}
            <div className="project-description-scroll px-4 py-4">
              <p className="p-2 font-weight-bold proj-text">
                <img className="icon-world mr-2" src={world} alt="world" />Kaytrust - Everis
              </p>
              <p className="project-title proj-text">Kaytrust - Piloto Argentina</p>
              <p className="project-description proj-text">Fue un test de cómo funcionaría la digitalización de la identidad de los ciudadanos de un país y que riesgos de seguridad implica. </p>
              <p className="project-description proj-text image-footer">* La imágen es una recreación de la app original para respetar privacidad de la empresa.</p>
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
      

      <div className="content-container">
        <div className="presentation-section">
          <p className="salute animation-text">HELLO THERE</p>
          <img className="user-image" src={user} alt="user-image" />
          <div className="title-container animation-text">
            <span className="title-presentation animation-text">Mi nombre es<br></br> Anny Gutierrez.</span>
            <br></br>
            <span className="title-presentation animation-text" style={style}>Desarrollo apps & programas.</span>
            {/* <div className="rectangle-colorful" style={style}></div> */}
          </div>

          <div className="about-section">
            <div className="about-head d-flex align-items-center pr-2">
              <img className="arrow" src={arrow} alt="arrow-icon" />
              <a href={'https://github.com/annygutierrez'} target="_blank" className="about-title animation-text">GitHub</a>
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
              <a href="https://twitter.com/annygutierrezl" target="_blank" className="media-icon-container media-icon-container-press d-flex align-items-center justify-content-center twitter animation-text">
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
      </>}

      {
        (activePage === 'Sobre mi') &&<div className="about-container">
        <div className="about-shadow">
          <div className="content-about">
               <div style={{ display: 'flex', flexDirection: 'row', marginTop: '5em', marginLeft: '10em', alignItems: 'center' }}>
                  <img style={{ width: '5em', marginRight: '2em' }} src={annyIcon} alt={'anny-icon'} />
                  <p className="" style={{ color: 'white', fontSize: '25px' }}>Anny Gutierrez-López | Developer</p>
               </div>
                   <div style={{ backgroundColor: 'white', height: '3px', width: '3em', marginTop: '3em', marginLeft: '11em' }}></div>
                   <p className="bold" style={{ color: 'white', marginTop: '3em', marginLeft: '9em', fontSize: '20px' }}>About</p>
               <div style={{  }}>
                  
               </div>

          </div>

        </div>
        <div className="content-container">
          </div>
          <main id="scroll" className="container-scroll cont-scroll">
          
        </main>
        </div>
      }



      <div className="slideout-sidebar d-flex align-items-center justify-content-center">
        <ul className="menu-list">
          <li className={`${activePage === 'Home' ? 'active-item' : ''}`} onClick={() => selectMenuItem('Home')}>Home</li>
          {/* <li className={`${activePage === 'Proyectos' ? 'active-item' : ''}`} onClick={() => selectMenuItem('Proyectos')}>Proyectos</li>
          <li className={`${activePage === 'Educación' ? 'active-item' : ''}`} onClick={() => selectMenuItem('Educación')}>Educación</li> */}
          {/* <li className={`${activePage === 'Sobre mi' ? 'active-item' : ''}`} onClick={() => selectMenuItem('Sobre mi')}>Sobre mi</li> */}
          {/* <li className={`${activePage === 'Contacto' ? 'active-item' : ''}`} onClick={() => selectMenuItem('Contacto')}>Contacto</li> */}
        </ul>
      </div>


    </div>
  );
}

export default Home;
