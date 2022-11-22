import "./scss/main.scss";
// import * as bootstrap from "bootstrap";
// import Dropdown from "bootstrap/js/dist/dropdown";
// import Collapse from "bootstrap/js/dist/collapse";
// import Tab from "bootstrap/js/dist/tab";

const link = document.querySelectorAll(".nav-link");
const trnsltBtn = document.getElementById("translate-in");

const trnsltText = document.getElementById("label");
const infBtn = document.getElementById("infinite-btn");
const infBox = document.getElementById("infinite-box");
const rttBox = document.getElementById("rotateBox");

link.forEach((link) => {
  link.addEventListener("click", () => {
    let varmi = link.classList.contains("active");
    if (varmi) {
      link.classList.remove("active");
    } else {
      link.classList.add("active");
    }
  });
  link.classList.add("text-white");
});

trnsltBtn.addEventListener("click", () => {
  let control = trnsltText.classList.contains("d-none");
  if (control) {
    trnsltText.classList.remove("d-none");
    trnsltText.classList.add("animete-ltr-in");
    // label.classList.remove("animete-ltr-out");
    trnsltBtn.classList.add("d-none");
    // trnsltBtn2.classList.remove("d-none");
  }
});
// trnsltBtn2.addEventListener("click", () => {
//   trnsltText.classList.remove("animete-ltr-in");
//   trnsltText.classList.add("animete-ltr-out");
//   trnsltBtn2.classList.add("d-none");
//   checkbox.classList.remove("d-none");
//   setInterval(() => {
//     trnsltText.classList.add("d-none");
//   }, 3000);
// });

infBtn.addEventListener("click", () => {
  let control = infBox.classList.contains("d-none");
  if (control) {
    infBtn.classList.add("d-none");
    infBox.classList.remove("d-none");
  }
});

// var item = document.getElementById("button");
// item.addEventListener("mouseover", func, false);
// item.addEventListener("mouseout", func1, false);

// function func()
// {  // not needed since item is already global,
//    // I am assuming this is here just because it's sample code?
//    // var item = document.getElementById("button");
//    item.setAttribute("style", "background-color:blue;")
// }

// function func1()
// {
//    item.setAttribute("style", "background-color:green;")
// }

rttBox.addEventListener("mouseover", func, false);
rttBox.addEventListener("mouseout", func1, false);

function func() {
  rttBox.classList.add("rotate-z-180");
  rttBox.classList.remove("rotate-y-90");
}

function func1() {
  rttBox.classList.remove("rotate-z-180");
  rttBox.classList.add("rotate-y-90");
}
