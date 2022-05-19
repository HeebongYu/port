var s = skrollr.init();
hljs.highlightAll();

function siteNumCh(el) {
  let siteNum;
  if (0 <= el && el < 3000) {
    siteNum = 1;
  } else if (3000 <= el && el < 9000) {
    siteNum = 2;
  } else if (9000 <= el) {
    siteNum = 3;
  }
  console.log(siteNum);
}

// scrollTop
function scroll() {
  let scrollTop = document.documentElement.scrollTop;
  document.querySelector(".scrollTop").innerText = Math.round(scrollTop);
  siteNumCh(scrollTop);
  requestAnimationFrame(scroll);
}
scroll();

// vscode 작업용 함수
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

// 로딩
const siteBtn = document.querySelectorAll(".site__btn");
const siteLoad = document.querySelector(".site__load");
const siteLoadTxt = document.querySelector(".site__load .txt");
siteBtn.forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(".scrollTop").style.display = "none";
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
