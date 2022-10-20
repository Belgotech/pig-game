// var dice = math.floor(math.random() * 6) + 1;
// var dice = math.random() * 6;

document.querySelector(".btn-roll").addEventListener("click", function () {
  diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-"  + ".png";
});
