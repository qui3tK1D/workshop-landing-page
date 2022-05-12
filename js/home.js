"use strict";
const btnRotate = document.querySelector(".rotateBtn");

const rotate = function () {
  btnRotate.querySelector(".fa-solid").style.transition = "1s";
  btnRotate.querySelector(".fa-solid").style.transform = `rotate(${this}deg)`;
};

btnRotate.addEventListener("mouseover", rotate.bind("360"));
btnRotate.addEventListener("mouseout", rotate.bind("-360"));

const arrowMove = document.querySelectorAll(".arrowMove");
arrowMove.forEach((cur) => {
  cur.addEventListener("mouseover", function () {
    cur.querySelector(".fa-arrow-right").style.transition = "1s";
    cur.querySelector(".fa-arrow-right").style.marginLeft = "6px";
  });
  cur.addEventListener("mouseout", function () {
    cur.querySelector(".fa-arrow-right").style.marginLeft = "0";
  });
});
