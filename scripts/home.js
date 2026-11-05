const slidingInElems = document.querySelectorAll(".anim_on_screen");
const section3_background = document.getElementById(
  "section_home_3_background",
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("on_site");
    } else {
      entry.target.classList.remove("on_site");
    }
  });
});

slidingInElems.forEach((el) => {
  observer.observe(el);
});

const backgroundImages = [
  "back1.jpg",
  "back2.jpg",
  "back3.jpeg",
  "back4.png",
  "back5.jpg",
  "back6.webp",
  "back7.jpg",
];
const backgroundImagesLen = backgroundImages.length;

let currImg = 1;

setInterval(() => {
  section3_background.style.backgroundImage = `url(./images/backgrounds/${backgroundImages[currImg]})`;
  currImg = (currImg + 1) % backgroundImagesLen;
}, 3000);
