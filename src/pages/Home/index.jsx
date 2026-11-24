import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useLanguage } from '../../i18n/LanguageContext';
import { BACKGROUND, KIND_BACKGROUNDS } from './backgrounds';
import './styles.css';

// Each item in home.makes, in the same order as in src/i18n/translations.js:
// websites, mobile apps, mobile games, steam games, drawings, robots, paintings, music, poems, micro-stories.
// `kind` picks the hover background; `to` makes the item a link to that page.
const MAKE_META = [
  { kind: 'tech' },
  { kind: 'tech' },
  { kind: 'tech' },
  { kind: 'tech' },
  { kind: 'art' },
  { kind: 'tech' },
  { kind: 'art' },
  { kind: 'art' },
  { kind: 'writing', to: '/poems' },
  { kind: 'writing', to: '/micro-stories' },
];

const bgStyle = (bg) => ({ backgroundImage: `url(${bg.src})`, backgroundPosition: bg.position });

// The title and the list of things Anny makes are translated in src/i18n/translations.js (home.*).
const Home = () => {
  const { t } = useLanguage();
  const makes = t('home.makes');
  // Kind of the hovered item, if it has its own background.
  const [hoverKind, setHoverKind] = useState(null);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <main className="home">
      <div className="home__bg" aria-hidden="true">
        <div className="home__bg-layer" style={bgStyle(BACKGROUND)} />
        {Object.entries(KIND_BACKGROUNDS).map(([kind, bg]) => (
          <div
            key={kind}
            className={`home__bg-layer home__bg-layer--hover${hoverKind === kind ? ' is-visible' : ''}`}
            style={bgStyle(bg)}
          />
        ))}
      </div>
      <div className="home__light" aria-hidden="true" />
      <div className="home__top">
        <LanguageSwitcher />
        <Link className="home__contact" to="/contact">{t('nav.contact')}</Link>
      </div>

      <section className="home__content">
        <h1 className="home__title">{t('home.title')}</h1>

        <p className="home__makes">
          {makes.map((item, i) => {
            const { kind, to } = MAKE_META[i] || {};
            const hoverProps = KIND_BACKGROUNDS[kind]
              ? { onMouseEnter: () => setHoverKind(kind), onMouseLeave: () => setHoverKind(null) }
              : {};
            return (
              <React.Fragment key={item}>
                {to ? (
                  <Link className="home__make home__make--link" to={to} {...hoverProps}>{item}</Link>
                ) : (
                  <span className="home__make" {...hoverProps}>{item}</span>
                )}
                {i < makes.length - 1 && ', '}
              </React.Fragment>
            );
          })}
        </p>

        <Link className="home__works" to="/major-works">
          {t('nav.majorWorks')}
          <svg className="home__works-icon" viewBox="0 0 20 20" aria-hidden="true">
            <rect x="1" y="1" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 14 L14 6 M8 6 H14 V12" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </Link>
      </section>

      <Link className="home__about" to="/about-me">{t('nav.aboutMe')}</Link>
    </main>
  );
};

export default Home;
