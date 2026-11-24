import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useLanguage } from '../../i18n/LanguageContext';
import { STORIES } from './storiesList';
import './styles.css';

const MicroStories = () => {
  const { t } = useLanguage();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <main className="stories">
      <h1 className="stories__heading">{t('nav.microStories')}</h1>
      <LanguageSwitcher className="stories__lang" />

      {STORIES.map((story) => (
        <article className="story" key={story.id} id={story.id} lang={story.lang}>
          <div className="story__text">
            <h2 className="story__title">{story.title}</h2>
            {story.paragraphs.map((lines, i) => (
              <p className="story__paragraph" key={i}>
                {lines.map((line) => (
                  <span className="story__line" key={line}>{line}</span>
                ))}
              </p>
            ))}
          </div>

          {story.image && <img className="story__image" src={story.image} alt="" aria-hidden="true" />}
        </article>
      ))}

      <Link className="stories__home" to="/">{t('nav.home')}</Link>
    </main>
  );
};

export default MicroStories;
