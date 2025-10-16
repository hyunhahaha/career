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

const swiper3 = new Swiper(".swiper3", {
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





const swiper4 = new Swiper(".swiper4", {
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
const detail_2 = document.querySelectorAll(".detail_2_line > div");
const detail_3 = document.querySelectorAll(".detail_3_line > div");
const detail_4 = document.querySelectorAll(".detail_4_line > div");
const event_1 = document.querySelectorAll(".event_1_line > div");
const event_2 = document.querySelectorAll(".event_2_line > div");
const banner_1 = document.querySelectorAll(".banner_1_line > div");
const banner_2 = document.querySelectorAll(".banner_2_line > div");
const banner_3 = document.querySelectorAll(".banner_3_line > div");
const ad_1 = document.querySelectorAll(".ad_1_line > div");
const ad_2 = document.querySelectorAll(".ad_2_line > div");
const ad_3 = document.querySelectorAll(".ad_3_line > div");
const ad_4 = document.querySelectorAll(".ad_4_line > div");
const fashion_1 = document.querySelectorAll(".fashion_1_line > div");
const fashion_2 = document.querySelectorAll(".fashion_2_line > div");
const fashion_3 = document.querySelectorAll(".fashion_3_line > div");
const fashion_4 = document.querySelectorAll(".fashion_4_line > div");
const fashion_5 = document.querySelectorAll(".fashion_5_line > div");
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
      case 0: gsap.to(".pop1", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop1") // 여기에 추가
      }); break;
      case 1: gsap.to(".pop2", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop2") // 여기에 추가
      }); break;
      case 2: gsap.to(".pop3", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop3") // 여기에 추가
      }); break;
      case 3: gsap.to(".pop4", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop4") // 여기에 추가
      }); break;
    }
    
    // swiper1.slideTo(i);
  });
});


detail_2.forEach((item, i) => {
  item.addEventListener("click", (e) => {

    e.stopPropagation();
    
    switch (i) {
      case 0: gsap.to(".pop5", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop5") // 여기에 추가
      }); break;
      case 1: gsap.to(".pop6", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop6") // 여기에 추가
      }); break;
      case 2: gsap.to(".pop7", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop7") // 여기에 추가
      }); break;
      case 3: gsap.to(".pop8", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop8") // 여기에 추가
      }); break;
    }
    
    // swiper1.slideTo(i);
  });
});


detail_3.forEach((item, i) => {
  item.addEventListener("click", (e) => {

    e.stopPropagation();
    
    switch (i) {
      case 0: gsap.to(".pop9", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop9") // 여기에 추가
      }); break;
      case 1: gsap.to(".pop10", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop10") // 여기에 추가
      }); break;
      case 2: gsap.to(".pop11", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop11") // 여기에 추가
      }); break;
      case 3: gsap.to(".pop12", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop12") // 여기에 추가
      }); break;
    }
    
    // swiper1.slideTo(i);
  });
});


detail_4.forEach((item, i) => {
  item.addEventListener("click", (e) => {

    e.stopPropagation();
    
    switch (i) {
      case 0: gsap.to(".pop13", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop13") // 여기에 추가
      }); break;
      case 1: gsap.to(".pop62", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop62") // 여기에 추가
      }); break;
      case 2: gsap.to(".pop63", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop63") // 여기에 추가
      }); break;

    }
    
    // swiper1.slideTo(i);
  });
});









event_1.forEach((item, i) => {
  item.addEventListener("click", (e) => {

    e.stopPropagation();
    
    switch (i) {
      case 0: gsap.to(".pop14", { autoAlpha: 1 }); break;
      case 1: gsap.to(".pop15", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop15") // 여기에 추가
      }); break;
      case 2: gsap.to(".pop16", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop16") // 여기에 추가
      }); break;
      case 3: gsap.to(".pop17", { autoAlpha: 1 }); break;

    }
    
    // swiper1.slideTo(i);
  });
});


event_2.forEach((item, i) => {
  item.addEventListener("click", (e) => {

    e.stopPropagation();
    
    switch (i) {
      case 0: gsap.to(".pop18", { autoAlpha: 1 }); break;
      case 1: gsap.to(".pop19", { autoAlpha: 1 }); break;
      case 2: gsap.to(".pop20", { autoAlpha: 1 }); break;

    }
    
    // swiper1.slideTo(i);
  });
});







banner_1.forEach((item, i) => {
  item.addEventListener("click", (e) => {

    e.stopPropagation();
    
    switch (i) {
      case 0: gsap.to(".pop21", { autoAlpha: 1 }); break;
      case 1: gsap.to(".pop22", { autoAlpha: 1 }); break;
      case 2: gsap.to(".pop23", { autoAlpha: 1 }); break;
      case 3: gsap.to(".pop24", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop24") // 여기에 추가
      }); break;

    }
    
    // swiper1.slideTo(i);
  });
});


banner_2.forEach((item, i) => {
  item.addEventListener("click", (e) => {

    e.stopPropagation();
    
    switch (i) {
      case 0: gsap.to(".pop25", { autoAlpha: 1 }); break;
      case 1: gsap.to(".pop26", { autoAlpha: 1 }); break;
      case 2: gsap.to(".pop27", { autoAlpha: 1 }); break;
      case 3: gsap.to(".pop28", { autoAlpha: 1 }); break;

    }
    
    // swiper1.slideTo(i);
  });
});


banner_3.forEach((item, i) => {
  item.addEventListener("click", (e) => {

    e.stopPropagation();
    
    switch (i) {
      case 0: gsap.to(".pop59", { autoAlpha: 1 }); break;


    }
    
    // swiper1.slideTo(i);
  });
});








ad_1.forEach((item, i) => {
  item.addEventListener("click", (e) => {

    e.stopPropagation();
    
    switch (i) {
      case 0: gsap.to(".pop29", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop29") // 여기에 추가
      }); break;
      case 1: gsap.to(".pop30", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop30") // 여기에 추가
      }); break;
      case 2: gsap.to(".pop31", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop31") // 여기에 추가
      }); break;
      case 3: gsap.to(".pop32", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop32") // 여기에 추가
      }); break;

    }
    
    // swiper1.slideTo(i);
  });
});


ad_2.forEach((item, i) => {
  item.addEventListener("click", (e) => {

    e.stopPropagation();
    
    switch (i) {
      case 0: gsap.to(".pop33", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop33") // 여기에 추가
      }); break;
      case 1: gsap.to(".pop34", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop34") // 여기에 추가
      }); break;
      case 2: gsap.to(".pop35", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop35") // 여기에 추가
      }); break;
      case 3: gsap.to(".pop36", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop36") // 여기에 추가
      }); break;

    }
    
    // swiper1.slideTo(i);
  });
});


ad_3.forEach((item, i) => {
  item.addEventListener("click", (e) => {

    e.stopPropagation();
    
    switch (i) {
      case 0: gsap.to(".pop37", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop37") // 여기에 추가
      }); break;
      case 1: gsap.to(".pop38", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop38") // 여기에 추가
      }); break;
      case 2: gsap.to(".pop60", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop60") // 여기에 추가
      }); break;
      case 3: gsap.to(".pop61", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop61") // 여기에 추가
      }); break;

    }
    
    // swiper1.slideTo(i);
  });
});


ad_4.forEach((item, i) => {
  item.addEventListener("click", (e) => {

    e.stopPropagation();
    
    switch (i) {
      case 0: gsap.to(".pop64", { autoAlpha: 1 }); break;
      case 1: gsap.to(".pop65", { autoAlpha: 1 }); break;
      case 2: gsap.to(".pop66", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop66") // 여기에 추가
      }); break;


    }
    
    // swiper1.slideTo(i);
  });
});









fashion_1.forEach((item, i) => {
  item.addEventListener("click", (e) => {

    e.stopPropagation();
    
    switch (i) {
      case 0: gsap.to(".pop39", { autoAlpha: 1 }); break;
      case 1: gsap.to(".pop40", { autoAlpha: 1 }); break;
      case 2: gsap.to(".pop41", { autoAlpha: 1 }); break;
      case 3: gsap.to(".pop42", { autoAlpha: 1 }); break;
    }
    
    // swiper1.slideTo(i);
  });
});


fashion_2.forEach((item, i) => {
  item.addEventListener("click", (e) => {

    e.stopPropagation();
    
    switch (i) {
      case 0: gsap.to(".pop43", { autoAlpha: 1 }); break;
      case 1: gsap.to(".pop44", { autoAlpha: 1 }); break;
      case 2: gsap.to(".pop45", { autoAlpha: 1 }); break;
      case 3: gsap.to(".pop46", { autoAlpha: 1 }); break;
    }
    
    // swiper1.slideTo(i);
  });
});


fashion_3.forEach((item, i) => {
  item.addEventListener("click", (e) => {

    e.stopPropagation();
    
    switch (i) {
      case 0: gsap.to(".pop47", { autoAlpha: 1 }); break;
      case 1: gsap.to(".pop48", { autoAlpha: 1 }); break;
      case 2: gsap.to(".pop49", { autoAlpha: 1 }); break;
      case 3: gsap.to(".pop50", { autoAlpha: 1 }); break;
    }
    
    // swiper1.slideTo(i);
  });
});


fashion_4.forEach((item, i) => {
  item.addEventListener("click", (e) => {

    e.stopPropagation();
    
    switch (i) {
      case 0: gsap.to(".pop51", { autoAlpha: 1 }); break;
      case 1: gsap.to(".pop52", { autoAlpha: 1 }); break;
      case 2: gsap.to(".pop53", { autoAlpha: 1 }); break;
      case 3: gsap.to(".pop54", { autoAlpha: 1 }); break;
    }
    
    // swiper1.slideTo(i);
  });
});


fashion_5.forEach((item, i) => {
  item.addEventListener("click", (e) => {

    e.stopPropagation();
    
    switch (i) {
      case 0: gsap.to(".pop55", {
        autoAlpha: 1,
        onComplete: () => showSwipeHint(".pop55") // 여기에 추가
      }); break;
      case 1: gsap.to(".pop56", { autoAlpha: 1 }); break;
      case 2: gsap.to(".pop57", { autoAlpha: 1 }); break;
      case 3: gsap.to(".pop58", { autoAlpha: 1 }); break;
    }
    
    // swiper1.slideTo(i);
  });
});






function showSwipeHint(popSelector) {
  const hint = document.querySelector(`${popSelector} .swipe-hint`);
  if (!hint) return;

  // 힌트 초기화
  gsap.set(hint, { autoAlpha: 0 });
  
  // 나타났다 사라짐
  gsap.to(hint, { autoAlpha: 1, duration: 0.5 });
  gsap.to(hint, { autoAlpha: 0, delay: 3, duration: 0.5 });
}











menuList.forEach((item,i)=>{

  
  item.addEventListener('click',()=>{
    gsap.to(pages,{autoAlpha:0,display:'none',onComplete(){gsap.to(pages[i],{display:'block',autoAlpha:1})}})

    
  })
})














markers();
