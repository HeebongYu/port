const dots = document.querySelector(".dots");
const dot = document.querySelectorAll(".dots .dot");
const contCont = document.querySelector(".cont__cont");
const contSection = document.querySelectorAll(".cont__cont section");
const contBtn = document.querySelector(".cont__btn");
const contLoad = document.querySelector(".cont__load");
const contLoadTxt = document.querySelector(".cont__load .txt");

// 가로 모드
function scroll() {
  // 가로 이동
  let scrollTop = document.documentElement.scrollTop;
  let contWidth = contCont.offsetWidth;
  let viewWidth = document.body.offsetWidth;
  let viewHeight = window.innerHeight;
  let screenRatio = viewWidth / viewHeight;
  document.body.style.height = contWidth / screenRatio + "px";
  contCont.style.left = -scrollTop * screenRatio + "px";
  contLoad.style.width = viewWidth + "px";

  // 닷 메뉴
  for (let i = 0; i < dot.length; i++) {
    // 닷 메뉴 활성화
    if (viewHeight * i <= scrollTop && scrollTop < viewHeight * (i + 1)) {
      remove();
      dot[i].classList.add("active");
    }
    // 닷 메뉴 이동
    dot[i].addEventListener("click", () => {
      window.scrollTo(0, viewHeight * i);
    });
  }

  // 스크롤 이동 감지
  requestAnimationFrame(scroll);
}
scroll();

// 닷 메뉴 비활성화
function remove() {
  dot.forEach((el) => {
    el.classList.remove("active");
  });
}

contBtn.addEventListener("click", () => {
  document.body.classList.add("stop-scrolling");
  dot.forEach((el) => {
    el.style.opacity = 0;
  });

  // 가상로딩 시작
  gsap.to(contLoad, {
    duration: 1.5,
    top: 0,
    ease: "expo.inOut",
    delay: 0,
  });

  // 로딩 타이핑
  gsap.to(contLoadTxt, {
    duration: 4,
    text: "제작한 사이트들을 살펴볼까요?",
    delay: 1.5,
  });

  // 로딩 타이핑 제거
  setTimeout(() => {
    contLoadTxt.classList.add("hidden");
  }, 6000);

  // site 페이지로 이동
  setTimeout(() => {
    location.href = "./site.html";
  }, 6500);
});
