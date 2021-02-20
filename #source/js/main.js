let ibg = document.querySelector(".ibg");
let img = ibg.querySelector("img").getAttribute("src");
ibg.setAttribute("style", "background-image:url(" + img + ")");
let mobile = document.querySelector(".mobile");
let btn = document.querySelector(".btn-burger");
let span = btn.querySelectorAll("span");

let flug = true;
btn.onclick = () => {
  for (s of span) {
    flug ? s.classList.add("active") : s.classList.remove("active");
  }
  flug ? (mobile.style.display = "block") : (mobile.style.display = "none");
  flug = !flug;
};

let dates = document.querySelector(".header__sales span");

let date = new Date();
let monday = date;
if (date.getDay()) {
  monday.setDate(date.getDate() + 8 - date.getDay());
} else {
  monday.setDate(date.getDate() + 1);
}
let d = String(monday.getDate()).padStart(2, "0");
let m = String(monday.getMonth() + 1).padStart(2, "0");
let y = monday.getFullYear();
dates.innerHTML = d + "." + m + "." + y;
