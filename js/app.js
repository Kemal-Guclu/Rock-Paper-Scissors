let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

//använd shorthand eller || ovan
/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
};
*/

rockBtn = document.querySelector(".rock");
paperBtn = document.querySelector(".paper");
scissorsBtn = document.querySelector(".scissors");
resetBtn = document.querySelector(".reset");
resultTxt = document.querySelector(".result-txt");
playerScore = document.querySelector(".player-score");
movements = document.querySelector(".movements");

rockBtn.addEventListener("click", () => {
  playerMove("Sten");
});
paperBtn.addEventListener("click", () => {
  playerMove("Påse");
});
scissorsBtn.addEventListener("click", () => {
  playerMove("Sax");
});
resetBtn.addEventListener("click", resetGame);

function playerMove(move) {
  let computer = computerMove();

  if (
    (move === "Sten" && computer === "Sax") ||
    (move === "Påse" && computer === "Sten") ||
    (move === "Sax" && computer === "Påse")
  ) {
    resultTxt.innerHTML = `<span class="move">Du VANN!</span>`;
    score.wins += 1;
  } else if (move === computer) {
    resultTxt.innerHTML = `<span class="move">Det blev lika</span>`;
    score.ties += 1;
  } else {
    resultTxt.innerHTML = `<span class="move">Du FÖRLORADE!</span>`;
    score.losses += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));
  showResult(move, computer);
}

function computerMove() {
  let moves = ["Sten", "Påse", "Sax"];
  let random = Math.floor(Math.random() * 3);
  return moves[random];
}
function showResult(param1, param2) {
  movements.innerHTML = `Du valde: <span class="move">${param1}</span> - Datorn fick: <span class="move">${param2}</span>`;
  playerScore.innerHTML = `Du har: Vunnit: <span class="score">${score.wins}</span> -  Förlorat: <span class="score">${score.losses}</span> - Jämn: <span class="score">${score.ties}</span>`;
}

function resetGame() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  resultTxt.innerHTML = "";
  movements.innerHTML = "";
  playerScore.innerHTML = "";
}
