import "../lib/smooth";
import "./styles/style.css";
import 'swiper/css/bundle';
import { markers } from "../lib/smooth";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from 'swiper/bundle';
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// import Swiper bundle with all modules installed

// import styles bundle



//01
gsap.registerPlugin(ScrollTrigger);
// ,Draggable,MotionPathPlugin

const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  // loop: true,

  // // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});


//02
gsap.registerPlugin(ScrollTrigger);
// ,Draggable,MotionPathPlugin

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  // loop: true,

  // // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

















markers();
