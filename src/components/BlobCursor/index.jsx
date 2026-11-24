import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

// Devices with a real pointer (mouse / trackpad) get the blob as a cursor replacement.
const POINTER_QUERY = '(hover: hover) and (pointer: fine)';
// Phones and tablets: the blob follows the finger while it touches/drags the screen.
const TOUCH_QUERY = '(hover: none) and (pointer: coarse)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label';
// Elements marked data-cursor="plain" (e.g. list rows) don't make the blob grow.
const PLAIN = '[data-cursor="plain"]';
// How fast the blob catches up with the pointer each frame (1 = instantly).
const FOLLOW = 0.2;

const matches = (query) => typeof window !== 'undefined' && !!window.matchMedia?.(query).matches;

const getMode = () => {
  if (matches(POINTER_QUERY)) return 'mouse';
  if (matches(TOUCH_QUERY)) return 'touch';
  return null;
};

const BlobCursor = () => {
  const [mode, setMode] = useState(getMode);
  const blobRef = useRef(null);

  // Switch mode if the user plugs in a mouse or switches to touch.
  useEffect(() => {
    const queries = [POINTER_QUERY, TOUCH_QUERY].map((q) => window.matchMedia?.(q)).filter(Boolean);
    const onChange = () => setMode(getMode());
    queries.forEach((mql) => mql.addEventListener('change', onChange));
    return () => queries.forEach((mql) => mql.removeEventListener('change', onChange));
  }, []);

  // Touch mode: show the blob under the finger while touching, fade it out on release.
  useEffect(() => {
    if (mode !== 'touch') return undefined;

    const blob = blobRef.current;
    const reducedMotion = matches(REDUCED_MOTION_QUERY);
    const target = { x: -200, y: -200 };
    const pos = { ...target };
    let frame;

    const render = () => {
      const k = reducedMotion ? 1 : FOLLOW;
      pos.x += (target.x - pos.x) * k;
      pos.y += (target.y - pos.y) * k;
      blob.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      frame = requestAnimationFrame(render);
    };

    const setTarget = (e) => {
      const t = e.touches[0];
      if (!t) return;
      target.x = t.clientX;
      target.y = t.clientY;
    };
    const onStart = (e) => {
      setTarget(e);
      // Jump straight to the finger so it doesn't fly in from the last touch.
      pos.x = target.x;
      pos.y = target.y;
      blob.classList.add('is-visible');
    };
    const onEnd = (e) => {
      if (e.touches.length === 0) blob.classList.remove('is-visible');
    };

    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchmove', setTarget, { passive: true });
    window.addEventListener('touchend', onEnd, { passive: true });
    window.addEventListener('touchcancel', onEnd, { passive: true });
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchmove', setTarget);
      window.removeEventListener('touchend', onEnd);
      window.removeEventListener('touchcancel', onEnd);
    };
  }, [mode]);

  useEffect(() => {
    if (mode !== 'mouse') return undefined;

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
  }, [mode]);

  if (!mode) return null;

  return (
    <div ref={blobRef} className={`blob-cursor blob-cursor--${mode}`} aria-hidden="true">
      <div className="blob-cursor__shape" />
    </div>
  );
};

export default BlobCursor;
