import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useLanguage } from '../../i18n/LanguageContext';
import { ACTIVE_BACKGROUNDS } from '../Home/backgrounds';
import WaterFill from './WaterFill';
import './styles.css';

const EMAIL = 'annygutierrezlopez@gmail.com';
const GITHUB = 'https://github.com/annygutierrez';
const LINKEDIN = 'https://www.linkedin.com/in/annygutierrez/';

// Endless loop over the Home backgrounds: a photo stays for PHOTO_SECONDS, black water comes in like the
// tide (corner to corner) and covers the screen, it stays black for BLACK_SECONDS (the plain contact page) —
// the photo changes then, unseen — and the tide goes out revealing the next photo.
const PHOTO_SECONDS = 3.8;
const FLOOD_SECONDS = 3;
const BLACK_SECONDS = 3;
const EBB_SECONDS = 3;

const Contact = () => {
  const { t } = useLanguage();
  const [photo, setPhoto] = useState(0);
  const nextPhoto = useCallback(() => setPhoto((i) => (i + 1) % ACTIVE_BACKGROUNDS.length), []);
  const bg = ACTIVE_BACKGROUNDS[photo];

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <main className="contact">
      <div className="contact__intro" aria-hidden="true">
        <div className="contact__bg" key={photo}>
          <div className="contact__bg-layer" style={{ backgroundImage: `url(${bg.src})`, backgroundPosition: bg.position }} />
        </div>
        <WaterFill
          className="contact__water"
          wait={PHOTO_SECONDS}
          flood={FLOOD_SECONDS}
          hold={BLACK_SECONDS}
          ebb={EBB_SECONDS}
          onCovered={nextPhoto}
        />
      </div>

      <a className="contact__email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
      <LanguageSwitcher className="contact__lang" />

      <nav className="contact__socials">
        <a className="contact__social" href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
          </svg>
        </a>
        <a className="contact__social" href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2.5 8.2h4.2V22H2.5zM4.6 1.5a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8M9.3 8.2h4v1.9h.1c.6-1.1 2-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.5V22h-4.2v-6.7c0-1.6 0-3.7-2.2-3.7s-2.6 1.8-2.6 3.6V22H9.3z" />
          </svg>
        </a>
      </nav>

      <Link className="contact__home" to="/">{t('nav.home')}</Link>
    </main>
  );
};

export default Contact;
