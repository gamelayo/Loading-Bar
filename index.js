const counterEl = document.querySelector(".counter");
const LoadingBarEl = document.querySelector(".loading-bar-front");

let idx = 0;

updateNum();
function updateNum() {
  counterEl.innerText = idx + "%";
  LoadingBarEl.style.width = idx + "%";
  idx++;
  if (idx < 101) {
    setTimeout(updateNum, 10);
  }
}
