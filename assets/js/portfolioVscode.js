// portfolioSite vscode
const portfolioSite = {
  assetsFolderL1: document.querySelector("#assets__folder__l1"),
  cssFolderL1: document.querySelector("#css__folder__l1"),
  jsFolderL1: document.querySelector("#js__folder__l1"),
  pagesFolderL1: document.querySelector("#pages__folder__l1"),
  fontsCssL1: document.querySelector("#fonts__css__l1"),
  resetCssL1: document.querySelector("#reset__css__l1"),
  commonCssL1: document.querySelector("#common__css__l1"),
  styleCssL1: document.querySelector("#style__css__l1"),
  loadingJsL1: document.querySelector("#loading__js__l1"),
  menuJsL1: document.querySelector("#menu__js__l1"),
  openJsL1: document.querySelector("#open__js__l1"),
  introJsL1: document.querySelector("#intro__js__l1"),
  contJsL1: document.querySelector("#cont__js__l1"),
  siteJsL1: document.querySelector("#site__js__l1"),
  endingJsL1: document.querySelector("#ending__js__l1"),
  openHtmlL1: document.querySelector("#open__html__l1"),
  introHtmlL1: document.querySelector("#intro__html__l1"),
  contHtmlL1: document.querySelector("#cont__html__l1"),
  siteHtmlL1: document.querySelector("#site__html__l1"),
  endingHtmlL1: document.querySelector("#ending__html__l1"),
  assetsFolderR1: document.querySelector("#assets__folder__r1"),
  cssFolderR1: document.querySelector("#css__folder__r1"),
  jsFolderR1: document.querySelector("#js__folder__r1"),
  pagesFolderR1: document.querySelector("#pages__folder__r1"),
  fontsCssR1: document.querySelector("#fonts__css__r1"),
  resetCssR1: document.querySelector("#reset__css__r1"),
  commonCssR1: document.querySelector("#common__css__r1"),
  styleCssR1: document.querySelector("#style__css__r1"),
  loadingJsR1: document.querySelector("#loading__js__r1"),
  menuJsR1: document.querySelector("#menu__js__r1"),
  openJsR1: document.querySelector("#open__js__r1"),
  introJsR1: document.querySelector("#intro__js__r1"),
  contJsR1: document.querySelector("#cont__js__r1"),
  siteJsR1: document.querySelector("#site__js__r1"),
  endingJsR1: document.querySelector("#ending__js__r1"),
  openHtmlR1: document.querySelector("#open__html__r1"),
  introHtmlR1: document.querySelector("#intro__html__r1"),
  contHtmlR1: document.querySelector("#cont__html__r1"),
  siteHtmlR1: document.querySelector("#site__html__r1"),
  endingHtmlR1: document.querySelector("#ending__html__r1"),
};
portfolioSite.assetsFolderL1.addEventListener("click", () => {
  $(portfolioSite.assetsFolderL1).next().toggle();
  $(portfolioSite.assetsFolderL1)
    .find(".material-icons")
    .text(
      arrow($(portfolioSite.assetsFolderL1).find(".material-icons").text())
    );
  $(portfolioSite.assetsFolderL1).find(".assets")[0].classList.toggle("open");
});
portfolioSite.cssFolderL1.addEventListener("click", () => {
  $(portfolioSite.cssFolderL1).next().toggle();
  $(portfolioSite.cssFolderL1)
    .find(".material-icons")
    .text(arrow($(portfolioSite.cssFolderL1).find(".material-icons").text()));
  $(portfolioSite.cssFolderL1).find(".cssFo")[0].classList.toggle("open");
});
portfolioSite.jsFolderL1.addEventListener("click", () => {
  $(portfolioSite.jsFolderL1).next().toggle();
  $(portfolioSite.jsFolderL1)
    .find(".material-icons")
    .text(arrow($(portfolioSite.jsFolderL1).find(".material-icons").text()));
  $(portfolioSite.jsFolderL1).find(".jsFo")[0].classList.toggle("open");
});
portfolioSite.pagesFolderL1.addEventListener("click", () => {
  $(portfolioSite.pagesFolderL1).next().toggle();
  $(portfolioSite.pagesFolderL1)
    .find(".material-icons")
    .text(arrow($(portfolioSite.pagesFolderL1).find(".material-icons").text()));
  $(portfolioSite.pagesFolderL1).find(".pages")[0].classList.toggle("open");
});
portfolioSite.fontsCssL1.addEventListener("click", () => {
  vscodeNone();
  portfolioSite.fontsCssR1.style.display = "block";
});
portfolioSite.resetCssL1.addEventListener("click", () => {
  vscodeNone();
  portfolioSite.resetCssR1.style.display = "block";
});
portfolioSite.commonCssL1.addEventListener("click", () => {
  vscodeNone();
  portfolioSite.commonCssR1.style.display = "block";
});
portfolioSite.styleCssL1.addEventListener("click", () => {
  vscodeNone();
  portfolioSite.styleCssR1.style.display = "block";
});
portfolioSite.loadingJsL1.addEventListener("click", () => {
  vscodeNone();
  portfolioSite.loadingJsR1.style.display = "block";
});
portfolioSite.menuJsL1.addEventListener("click", () => {
  vscodeNone();
  portfolioSite.menuJsR1.style.display = "block";
});
portfolioSite.openJsL1.addEventListener("click", () => {
  vscodeNone();
  portfolioSite.openJsR1.style.display = "block";
});
portfolioSite.introJsL1.addEventListener("click", () => {
  vscodeNone();
  portfolioSite.introJsR1.style.display = "block";
});
portfolioSite.contJsL1.addEventListener("click", () => {
  vscodeNone();
  portfolioSite.contJsR1.style.display = "block";
});
portfolioSite.siteJsL1.addEventListener("click", () => {
  vscodeNone();
  portfolioSite.siteJsR1.style.display = "block";
});
portfolioSite.endingJsL1.addEventListener("click", () => {
  vscodeNone();
  portfolioSite.endingJsR1.style.display = "block";
});
portfolioSite.openHtmlL1.addEventListener("click", () => {
  vscodeNone();
  portfolioSite.openHtmlR1.style.display = "block";
});
portfolioSite.introHtmlL1.addEventListener("click", () => {
  vscodeNone();
  portfolioSite.introHtmlR1.style.display = "block";
});
portfolioSite.contHtmlL1.addEventListener("click", () => {
  vscodeNone();
  portfolioSite.contHtmlR1.style.display = "block";
});
portfolioSite.siteHtmlL1.addEventListener("click", () => {
  vscodeNone();
  portfolioSite.siteHtmlR1.style.display = "block";
});
portfolioSite.endingHtmlL1.addEventListener("click", () => {
  vscodeNone();
  portfolioSite.endingHtmlR1.style.display = "block";
});
