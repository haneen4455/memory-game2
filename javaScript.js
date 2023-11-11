var great = new Audio("sounds/great.m4a");
var fail = new Audio("sounds/fail.m4a");




function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
return array;
}

const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
      toggleModal();
  }
}

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

let cardTest = [];
let cards = ["star", "star", "cube", "cube", "circle", "circle"];

let shuffledCards = shuffle(cards);

function createCards() {
      for (let card of shuffledCards) {
          const li = document.createElement("LI");
          li.classList.toggle("card");
          const i = document.createElement("i");
          i.classList.toggle("fa");
          if (card === "plane") {
              i.classList.toggle("fa-paper-plane-o");
          } else {
              i.classList.toggle("fa-" + card);
          }
          const deck = document.querySelector('.deck');
          li.appendChild(i);
          deck.appendChild(li);
    
      }
    }
    
    const ul = document.querySelector('.deck');
    let moves = document.querySelector(".moves");
    let movesCounter = 0;
    let stars = 3;
    let match = 0;
    let isfirstClick = true;
    let timerID;
    let isRestart = false;
    
    function initGame() {
          createCards();
          const card = document.querySelectorAll('.card');
          for (let i = 0; i < card.length; i++) {
              card[i].addEventListener("click", function (event) {
                  if (card[i] !== event.target) return;
                  if (event.target.classList.contains("show")) return;
                  if (isfirstClick) {
                      timerID = setInterval(timer, 1000);
                      isfirstClick = false;
                  }
                  showCard(event.target);
                  setTimeout(addCard, 550, shuffledCards[i], event.target, cardTest, i);
              }, false);
          }
        }
        
        function showCard(card) {
          card.classList.add('show');
        
        }
        
        function addCard(card, cardHTML, testList, pos) {
          if (isRestart) {
              testList.length = 0;
              isRestart = false;
          }
        testList.push(card);
          testList.push(cardHTML)
          testList.push(pos);
          if (testList.length === 6) {
              updateMoveCounter();
              testCards(testList[0], testList[1], testList[2], testList[3], testList[4], testList[5]);
              testList.length = 0;
          }
        }
        
        function testCards(card1, html1, x1, card2, html2, x2) {
          if (card1 === card2 && x1 != x2) {
              cardsMatch(html1, html2);
          great.play();
          } else {
              cardsDontMatch(html1, html2);
           fail.play();  
          }
        }
        
        function cardsMatch(card1, card2) {
          card1.classList.add('match');
          card2.classList.add('match');
          match++;
        if (match === 3) {
                  win();
              }
            }
            
            function cardsDontMatch(card1, card2) {
              card1.classList.toggle('no-match');
              card2.classList.toggle('no-match');
              
              setTimeout(function () {
                  card1.classList.toggle('no-match');
                  card2.classList.toggle('no-match');
                  card1.classList.toggle('show');
                  card2.classList.toggle('show');
            
              }, 300);
            }     