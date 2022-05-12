(function () {
  setTimeout(() => {
    document.body.classList.add("show");
    scrollTo(0, 0);
  }, 100);
})();

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

const introBtn = document.querySelector(".intro__btn");
const introLoad = document.querySelector(".intro__load");
const introLoadTxt = document.querySelector(".intro__load .txt");

introBtn.addEventListener("click", () => {
  document.body.classList.add("stop-scrolling");
  // 스크롤 탑
  gsap.to(window, {
    duration: 0.5,
    scrollTo: 0,
    ease: "expo.inOut",
  });

  // 가상로딩 시작
  gsap.to(introLoad, {
    duration: 1.5,
    left: 0,
    ease: "expo.inOut",
    delay: 1,
  });

  // 로딩 타이핑
  gsap.to(introLoadTxt, {
    duration: 4,
    text: "이제 컨텐츠들을 즐기러 가요.",
    delay: 2.5,
  });

  // 로딩 타이핑 제거
  setTimeout(() => {
    introLoadTxt.classList.add("hidden");
  }, 7000);

  // cont 페이지로 이동
  setTimeout(() => {
    location.href = "./cont.html";
  }, 7500);
});
