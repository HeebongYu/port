// 스무스
const scroller = new LocomotiveScroll({
  el: document.querySelector(".intro__page"),
  smooth: true,
});

// 스크롤
function scroll() {
  // 스크롤 탑
  let scrollTop = document.documentElement.scrollTop;

  // 이질감
  const introSection01 = document.querySelector(".intro__section01");
  const introSection02 = document.querySelector(".intro__section02");
  const introSection03 = document.querySelector(".intro__section03");
  const introSection04 = document.querySelector(".intro__section04");
  let target1 = introSection01.querySelector(".decoT");
  let target2 = introSection02.querySelector(".txt");
  let target3 = introSection03.querySelector(".txt1");
  let target4 = introSection03.querySelector(".txt2");
  let target5 = introSection04.querySelector(".txt");
  let offset1 = (scrollTop - introSection01.offsetTop) * 0.1;
  let offset2 = (scrollTop - introSection02.offsetTop) * 0.1;
  let offset3 = (scrollTop - introSection03.offsetTop) * 0.1;
  let offset4 = (scrollTop - introSection03.offsetTop) * 0.1;
  let offset5 = (scrollTop - introSection04.offsetTop) * 0.1;
  gsap.to(target2, { duration: 0.3, y: offset2 });
  gsap.to(target3, { duration: 0.3, y: offset3 });
  gsap.to(target4, { duration: 0.3, y: offset4 });
  gsap.to(target5, { duration: 0.3, y: offset5 });

  // intro__page 제거
  const wih = window.innerHeight;
  if (scrollTop > wih) {
    document.querySelector(".intro__page").style.display = "none";
  }

  // 스크롤트리거
  const section02DecoT = document.querySelector(
    ".intro__section02 .decoT span"
  );
  const section03DecoT = document.querySelector(
    ".intro__section03 .decoT span"
  );
  const sectionDecoT = document.querySelectorAll(".decoT span");
  gsap.to(section02DecoT, {
    scrollTrigger: {
      trigger: section02DecoT,
      start: "bottom bottom",
      end: "top top",
      markers: false,
      toggleActions: "play none none none",
    },
    x: 0,
    autoAlpha: 1,
    duration: 1.25,
    ease: "power4.inout",
  });
  gsap.to(section03DecoT, {
    scrollTrigger: {
      trigger: section03DecoT,
      start: "bottom bottom",
      end: "top top",
      markers: false,
      toggleActions: "play none none none",
    },
    x: 0,
    autoAlpha: 1,
    duration: 1.25,
    ease: "power4.out",
  });

  requestAnimationFrame(scroll);
}
scroll();

// 페이지 트랜지션
const introWrap = document.querySelector(".intro__wrap");
const introSection = introWrap.querySelector(".intro__section");
const introSection05 = introWrap.querySelector(".intro__section05");
const introButton = introWrap.querySelector(".intro__section05 button");
introButton.addEventListener("click", () => {
  // introSection 제거
  gsap.to(introSection, {
    duration: 1.5,
    height: 0,
    opacity: 0,
    ease: "expo.inOut",
  });
  // introSection05 화면가득
  gsap.to(introSection05, {
    duration: 1.5,
    height: 100 + "vh",
    ease: "expo.inOut",
  });
  // 배경 변경
  gsap.to(introButton, {
    duration: 2,
    fontSize: 100 + "vw",
    ease: "expo.inOut",
    delay: 1,
  });
  // 배경 변경
  gsap.to(introWrap, {
    duration: 1.5,
    backgroundColor: "#f96f55",
    ease: "expo.inOut",
    delay: 1.5,
  });
  // intro 페이지로 이동
  setTimeout(() => {
    location.href = "./cont.html";
  }, 3000);
});
