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
