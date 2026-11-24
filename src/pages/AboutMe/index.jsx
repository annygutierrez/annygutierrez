import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useLanguage } from '../../i18n/LanguageContext';
import { ABOUT_TEXT } from './aboutText';
// TODO: replace this photo (cropped from the design mock-up) with the original high-resolution file.
import photo from '../../assets/about-me/anny.jpg';
import './styles.css';

const AboutMe = () => {
  const { lang, t } = useLanguage();
  const paragraphs = ABOUT_TEXT[lang] || ABOUT_TEXT.es;

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <main className="about">
      <h1 className="about__heading">{t('nav.aboutMe')}</h1>
      <LanguageSwitcher className="about__lang" />

      <div className="about__layout">
        <div className="about__text" key={lang}>
          {paragraphs.map((pieces, i) => (
            <p className="about__paragraph" key={i}>
              {pieces.map((piece, j) => (typeof piece === 'string' ? piece : <strong key={j}>{piece.b}</strong>))}
            </p>
          ))}
        </div>

        <img className="about__photo" src={photo} alt="Anny Gutierrez" />

        <Link className="about__home" to="/">{t('nav.home')}</Link>
      </div>
    </main>
  );
};

export default AboutMe;
