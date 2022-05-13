"use strict";
// navSticky

const mainContent = document.querySelector(".navSticky");
const navBar = document.querySelector(".mySticky");
const navheight = navBar.getBoundingClientRect().height;
const waypoint = new Waypoint({
  element: mainContent,
  handler: function (direction) {
    if (direction === "down") {
      navBar.classList.toggle("navOnAnimate");
      mainContent.style.marginTop = navheight + "px";
    }
    if (direction === "up") {
      navBar.classList.toggle("navOnAnimate");
      mainContent.style.marginTop = 0 + "px";
    }
  },
});
