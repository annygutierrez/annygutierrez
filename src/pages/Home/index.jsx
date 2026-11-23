import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import background from '../../assets/home-bg.jpg';
import './styles.css';

const MAKES = [
  'websites',
  'mobile apps',
  'mobile games',
  'drawings',
  'novels',
  'tales',
  'articles',
  'robots',
  'paintings',
  'essays',
  'education founding for peruvians',
  'cultural events for latin-america',
  'music',
  'moviescripts',
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
    <main className="home" style={{ backgroundImage: `url(${background})` }}>
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
