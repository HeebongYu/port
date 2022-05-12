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

  // intro 페이지로 이동
  setTimeout(() => {
    location.href = "./pages/intro.html";
  }, 7000);
});

const introBtn = document.querySelector(".intro__btn");
const introLoad = document.querySelector(".intro__load");
const introLoadTxt = document.querySelector(".intro__load .txt");

introBtn.addEventListener("click", () => {
  document.body.classList.add("stop-scrolling");
  window.scrollTo(0, 0);

  // 가상로딩 시작
  gsap.to(introLoad, {
    duration: 1.5,
    left: 0,
    ease: "expo.inOut",
  });

  // 로딩 타이핑
  gsap.to(introLoadTxt, {
    duration: 5,
    text: "이제 컨텐츠들을 즐기러 가요.",
    delay: 1.5,
  });

  // cont 페이지로 이동
  setTimeout(() => {
    location.href = "./cont.html";
  }, 7000);
});
