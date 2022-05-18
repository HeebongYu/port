var s = skrollr.init();
hljs.highlightAll();

function scroll() {
  let scrollTop = document.documentElement.scrollTop;
  document.querySelector(".scrollTop").innerText = Math.round(scrollTop);
  requestAnimationFrame(scroll);
}
scroll();
function arrow(el) {
  let answer = "";
  if (el === "keyboard_arrow_right") {
    answer = "keyboard_arrow_down";
  } else {
    answer = "keyboard_arrow_right";
  }
  return answer;
}
function vscodeNone() {
  document.querySelectorAll(".vscode .right > div").forEach((el) => {
    el.style.display = "none";
  });
}
vscodeNone();

const siteBtn = document.querySelectorAll(".site__btn");
const siteLoad = document.querySelector(".site__load");
const siteLoadTxt = document.querySelector(".site__load .txt");

siteBtn.forEach((el) => {
  el.addEventListener("click", () => {
    // 가상로딩 시작
    gsap.to(siteLoad, {
      duration: 1.5,
      top: 0,
      ease: "expo.inOut",
    });

    // 로딩 타이핑
    gsap.to(siteLoadTxt, {
      duration: 5,
      text: "끝까지 봐주셔서 감사합니다.",
      delay: 1.5,
    });

    // 로딩 타이핑 제거
    setTimeout(() => {
      siteLoadTxt.classList.add("hidden");
    }, 7000);

    // intro 페이지로 이동
    setTimeout(() => {
      location.href = "./ending.html";
    }, 7500);
  });
});
