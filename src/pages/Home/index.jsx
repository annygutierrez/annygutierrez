import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useLanguage } from '../../i18n/LanguageContext';
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

// TODO: point these to their real destinations.
const LINKS = {
  aboutMe: '#',
  contact: '#',
};

// The title and the list of things Anny makes are translated in src/i18n/translations.js (home.*).
const Home = () => {
  const { t } = useLanguage();
  const makes = t('home.makes');

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
      <div className="home__top">
        <LanguageSwitcher />
        <a className="home__contact" href={LINKS.contact}>{t('nav.contact')}</a>
      </div>

      <section className="home__content">
        <h1 className="home__title">{t('home.title')}</h1>

        <p className="home__makes">
          {makes.map((item, i) => (
            <React.Fragment key={item}>
              <span className="home__make">{item}</span>
              {i < makes.length - 1 && ', '}
            </React.Fragment>
          ))}
        </p>

        <Link className="home__works" to="/major-works">
          {t('nav.majorWorks')}
          <svg className="home__works-icon" viewBox="0 0 20 20" aria-hidden="true">
            <rect x="1" y="1" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 14 L14 6 M8 6 H14 V12" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </Link>
      </section>

      <a className="home__about" href={LINKS.aboutMe}>{t('nav.aboutMe')}</a>
    </main>
  );
};

export default Home;
