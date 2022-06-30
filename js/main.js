const mainSecs = document.querySelectorAll("section");
const secPosArr = [];

for (let section of mainSecs) {
  secPosArr.push(section.offsetTop);
}

window.addEventListener("scroll", () => {
  const proSec = document.querySelector("#project");

  if (this.scrollY > secPosArr[2] - 200) {
    proSec.querySelector(".cont1").classList.add("on");
  } else {
    proSec.querySelector(".cont1").classList.remove("on");
  }

  if (this.scrollY > secPosArr[2] + 100) {
    proSec.querySelector(".cont2").classList.add("on");
  } else {
    proSec.querySelector(".cont2").classList.remove("on");
  }
});
