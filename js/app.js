let win = 0;
let lose = 0;
let tie = 0;

rockBtn = document.querySelector(".rock");
paperBtn = document.querySelector(".paper");
scissorsBtn = document.querySelector(".scissors");
resultTxt = document.querySelector(".result-txt");
playerScore = document.querySelector(".player-score");
movements = document.querySelector(".movements");
console.log("Hello World");

rockBtn.addEventListener("click", () => {
  playerMove("Sten");
});
paperBtn.addEventListener("click", () => {
  playerMove("Påse");
});
scissorsBtn.addEventListener("click", () => {
  playerMove("Sax");
});

function playerMove(move) {
  let computer = computerMove();
  if (move === computer) {
    movements.innerHTML = `Du valde: ${move} - Datorn fick: ${computer}`;
    resultTxt.innerHTML = "Det blev lika";
    tie++;
    playerScore.innerHTML = `Dina poäng: Vunnit: ${win} -  Förlorat: ${lose} - Jämna: ${tie}`;

    return;
  }
  if (move === "Sten" && computer === "Sax") {
    movements.innerHTML = `Du valde: ${move} - Datorn fick: ${computer}`;
    resultTxt.innerHTML = "Du VANN!";
    win++;
    playerScore.innerHTML = `Dina poäng: Vunnit: ${win} -  Förlorat: ${lose} - Jämna: ${tie}`;

    return;
  }
  if (move === "Påse" && computer === "Sten") {
    movements.innerHTML = `Du valde: ${move} - Datorn fick: ${computer}`;
    resultTxt.innerHTML = "Du VANN!";
    win++;
    playerScore.innerHTML = `Dina poäng: Vunnit: ${win} -  Förlorat: ${lose} - Jämna: ${tie}`;

    return;
  }
  if (move === "Sax" && computer === "Påse") {
    movements.innerHTML = `Du valde: ${move} - Datorn fick: ${computer}`;
    resultTxt.innerHTML = "Du VANN!";
    win++;
    playerScore.innerHTML = `Dina poäng: Vunnit: ${win} -  Förlorat: ${lose} - Jämna: ${tie}`;

    return;
  } else {
    movements.innerHTML = `Du valde: ${move} - Datorn fick: ${computer}`;
    resultTxt.innerHTML = "Du FÖRLORADE!";
    lose++;
    playerScore.innerHTML = `Dina poäng: Vunnit: ${win} -  Förlorat: ${lose} - Jämna: ${tie}`;
    // return;
  }
}

function computerMove() {
  let moves = ["Sten", "Påse", "Sax"];
  let random = Math.floor(Math.random() * 3);
  return moves[random];
}
