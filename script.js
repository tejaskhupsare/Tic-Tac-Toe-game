let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let container = document.querySelector(".container");


let turn = true; //playerX , playerO
let count = 0; //to track draw

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],

  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],

  [2, 1, 0],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turn = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  container.classList.remove("hide-game");

  resetBtn.classList.remove("adj-btn"); //n



  count = 0; //to reset count to start count
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("clicked");
    if (turn) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    } 
    
  });
});

const gameDraw = () => {
  msg.innerText = `game was a Draw`;
  msgContainer.classList.remove("hide");
  container.classList.add("hide-game");

  resetBtn.classList.add("adj-btn"); //n


  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `winner is ${winner}`;
  msgContainer.classList.remove("hide");
  container.classList.add("hide-game");

  resetBtn.classList.add("adj-btn"); //n


  disableBoxes();
};


const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);

    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );

    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        // console.log("winner", pos1val);
        showWinner(pos1val);
      }
    }
  }
};

// newGameBtn.addEventListener("click", resetGame);

resetBtn.addEventListener("click", resetGame);
