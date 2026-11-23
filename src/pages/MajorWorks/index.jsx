import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useLanguage } from '../../i18n/LanguageContext';
import { WORKS, getWorkText } from './worksList';
import backdrop from '../../assets/works-bg-desk.jpg';
import './styles.css';

const MajorWorks = () => {
  const { lang, t } = useLanguage();
  const [activeId, setActiveId] = useState(WORKS[0].id);
  const detailRef = useRef(null);
  const activeIndex = WORKS.findIndex((work) => work.id === activeId);
  const active = WORKS[activeIndex];
  const activeText = getWorkText(active, lang);
  // After the last work, "next" goes back to the first one.
  const next = WORKS[(activeIndex + 1) % WORKS.length];
  const nextText = getWorkText(next, lang);

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
        <div className="works__backdrop" style={{ backgroundImage: `url(${backdrop})` }} aria-hidden="true" />
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

        <button type="button" className="works__next" onClick={() => select(next.id)}>
          <span className="works__next-label">
            {t('nav.next')}
            <span className="works__next-arrow" aria-hidden="true">→</span>
          </span>
          <span className="works__next-name">{nextText.title}</span>
        </button>
      </article>
    </main>
  );
};

export default MajorWorks;
