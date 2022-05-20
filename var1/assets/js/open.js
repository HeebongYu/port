const openBtn = document.querySelector(".open__btn");
const openLoad = document.querySelector(".open__load");
const openLoadTxt = document.querySelector(".open__load .txt");

openBtn.addEventListener("click", () => {
  // 가상로딩 시작
  gsap.to(openLoad, {
    duration: 1.5,
    top: 0,
    ease: "expo.inOut",
  });

  // 로딩 타이핑
  gsap.to(openLoadTxt, {
    duration: 5,
    text: "즐기실 준비 됐나요? 먼저 저에 대하여 알고 가요.",
    delay: 1.5,
  });

  // 로딩 타이핑 제거
  setTimeout(() => {
    openLoadTxt.classList.add("hidden");
  }, 7000);

  // intro 페이지로 이동
  setTimeout(() => {
    location.href = "./pages/intro.html";
  }, 7500);
});
