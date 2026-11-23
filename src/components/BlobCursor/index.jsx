import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

// Only devices with a real pointer (mouse / trackpad) get the blob; touch screens keep their default behaviour.
const POINTER_QUERY = '(hover: hover) and (pointer: fine)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label';
// Elements marked data-cursor="plain" (e.g. list rows) don't make the blob grow.
const PLAIN = '[data-cursor="plain"]';
// How fast the blob catches up with the pointer each frame (1 = instantly).
const FOLLOW = 0.2;

const matches = (query) => typeof window !== 'undefined' && !!window.matchMedia?.(query).matches;

const BlobCursor = () => {
  const [enabled, setEnabled] = useState(() => matches(POINTER_QUERY));
  const blobRef = useRef(null);

  // Turn on/off if the user plugs in a mouse or switches to touch.
  useEffect(() => {
    const mql = window.matchMedia?.(POINTER_QUERY);
    if (!mql) return undefined;
    const onChange = (e) => setEnabled(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const blob = blobRef.current;
    const root = document.documentElement;
    const reducedMotion = matches(REDUCED_MOTION_QUERY);
    const target = { x: -200, y: -200 };
    const pos = { ...target };
    let frame;

    root.classList.add('has-blob-cursor');

    const render = () => {
      const k = reducedMotion ? 1 : FOLLOW;
      pos.x += (target.x - pos.x) * k;
      pos.y += (target.y - pos.y) * k;
      blob.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      frame = requestAnimationFrame(render);
    };

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      blob.classList.add('is-visible');
      const el = e.target;
      blob.classList.toggle('is-hovering', !!el.closest?.(INTERACTIVE) && !el.closest?.(PLAIN));
    };
    const onLeave = () => blob.classList.remove('is-visible');
    const onDown = () => blob.classList.add('is-pressed');
    const onUp = () => blob.classList.remove('is-pressed');

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    document.addEventListener('pointerleave', onLeave);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      root.classList.remove('has-blob-cursor');
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={blobRef} className="blob-cursor" aria-hidden="true">
      <div className="blob-cursor__shape" />
    </div>
  );
};

export default BlobCursor;
