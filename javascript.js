function win() {
  clearInterval(timerID);
  toggleModal();
  const stats = document.querySelector(".stats");
  if (s % 60 < 10) {
      stats.textContent = "You won with: " + stars + " stars in " + movesCounter + " moves with time: " + m + ":0" + s % 60;
  } else {
      stats.textContent = "You won with: " + stars + " stars in " + movesCounter + " moves with time: " + m + ":" + s % 60;
  }
}




function updateMoveCounter() {
  movesCounter++;
  moves.textContent = "Moves: " + movesCounter;
  
  if (movesCounter === 6) {
      let star = document.querySelector("#star3");
      star.classList.toggle("fa-star");
      star.classList.add("fa-star-o");
      stars--;
  } else if (movesCounter === 12) {
      let star = document.querySelector("#star2");
      star.classList.toggle("fa-star");
      star.classList.add("fa-star-o");
      stars--;
  } else if (movesCounter === 15) {
      let star = document.querySelector("#star1");
      star.classList.toggle("fa-star");
      star.classList.add("fa-star-o");
      stars--;
  }
}

let s = 0;
let m = 0;
function timer() {
  ++s;
  m = Math.floor(s / 60);
  let timer = document.querySelector(".timer");
  if (s % 60 < 10) {
      timer.textContent = "Elapsed Time: " + m + ":0" + s % 60;
  } else {
      timer.textContent = "Elapsed Time: " + m + ":" + s % 60;
  }

}

let restart = document.querySelector(".restart");
restart.addEventListener("click", restartGame, false);
function restartGame() {
  clearInterval(timerID);
  movesCounter = 0;
  match = 0;
  s = 0;
  m = 0;
  isfirstClick = true;
  isRestart = true;
  const deck = document.querySelector('.deck');
  var elements = deck.getElementsByClassName("card");

  while (elements[0]) {
      elements[0].parentNode.removeChild(elements[0]);
  }
  shuffledCards = shuffle(cards);
  let timer = document.querySelector(".timer");
  timer.textContent = "Elapsed Time: 0:00";
  moves.textContent = "Moves: " + movesCounter;

  resetStars();
  initGame();
}

function resetStars() {
  stars = 3;
  let star = document.querySelector("#star3");
  star.classList.remove("fa-star");
  star.classList.remove("fa-star-o");
  star.classList.add("fa-star");

  star = document.querySelector("#star2");
  star.classList.remove("fa-star");
  star.classList.remove("fa-star-o");
  star.classList.add("fa-star");

  star = document.querySelector("#star1");
  star.classList.remove("fa-star");
  star.classList.remove("fa-star-o");
  star.classList.add("fa-star");
}

const newGameButton = document.querySelector(".new-game");
newGameButton.addEventListener("click", newGame);
function newGame() {
  toggleModal();
  restartGame();
}

initGame();