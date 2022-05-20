const openWrap = document.querySelector(".open__wrap");
const openPage = openWrap.querySelector(".open__page");
const openCanvas = openPage.querySelector(".open__canvas");
const openTitle = openPage.querySelector(".open__title");
const openButton = openPage.querySelector(".open__button");
const openLoading = openWrap.querySelector(".open__loading");
const loadingTxt = openLoading.querySelector(".txt");

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
  // openPage 제거
  gsap.to(openPage, {
    display: "none",
    delay: 3,
  });
  // openLoading 생성
  gsap.to(openLoading, {
    display: "flex",
    delay: 3,
  });
  // 로딩 타이핑
  gsap.to(loadingTxt, {
    duration: 1,
    opacity: 1,
    ease: "expo.inOut",
    delay: 3,
  });
  // loadingTxt 제거
  gsap.to(loadingTxt, {
    duration: 1,
    opacity: 0,
    ease: "expo.inOut",
    delay: 5.5,
    css: { className: "animate__animated animate__zoomOutUp txt" },
  });
  // intro 페이지로 이동
  setTimeout(() => {
    location.href = "./pages/intro.html";
  }, 6500);
}
