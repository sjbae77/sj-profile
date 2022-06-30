const mainSecs = document.querySelectorAll("section");
const secPosArr = [];

for (let section of mainSecs) {
  secPosArr.push(section.offsetTop);
}

window.addEventListener("scroll", () => {
  const aboutSec = document.querySelector("#about");
  const proSec = document.querySelector("#project");

  if (this.scrollY > secPosArr[1] - 400) {
    aboutSec.querySelector(".contact-wrap").classList.add("on");
  } else {
    aboutSec.querySelector(".contact-wrap").classList.remove("on");
  }

  if (this.scrollY > secPosArr[1] - 200) {
    aboutSec.querySelector(".info-wrap").classList.add("on");
  } else {
    aboutSec.querySelector(".info-wrap").classList.remove("on");
  }

  if (this.scrollY > secPosArr[2] - 200) {
    proSec.querySelector(".cont1").classList.add("on");
  } else {
    proSec.querySelector(".cont1").classList.remove("on");
  }

  if (this.scrollY > secPosArr[2] + 200) {
    proSec.querySelector(".cont2").classList.add("on");
  } else {
    proSec.querySelector(".cont2").classList.remove("on");
  }
});
