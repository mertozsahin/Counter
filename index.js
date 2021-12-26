let count = 0;
const number = document.querySelector(".value");
const btnd = document.querySelector("button.decrease");
const btnr = document.querySelector("button.reset");
const btni = document.querySelector("button.increase");
number.innerHTML = count;

var down = btnd.addEventListener("click", function () {
  count--;
  number.innerHTML = count;
  if (count < 0) {
    number.style.color = "red";
  } else if (count > 0) {
    number.style.color = "green";
  } else {
    number.style.color = "grey";
  }
});
var reset = btnr.addEventListener("click", function () {
  count = 0;
  number.innerHTML = count;
  if (count === 0) {
    number.style.color = "grey";
  }
});
var up = btni.addEventListener("click", function () {
  count++;

  number.innerHTML = count;
  if (count > 0) {
    number.style.color = "green";
  } else if (count < 0) {
    number.style.color = "red";
  } else {
    number.style.color = "grey";
  }
});
