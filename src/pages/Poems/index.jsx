import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useLanguage } from '../../i18n/LanguageContext';
import { POEMS } from './poemsList';
import './styles.css';

const Poems = () => {
  const { t } = useLanguage();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <main className="poems">
      <h1 className="poems__heading">{t('nav.poems')}</h1>
      <LanguageSwitcher className="poems__lang" />

      {POEMS.map((poem) => (
        <article className="poem" key={poem.id} id={poem.id} lang="en">
          <div className="poem__text">
            <h2 className="poem__title">
              {poem.title}
              {/* Hand-drawn-looking highlighter stroke over the title. */}
              <svg className="poem__highlight" viewBox="0 0 400 145" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 0 C 120 4, 255 40, 395 93 L 381 145 C 255 103, 120 66, 0 52 Z" />
              </svg>
            </h2>

            <p className="poem__lines">
              {poem.lines.map((line) => (
                <span className="poem__line" key={line}>{line}</span>
              ))}
            </p>
          </div>

          <div className="poem__images" aria-hidden="true">
            {poem.images.map((src, i) => (
              <img className="poem__image" src={src} alt="" key={i} />
            ))}
          </div>
        </article>
      ))}

      <Link className="poems__home" to="/">{t('nav.home')}</Link>
    </main>
  );
};

export default Poems;
