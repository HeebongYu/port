const menu = document.querySelector(".header .menu");
const nav = document.querySelector(".nav");

menu.addEventListener("mouseenter", () => {
  gsap.to(nav, {
    duration: 1.5,
    right: 0,
    ease: "expo.inOut",
  });
});
nav.addEventListener("mouseleave", () => {
  gsap.to(nav, {
    duration: 1.5,
    right: -28 + "%",
    ease: "expo.inOut",
  });
});
