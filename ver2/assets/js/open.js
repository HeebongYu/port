const openWrap = document.querySelector(".open__wrap");
const openPage = openWrap.querySelector(".open__page");
const openCanvas = openPage.querySelector(".open__canvas");
const openTitle = openPage.querySelector(".open__title");
const openButton = openPage.querySelector(".open__button");
const openButtonTxt = openPage.querySelector(".open__button span");

(function () {
  if (!location.hash) {
    location.hash = "#reload";
    location.href = location.href;
  }
})();

openButton.addEventListener("click", () => {
  loading();
});

function loading() {
  // openCanvas 제거
  gsap.to(openCanvas, {
    duration: 1.5,
    opacity: 0,
    ease: "expo.inOut",
  });
  // openTitle 제거
  gsap.to(openTitle, {
    duration: 1.5,
    opacity: 0,
    ease: "expo.inOut",
    delay: 0.5,
  });
  // openButtonTxt 제거
  gsap.to(openButtonTxt, {
    duration: 1,
    opacity: 0,
    ease: "expo.inOut",
    delay: 0.5,
  });
  // openButton 제거
  gsap.to(openButton, {
    duration: 1.5,
    width: 0,
    opacity: 0,
    ease: "expo.inOut",
    delay: 1,
  });
  // 배경 변경
  gsap.to(openWrap, {
    duration: 1.5,
    backgroundColor: "#c1d72e",
    ease: "expo.inOut",
    delay: 1.5,
  });
  // intro 페이지로 이동
  setTimeout(() => {
    location.href = "./pages/intro.html";
  }, 3000);
}
