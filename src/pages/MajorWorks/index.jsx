import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import { WORKS } from './worksList';
import './styles.css';

const MajorWorks = () => {
  const [activeId, setActiveId] = useState(WORKS[0].id);
  const detailRef = useRef(null);
  const active = WORKS.find((work) => work.id === activeId);

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
        <h1 className="works__heading">major works</h1>

        <ul className="works__list">
          {WORKS.map((work) => (
            <li key={work.id}>
              <button
                type="button"
                className={`works__item${work.id === activeId ? ' is-active' : ''}`}
                aria-current={work.id === activeId ? 'true' : undefined}
                data-cursor="plain"
                onClick={() => select(work.id)}
              >
                <span className="works__item-name">{work.name}</span>
                <span className="works__item-client">({work.client})</span>
              </button>
            </li>
          ))}
        </ul>

        <Link className="works__home" to="/">home</Link>
      </nav>

      <article className="works__detail" ref={detailRef} key={active.id}>
        <h2 className="works__title">{active.title || active.name}</h2>
        {active.description && <p className="works__description">{active.description}</p>}
        {active.image && (
          <img className="works__image" src={active.image} alt={active.title || active.name} />
        )}
      </article>
    </main>
  );
};

export default MajorWorks;
