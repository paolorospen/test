const pickup = document.querySelector(".pickup__img");
const pickupWrap = document.querySelector(".pickup__img--wrap");
const front = document.querySelector(".front");
const back = document.querySelector(".back");

pickupWrap.addEventListener("click", () => {
  pickup.classList.toggle("imgBack");
});

back.addEventListener("click", () => {
  pickup.classList.add("imgBack");
});

front.addEventListener("click", () => {
  pickup.classList.remove("imgBack");
});
