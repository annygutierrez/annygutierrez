import React, { useEffect, useId, useRef, useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { LANGUAGES } from '../../i18n/translations';
import './styles.css';

// Compact language menu: shows the current code ("en ⌄"); opens a list of languages in their own names.
// Colours come from CSS variables (--lang-color, --lang-menu-bg), so each page can theme it.
const LanguageSwitcher = ({ className = '' }) => {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const toggleRef = useRef(null);
  const menuId = useId();
  const current = LANGUAGES.find((l) => l.code === lang);

  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const choose = (code) => {
    setLang(code);
    setOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <div className={`lang ${open ? 'is-open' : ''} ${className}`} ref={rootRef}>
      <button
        ref={toggleRef}
        type="button"
        className="lang__toggle"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${t('nav.language')}: ${current.name}`}
        onClick={() => setOpen((o) => !o)}
      >
        {current.code}
        <svg className="lang__chevron" viewBox="0 0 10 6" aria-hidden="true">
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </button>

      {open && (
        <ul className="lang__menu" id={menuId} role="menu">
          {LANGUAGES.map(({ code, name }) => (
            <li key={code} role="none">
              <button
                type="button"
                role="menuitemradio"
                aria-checked={code === lang}
                lang={code}
                className={`lang__option${code === lang ? ' is-current' : ''}`}
                data-cursor="plain"
                onClick={() => choose(code)}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
