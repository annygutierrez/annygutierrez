import { TimelineMax as Timeline, Power1 } from 'gsap';


window.loadPromise = new Promise(resolve => {
    window.addEventListener('DOMContentLoaded', resolve)
  })

const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const content = node.querySelector('.content');
  const contentInner = node.querySelector('.content--inner');

  timeline
    .from(node, 0.3, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
    .from(content, 0.15, { autoAlpha: 0, y: 25, ease: Power1.easeInOut })
    .from(contentInner, 0.15, { autoAlpha: 0, delay: 0.15, ease: Power1.easeIn });

  return timeline;
}

const getHomeTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const texts = node.querySelectorAll('.animation-text');
  const texts2 = node.querySelectorAll('.proj-text');

  timeline
    .from(node, 0, { display: 'none', autoAlpha: 0, delay })
    .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

  // timeline
  //   .from(node, 0, { display: 'none', autoAlpha: 0, delay })
  //   .staggerFrom(texts2, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

  return timeline;
}

const getHomeTimeline2 = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const texts = node.querySelectorAll('.animation-text');
  const texts2 = node.querySelectorAll('.proj-text');

  // timeline
  //   .from(node, 0, { display: 'none', autoAlpha: 0, delay })
  //   .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

  timeline
    .from(node, 0, { display: 'none', autoAlpha: 0, delay })
    .staggerFrom(texts2, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

  return timeline;
}

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5;
  let timeline
  let timeline2

  if (pathname === '/') {
    timeline = getHomeTimeline(node, delay);
    timeline2 = getHomeTimeline2(node, delay);
  } else {
    timeline = getDefaultTimeline(node, delay);
  }

  console.log('window ************', window);
  console.log('window ************', window.loadPromise);
  
  window
    .loadPromise
    .then(() => requestAnimationFrame(() => {

      timeline.play();
      timeline2.play();
    }))
}

// const hola = () => {
//     window
//     .loadPromise
//     .then(() => requestAnimationFrame(() => timeline.play()))
// }

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
}
