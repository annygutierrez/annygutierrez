import React, { useEffect, useRef } from 'react';

// Black water coming and going like the tide on a beach, in an endless loop:
// wait → flood (rushes up in waves, each pulling back a little before the next goes further, until the screen
// is covered) → hold (fully black) → ebb (goes back out the same way) → wait again… Realism cues:
// - an irregular shoreline (smooth noise instead of regular sine waves) that keeps changing shape;
// - a thin, see-through sheet of water at the edge that gets deeper (opaque) further back;
// - patchy foam and bubbles along the edge while a wave advances, dissolving as it pulls back;
// - darker "wet sand" left on the photo where the water has been, which slowly dries.

// Water level over time (0 = bottom of the screen, 1 = top): rush in, pull back, rush in further...
const SURGES = [
  [0, -0.05], [0.15, 0.3], [0.26, 0.21], [0.44, 0.58], [0.55, 0.47], [0.74, 0.9], [0.84, 0.82], [1, 1.12],
];
const COLUMN = 5; // px between shoreline samples
const DRY_SPEED = 60; // px per second the wet sand dries back towards the water

const smooth = (p) => p * p * (3 - 2 * p);

const levelAt = (p) => {
  for (let i = 1; i < SURGES.length; i++) {
    const [t0, l0] = SURGES[i - 1];
    const [t1, l1] = SURGES[i];
    if (p <= t1) return l0 + (l1 - l0) * smooth((p - t0) / (t1 - t0));
  }
  return SURGES[SURGES.length - 1][1];
};

// 1D value noise, roughly -1..1.
const RANDOM = Array.from({ length: 512 }, () => Math.random() * 2 - 1);
const noise = (x) => {
  const i = Math.floor(x);
  const f = x - i;
  const a = RANDOM[((i % 512) + 512) % 512];
  const b = RANDOM[(((i + 1) % 512) + 512) % 512];
  return a + (b - a) * smooth(f);
};
const fbm = (x) => noise(x) * 0.6 + noise(x * 2.3 + 17) * 0.28 + noise(x * 5.1 + 41) * 0.12;

const WaterFill = ({ wait = 0, flood = 7, hold = 4, ebb = 6, onCovered, className }) => {
  const canvasRef = useRef(null);
  const onCoveredRef = useRef(onCovered);
  onCoveredRef.current = onCovered;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let columns = 0;
    let wet = []; // highest point (smallest y) the water has reached, per column
    let bubbles = [];
    let frame;
    let start;
    let lastLevel = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.ceil(width / COLUMN) + 1;
      wet = new Array(columns).fill(Infinity);
    };

    let lastNow;
    let covered = false;
    const period = wait + flood + hold + ebb;

    const draw = (now) => {
      if (start === undefined) start = now;
      const dt = lastNow === undefined ? 0 : Math.min((now - lastNow) / 1000, 0.1);
      lastNow = now;
      const elapsed = (now - start) / 1000;
      const time = elapsed % period;

      // Which phase of the loop we are in, and how far the water is (0 = gone, SURGES end = covered).
      let level;
      if (time < wait) {
        // Water out of sight below the screen; the wet sand it left keeps drying.
        covered = false;
        level = -0.3;
      } else if (time < wait + flood) {
        level = levelAt((time - wait) / flood);
      } else if (time < wait + flood + hold) {
        if (!covered) {
          covered = true;
          onCoveredRef.current?.();
        }
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, width, height);
        wet.fill(0); // everything is wet once the tide goes out
        bubbles = [];
        frame = requestAnimationFrame(draw);
        return;
      } else {
        // Going out: the same surges played backwards (pulls back, creeps in a little, pulls back further…).
        level = levelAt(1 - (time - wait - flood - hold) / ebb);
      }

      ctx.clearRect(0, 0, width, height);
      const advancing = level > lastLevel;
      lastLevel = level;
      const t = elapsed;
      const amp = Math.min(height, width) * 0.07;

      // Shoreline: one y per column.
      const edge = new Array(columns);
      let top = height;
      for (let c = 0; c < columns; c++) {
        const x = c * COLUMN;
        const shape = fbm(x / 260 + t * 0.18) * amp + fbm(x / 90 - t * 0.35 + 50) * amp * 0.25;
        const y = height - level * (height + amp * 2) + shape + amp;
        edge[c] = y;
        wet[c] = Math.min(wet[c] + DRY_SPEED * dt, y); // dries a little, unless the water is there now
        if (y < top) top = y;
      }

      // Wet sand: where the water has been but has pulled back from.
      ctx.beginPath();
      ctx.moveTo(0, edge[0]);
      for (let c = 0; c < columns; c++) ctx.lineTo(c * COLUMN, wet[c]);
      for (let c = columns - 1; c >= 0; c--) ctx.lineTo(c * COLUMN, edge[c]);
      ctx.closePath();
      ctx.fillStyle = 'rgba(0, 0, 0, 0.28)';
      ctx.fill();

      // Water body: a thin see-through sheet at the edge, deeper (opaque) further back.
      const shoreline = () => {
        ctx.beginPath();
        ctx.moveTo(0, height);
        for (let c = 0; c < columns; c++) ctx.lineTo(c * COLUMN, edge[c]);
        ctx.lineTo(width, height);
        ctx.closePath();
      };
      const depth = Math.max(80, height * 0.22);
      const water = ctx.createLinearGradient(0, top, 0, top + amp * 2 + depth);
      water.addColorStop(0, 'rgba(4, 5, 7, 0.5)');
      water.addColorStop(0.35, 'rgba(3, 4, 5, 0.85)');
      water.addColorStop(1, 'rgba(0, 0, 0, 1)');
      shoreline();
      ctx.fillStyle = water;
      ctx.fill();

      // Swash lines: faint reflections of earlier wave edges inside the water.
      ctx.lineWidth = 1;
      [[14, 0.05], [36, 0.03], [70, 0.02]].forEach(([offset, alpha], i) => {
        ctx.beginPath();
        for (let c = 0; c < columns; c++) {
          const x = c * COLUMN;
          const y = edge[c] + offset + fbm(x / 120 + t * 0.5 + i * 9) * 6;
          if (c === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.stroke();
      });

      // Foam: patchy, strongest while the wave advances.
      const foamStrength = advancing ? 1 : 0.35;
      for (let c = 0; c < columns; c++) {
        const x = c * COLUMN;
        const patch = Math.max(0, fbm(x / 55 + t * 0.6 + 100) * 1.8 + 0.25) * foamStrength;
        if (patch <= 0.02) continue;
        for (let k = 0; k < 3; k++) {
          const jitter = noise(x * 0.31 + k * 13 + t * 3);
          ctx.fillStyle = `rgba(235, 235, 230, ${Math.min(0.45, patch * (0.32 - k * 0.09))})`;
          ctx.beginPath();
          ctx.arc(x + jitter * 3, edge[c] + 1.5 + k * 3.5 + jitter * 2, 1.4 - k * 0.3, 0, Math.PI * 2);
          ctx.fill();
        }
        if (advancing && Math.random() < 0.05 * patch) {
          bubbles.push({ x: x + Math.random() * COLUMN, dy: 2 + Math.random() * 18, r: 0.6 + Math.random() * 1.6, life: 1 });
        }
      }

      // Bubbles: stay just behind the edge, fade out.
      bubbles = bubbles.filter((b) => (b.life -= 0.012) > 0);
      bubbles.forEach((b) => {
        const c = Math.min(columns - 1, Math.max(0, Math.round(b.x / COLUMN)));
        ctx.beginPath();
        ctx.arc(b.x, edge[c] + b.dy, b.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(230, 230, 225, ${0.35 * b.life})`;
        ctx.stroke();
      });

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
