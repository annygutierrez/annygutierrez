import React, { useEffect, useRef } from 'react';

// Black water coming and going like the tide on a beach, in an endless loop, crossing the screen diagonally
// from the bottom-left corner to the top-right one:
// wait (dry photo) → flood (comes in at a steady speed until the screen is covered) → hold (fully black; onCovered fires so the photo can change unseen)
// → ebb (goes back out at the same steady speed, revealing the photo) → wait again…
// Realism cues:
// - an irregular shoreline (smooth noise instead of regular waves) that keeps changing shape;
// - the water sheet is not equally thick: soft, slowly drifting hollows where it is shallower (lighter), so the
//   photo shows through a little there, with a slightly darker rim around each hollow for depth;
// - the sheet is thinner (more see-through) at the edge and deeper further back;
// - darker "wet sand" left on the photo where the water has been, which slowly dries.

// Water level over time (0 = not in view, 1 = whole screen): it comes in at a steady speed, like sea water
// running up the shore, and goes out the same way.
const LEVEL_START = -0.05;
const LEVEL_END = 1.12;
const levelAt = (p) => LEVEL_START + (LEVEL_END - LEVEL_START) * p;

const COLUMN = 6; // px between shoreline samples
const DRY_SPEED = 60; // px per second the wet sand dries back towards the water
const PATTERN_SIZE = 150; // px, approximate size of the shallower/deeper water patches
const TEXTURE_STEP = 8; // px of screen per texel of the thickness texture (lower = sharper, slower)

const smooth = (p) => p * p * (3 - 2 * p);

// 2D gradient (Perlin) noise, roughly -1..1.
const PERM = (() => {
  const p = Array.from({ length: 256 }, (_, i) => i);
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  return [...p, ...p];
})();
const GRADS = Array.from({ length: 8 }, (_, i) => [Math.cos((i * Math.PI) / 4), Math.sin((i * Math.PI) / 4)]);
const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
const perlin = (x, y) => {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const X = xi & 255;
  const Y = yi & 255;
  const dot = (h, dx, dy) => {
    const g = GRADS[h & 7];
    return g[0] * dx + g[1] * dy;
  };
  const n00 = dot(PERM[PERM[X] + Y], xf, yf);
  const n10 = dot(PERM[PERM[X + 1] + Y], xf - 1, yf);
  const n01 = dot(PERM[PERM[X] + Y + 1], xf, yf - 1);
  const n11 = dot(PERM[PERM[X + 1] + Y + 1], xf - 1, yf - 1);
  const u = fade(xf);
  const v = fade(yf);
  const a = n00 + (n10 - n00) * u;
  const b = n01 + (n11 - n01) * u;
  return (a + (b - a) * v) * 1.4;
};
const ridge = (x) => perlin(x, 0.5) * 0.7 + perlin(x * 2.3 + 17, 3.1) * 0.3; // 1D noise for the shoreline

const WaterFill = ({ wait = 4, flood = 6, hold = 3, ebb = 5, onCovered, className }) => {
  const canvasRef = useRef(null);
  const onCoveredRef = useRef(onCovered);
  onCoveredRef.current = onCovered;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    // The water is drawn on its own layer, then laid over the wet sand.
    const layer = document.createElement('canvas');
    const lctx = layer.getContext('2d');
    // Low-resolution thickness texture (alpha = how opaque the water is), scaled up smoothly.
    const texture = document.createElement('canvas');
    const tctx = texture.getContext('2d');
    let image;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let size = 0; // side of the rotated square that covers the screen
    let angle = 0;
    let columns = 0;
    let wet = [];
    let frame;
    let start;
    let lastNow;
    let covered = false;
    const period = wait + flood + hold + ebb;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = layer.width = width * dpr;
      canvas.height = layer.height = height * dpr;
      size = Math.hypot(width, height);
      // Rotation that makes "up" point from the bottom-left corner to the top-right one.
      angle = Math.atan2(width, height);
      columns = Math.ceil(size / COLUMN) + 1;
      wet = new Array(columns).fill(Infinity);
      const texels = Math.max(1, Math.min(320, Math.ceil(size / TEXTURE_STEP))); // never 0 (createImageData would throw)
      texture.width = texture.height = texels;
      image = tctx.createImageData(texels, texels);
    };

    // In the rotated frame: origin at the screen centre, y grows from the top-right corner to the bottom-left one.
    const toWaterFrame = (c) => {
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      c.translate(width / 2, height / 2);
      c.rotate(angle);
    };

    // strength: 1 = full thin/thick pattern, 0 = uniformly opaque (used when the screen is almost covered).
    const paintTexture = (t, strength) => {
      const n = texture.width;
      const data = image.data;
      const scale = size / n / PATTERN_SIZE;
      for (let j = 0, k = 0; j < n; j++) {
        const y = j * scale;
        for (let i = 0; i < n; i++, k += 4) {
          const x = i * scale;
          // Hollows (shallower, lighter water) drift across the sheet and keep changing shape: the noise is read
          // through a moving warp, and two layers slide in different directions at different speeds.
          const wx = perlin(x * 0.5 + t * 0.22, y * 0.5 - t * 0.05) * 0.9;
          const wy = perlin(x * 0.5 + 7.3 - t * 0.04, y * 0.5 - t * 0.2) * 0.9;
          const v = perlin(x + wx + t * 0.3, y + wy + t * 0.14)
            + 0.5 * perlin(x * 1.7 - wy - t * 0.38 + 5.2, y * 1.7 + wx + t * 0.26 + 1.3);
          const hollow = smooth(Math.max(0, Math.min(1, (v - 0.12) / 0.38)));
          // Slightly deeper ring just outside each hollow, so it reads as sunken rather than flat.
          const rim = Math.max(0, 1 - Math.abs(v - 0.05) / 0.1);
          const opacity = Math.min(1, 0.95 - 0.38 * hollow + 0.05 * rim);
          data[k] = 0;
          data[k + 1] = 0;
          data[k + 2] = 0;
          data[k + 3] = 255 * (1 - strength * (1 - opacity));
        }
      }
      tctx.putImageData(image, 0, 0);
    };

    const draw = (now) => {
      if (start === undefined) start = now;
      const dt = lastNow === undefined ? 0 : Math.min((now - lastNow) / 1000, 0.1);
      lastNow = now;
      const elapsed = (now - start) / 1000;
      const time = elapsed % period;

      let level;
      if (time < wait) {
        covered = false;
        level = -0.3; // out of sight; the wet sand it left keeps drying
      } else if (time < wait + flood) {
        level = levelAt((time - wait) / flood);
      } else if (time < wait + flood + hold) {
        if (!covered) {
          covered = true;
          onCoveredRef.current?.();
        }
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        wet.fill(-size); // everything is wet when the tide goes out
        frame = requestAnimationFrame(draw);
        return;
      } else {
        // Going out: the same steady speed, backwards.
        level = levelAt(1 - (time - wait - flood - hold) / ebb);
      }

      const half = size / 2;
      const amp = size * 0.05;
      const t = elapsed;

      // Shoreline, one point per column across the rotated frame.
      const edge = new Array(columns);
      let top = Infinity;
      let anyVisible = false;
      for (let c = 0; c < columns; c++) {
        const x = c * COLUMN;
        const shape = ridge(x / 300 + t * 0.15) * amp + ridge(x / 95 - t * 0.3 + 50) * amp * 0.25;
        const y = half - level * (size + amp * 2) + shape + amp;
        edge[c] = y;
        wet[c] = Math.min(wet[c] + DRY_SPEED * dt, y); // dries a little, unless the water is there now
        if (y < top) top = y;
        if (y < half || wet[c] < half) anyVisible = true;
      }

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!anyVisible) {
        frame = requestAnimationFrame(draw);
        return;
      }

      toWaterFrame(ctx);
      const xAt = (c) => c * COLUMN - half;

      // Wet sand: where the water has been but has pulled back from.
      ctx.beginPath();
      ctx.moveTo(xAt(0), edge[0]);
      for (let c = 0; c < columns; c++) ctx.lineTo(xAt(c), Math.min(wet[c], edge[c]));
      for (let c = columns - 1; c >= 0; c--) ctx.lineTo(xAt(c), edge[c]);
      ctx.closePath();
      ctx.fillStyle = 'rgba(0, 0, 0, 0.26)';
      ctx.fill();

      if (top < half) {
        // Water body, with uneven thickness.
        const strength = Math.max(0, Math.min(1, (1.05 - level) / 0.35));
        paintTexture(t, strength);
        lctx.setTransform(1, 0, 0, 1, 0, 0);
        lctx.clearRect(0, 0, layer.width, layer.height);
        toWaterFrame(lctx);
        lctx.save();
        lctx.beginPath();
        lctx.moveTo(-half, half);
        for (let c = 0; c < columns; c++) lctx.lineTo(xAt(c), edge[c]);
        lctx.lineTo(half, half);
        lctx.closePath();
        lctx.clip();
        lctx.imageSmoothingEnabled = true;
        lctx.drawImage(texture, -half, -half, size, size);
        // Thinner, see-through sheet right at the edge.
        lctx.globalCompositeOperation = 'destination-out';
        const depth = Math.max(90, size * 0.16);
        const thin = lctx.createLinearGradient(0, top, 0, top + amp * 2 + depth);
        thin.addColorStop(0, `rgba(0, 0, 0, ${0.5 * strength})`);
        thin.addColorStop(1, 'rgba(0, 0, 0, 0)');
        lctx.fillStyle = thin;
        lctx.fillRect(-half, top, size, amp * 2 + depth);
        lctx.restore();

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.drawImage(layer, 0, 0);
      }

      frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, [wait, flood, hold, ebb]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};

export default WaterFill;
