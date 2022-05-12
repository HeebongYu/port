const contWrap = document.querySelector(".cont__wrap");
const contSection = document.querySelectorAll(".cont__wrap section");
const dot = document.querySelectorAll(".dots .dot");

// 가로 모드
function scroll() {
  // 가로 이동
  let scrollTop = document.documentElement.scrollTop;
  let contWidth = contWrap.offsetWidth;
  let viewWidth = document.body.offsetWidth;
  let viewHeight = window.innerHeight;
  let screenRatio = viewWidth / viewHeight;
  document.body.style.height = contWidth / screenRatio + "px";
  contWrap.style.left = -scrollTop * screenRatio + "px";

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
