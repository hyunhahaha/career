import "../lib/smooth";
import "./styles/style.css";
import "swiper/css/bundle";
import { markers } from "../lib/smooth";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper/bundle";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// import Swiper bundle with all modules installed

// import styles bundle

//01
gsap.registerPlugin(ScrollTrigger);

const swiper1 = new Swiper(".swiper1", {
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

const swiper2 = new Swiper(".swiper2", {
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

const detail_1 = document.querySelectorAll(".detail_1_line > div");
const menuList = document.querySelectorAll(".category > div");
const pages = document.querySelectorAll(".pages");


const pop = document.querySelectorAll('.pop');

pop.forEach((item)=>{
  item.addEventListener('click',(e)=>{
    e.stopPropagation();
    gsap.to(".pop", { autoAlpha: 0 })
  })
})


detail_1.forEach((item, i) => {
  item.addEventListener("click", (e) => {

    e.stopPropagation();
    
    switch (i) {
      case 0: gsap.to(".pop1", { autoAlpha: 1 }); break;
      case 1: gsap.to(".pop2", { autoAlpha: 1 }); break;
    
    }
    
    // swiper1.slideTo(i);
  });
});








menuList.forEach((item,i)=>{

  
  item.addEventListener('click',()=>{
    gsap.to(pages,{autoAlpha:0,display:'none',onComplete(){gsap.to(pages[i],{display:'block',autoAlpha:1})}})

    
  })
})

markers();
