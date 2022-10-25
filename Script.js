var scores, roundScore, activePlayer, dice, gamePlaying;

init();
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    // Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    // Generating Result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    //Upadting round score IF the rolled number is not 1
    if (dice !== 1) {
      // Add Score
      roundScore += dice;
      document.querySelector("#current-" + activePlayer).textContent =
        roundScore;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // document.querySelector(".player-1-panel").classList.remove(".active")
  // document.querySelector(".player-1-panel").classList.add(".active")

  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    //add CURRENT scores to GLOBAL score
    scores[activePlayer] += roundScore;
    //update the UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];
    //check if player won
    if (scores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent = "winner";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      //nextPlayer
      nextPlayer();
    }
  }
});

document.querySelector(".btn-new").addEventListener("click", init);
function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}



// document.querySelector(".current-" + activePlayer).textContent = dice
// document.querySelector(".current-" + activePlayer).innerHTML = "<em>" + dice + "</em>"
