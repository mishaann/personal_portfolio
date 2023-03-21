"use strict";
const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

const opentab = function (tabName) {
  tabLinks.forEach((tabLink) => tabLink.classList.remove("active-link"));
  tabContents.forEach((tabCont) => tabCont.classList.remove("active-tab"));
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
};
const sideMenu = document.querySelector("#sidemenu");

const openemenu = function () {
  sideMenu.style.right = "0";
};
const closemenu = function () {
  sideMenu.style.right = " -200px";
};

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzfnDJ2xChVm3Qzzum14JUqs_pCEgGr8Jmw6Vy6EjAB7UozOHNFXy3kN8Y0Xz_ve3iKMg/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
