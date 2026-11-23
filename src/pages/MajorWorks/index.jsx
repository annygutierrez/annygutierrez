import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useLanguage } from '../../i18n/LanguageContext';
import { WORKS, getWorkText } from './worksList';
import './styles.css';

const MajorWorks = () => {
  const { lang, t } = useLanguage();
  const [activeId, setActiveId] = useState(WORKS[0].id);
  const detailRef = useRef(null);
  const active = WORKS.find((work) => work.id === activeId);
  const activeText = getWorkText(active, lang);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const select = (id) => {
    setActiveId(id);
    // On narrow screens the detail sits below the list: bring it into view.
    if (window.matchMedia?.('(max-width: 800px)').matches) {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="works">
      <nav className="works__nav">
        <h1 className="works__heading">{t('nav.majorWorks')}</h1>

        <ul className="works__list">
          {WORKS.map((work) => {
            const text = getWorkText(work, lang);
            return (
            <li key={work.id}>
              <button
                type="button"
                className={`works__item${work.id === activeId ? ' is-active' : ''}`}
                aria-current={work.id === activeId ? 'true' : undefined}
                data-cursor="plain"
                onClick={() => select(work.id)}
              >
                <span className="works__item-name">{text.name}</span>
                <span className="works__item-client">({text.client})</span>
              </button>
            </li>
            );
          })}
        </ul>

        <Link className="works__home" to="/">{t('nav.home')}</Link>
      </nav>

      <LanguageSwitcher className="works__lang" />

      <article className="works__detail" ref={detailRef} key={`${active.id}-${lang}`}>
        <h2 className="works__title">{activeText.title}</h2>
        {activeText.description && <p className="works__description">{activeText.description}</p>}
        {active.image && <img className="works__image" src={active.image} alt={activeText.title} />}
      </article>
    </main>
  );
};

export default MajorWorks;
