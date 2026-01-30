function moveRandom(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const btn = document.querySelector("#move-random");

btn.addEventListener("mouseenter", function(e) {
  moveRandom(e.target);
})
