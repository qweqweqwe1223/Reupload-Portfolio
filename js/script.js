// 커서 이벤트
const cursor = document.querySelector(".cursor");
const section = document.querySelector(".section.title");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

section.addEventListener("mouseenter", () => {
  cursor.classList.add("active");
});
section.addEventListener("mouseleave", () => {
  cursor.classList.remove("active");
});




// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.scrollerProxy(".wrap", {
//   scrollTop(value) {
//     return arguments.length
//       ? (document.querySelector(".wrap").scrollTop = value)
//       : document.querySelector(".wrap").scrollTop;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },
// });
// ScrollTrigger.addEventListener(
//   "refresh",
//   () => document.querySelector(".wrap").scrollTop
// );
// ScrollTrigger.refresh();

// sustainable 섹션 애니메이션
gsap.fromTo(
  "section.sustainable .first",
  { x: -60, y: -60, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "section.sustainable",
      scroller: ".wrap",
      start: "top 70%",
      toggleActions: "play none none reverse",
      once: false,
    },
  }
);

gsap.fromTo(
  "section.sustainable .second",
  { x: 60, y: -60, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "section.sustainable",
      scroller: ".wrap",
      start: "top 70%",
      toggleActions: "play none none reverse",
      once: false,
    },
  }
);

gsap.fromTo(
  "section.sustainable .third",
  { x: -60, y: 60, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "section.sustainable",
      scroller: ".wrap",
      start: "top 70%",
      toggleActions: "play none none reverse",
      once: false,
    },
  }
);

gsap.fromTo(
  "section.sustainable .fourth",
  { x: 60, y: 60, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "section.sustainable",
      scroller: ".wrap",
      start: "top 70%",
      toggleActions: "play none none reverse",
      once: false,
    },
  }
);

gsap.fromTo(
  "section.sustainable p",
  { y: 30, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "section.sustainable",
      scroller: ".wrap",
      start: "top 70%",
      toggleActions: "play none none reverse",
      once: false,
    },
  }
);



// 커서 이벤트2
const uiuxCur1 = document.querySelector(".uiux_cur1");
const uiuxCur2 = document.querySelector(".uiux_cur2");
const uiuxCur3 = document.querySelector(".uiux_cur3");

const uiuxArea1 = document.querySelector(".uiux_list.list1");
const uiuxArea2 = document.querySelector(".uiux_list.list2");
const uiuxArea3 = document.querySelector(".uiux_list.list3");

document.addEventListener("mousemove", (e) => {
  uiuxCur1.style.top = e.clientY + "px";
  uiuxCur1.style.left = e.clientX + "px";
  uiuxCur2.style.top = e.clientY + "px";
  uiuxCur2.style.left = e.clientX + "px";
  uiuxCur3.style.top = e.clientY + "px";
  uiuxCur3.style.left = e.clientX + "px";
});

uiuxArea1.addEventListener("mouseenter", () => {
  uiuxCur1.classList.add("active");
});
uiuxArea1.addEventListener("mouseleave", () => {
  uiuxCur1.classList.remove("active");
});

uiuxArea2.addEventListener("mouseenter", () => {
  uiuxCur2.classList.add("active");
});
uiuxArea2.addEventListener("mouseleave", () => {
  uiuxCur2.classList.remove("active");
});

uiuxArea3.addEventListener("mouseenter", () => {
  uiuxCur3.classList.add("active");
});
uiuxArea3.addEventListener("mouseleave", () => {
  uiuxCur3.classList.remove("active");
});



const wrap = document.querySelector('.wrap');
const popup = document.getElementById('popup');
const openBtns = document.querySelectorAll('.openPopup');
const closePopup = document.getElementById('closePopup');

openBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    popup.classList.add('active');
    wrap.style.overflow = 'hidden'; 
  });
});

closePopup.addEventListener('click', () => {
  popup.classList.remove('active');
  wrap.style.overflowY = 'scroll'; 
});