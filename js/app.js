"use strict";
//scroll reveal
const slideDownHeader = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  interval: 200,
  cleanup: true,
};

ScrollReveal().reveal(".headerContent", slideDownHeader);

const slideDownMain = {
  distance: "70px",
  origin: "bottom",
  duration: 1000,
  interval: 300,
  cleanup: true,
  delay: 100,
};
ScrollReveal().reveal(".mainContent", slideDownMain);
