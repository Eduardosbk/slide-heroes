import SlideNav from './main.js';

const slide = new SlideNav('.slide', '.wrapper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');