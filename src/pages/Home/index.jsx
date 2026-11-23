import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import workshopBg from '../../assets/home-bg.jpg';
import studioBg from '../../assets/home-bg-studio.jpg';
import './styles.css';

// Available backgrounds. `position` is the CSS background-position: which part of the photo stays
// in view when the screen crops it (e.g. a portrait photo on a landscape screen).
const BACKGROUNDS = {
  workshop: { src: workshopBg, position: 'center' },
  studio: { src: studioBg, position: 'center 70%' },
};
const BACKGROUND = BACKGROUNDS.studio;

const MAKES = [
  'websites',
  'mobile apps',
  'mobile games',
  'steam games',
  'drawings',
  'robots',
  'paintings',
  'music',
  'poems',
  'micro-stories',
];

// TODO: point these to their real destinations.
const LINKS = {
  majorWorks: '#',
  aboutMe: '#',
  contact: '#',
};

const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <main className="home">
      <div
        className="home__bg"
        style={{ backgroundImage: `url(${BACKGROUND.src})`, backgroundPosition: BACKGROUND.position }}
        aria-hidden="true"
      />
      <div className="home__light" aria-hidden="true" />
      <a className="home__contact" href={LINKS.contact}>contact</a>

      <section className="home__content">
        <h1 className="home__title">anny gutierrez-lopez makes:</h1>

        <p className="home__makes">
          {MAKES.map((item, i) => (
            <React.Fragment key={item}>
              <span className="home__make">{item}</span>
              {i < MAKES.length - 1 && ', '}
            </React.Fragment>
          ))}
        </p>

        <a className="home__works" href={LINKS.majorWorks}>
          major works
          <svg className="home__works-icon" viewBox="0 0 20 20" aria-hidden="true">
            <rect x="1" y="1" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 14 L14 6 M8 6 H14 V12" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </a>
      </section>

      <a className="home__about" href={LINKS.aboutMe}>about me</a>
    </main>
  );
};

export default Home;
