import workshopBg from '../../assets/home-bg.jpg';
import studioBg from '../../assets/home-bg-studio.jpg';
import deskBg from '../../assets/home-bg-desk.jpg';
import deskMakerBg from '../../assets/home-bg-desk-maker.jpg';
import deskLaptopBg from '../../assets/home-bg-desk-laptop.jpg';
import labBg from '../../assets/home-bg-lab.jpg';
import writingBg from '../../assets/home-bg-writing.jpg';

// Available backgrounds. `position` is the CSS background-position: which part of the photo stays
// in view when the screen crops it (e.g. a portrait photo on a landscape screen).
export const BACKGROUNDS = {
  workshop: { src: workshopBg, position: 'center' },
  studio: { src: studioBg, position: 'center 70%' },
  desk: { src: deskBg, position: 'center 62%' },
  deskMaker: { src: deskMakerBg, position: 'center 66%' },
  deskLaptop: { src: deskLaptopBg, position: 'center 62%' },
  lab: { src: labBg, position: 'center' },
  writing: { src: writingBg, position: 'center' },
};
export const BACKGROUND = BACKGROUNDS.lab;
// Background shown (cross-fade) while hovering an item of each kind. Kinds not listed keep BACKGROUND.
export const KIND_BACKGROUNDS = {
  art: BACKGROUNDS.desk,
  writing: BACKGROUNDS.writing,
};

// Every background the Home can show (base + hover ones), in order. The contact page cycles through these.
export const ACTIVE_BACKGROUNDS = [BACKGROUND, ...Object.values(KIND_BACKGROUNDS)];
