let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false

boxes.forEach(e => {
  e.innerHTML = ""
  e.addEventListener("click", () => {
    if (!isGameOver && e.innerHTML === "") {
      e.innerHTML = turn;
      cheakWin();
      checkDraw();
      changeTurn();
    }
  })
})

function changeTurn() {
  if (turn === "X") {
    turn = "O";
    document.querySelector(".bg").style.left = "85px";
  } else {
    turn = "X";
    document.querySelector(".bg").style.left = "0px";
  }
}

function cheakWin() {
  let winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]
  for (let i = 0; i < winConditions.length; i++) {
    let v0 = boxes[winConditions[i][0]].innerHTML;
    let v1 = boxes[winConditions[i][1]].innerHTML;
    let v2 = boxes[winConditions[i][2]].innerHTML;

    if (v0 !== "" && v0 === v1 && v0 === v2) {
      isGameOver = true;
      document.querySelector("#results").innerHTML = turn + " Win🏆";
      document.querySelector("#play-again").style.display = "inline";

      for (let j = 0; j < 3; j++) {
        boxes[winConditions[i][j]].style.backgroundColor = "rgb(23, 152, 23";
        boxes[winConditions[i][j]].style.color = "#000"
      }
    }
  }
}

function checkDraw() {
  if (!isGameOver) {
    let isDraw = true;
    boxes.forEach(e => {
      if (e.innerHTML === "") isDraw = false;

    })

    if (isDraw) {
      isGameOver = true;
      document.querySelector("#results").innerHTML = " Draw😊";
      document.querySelector("#play-again").style.display = "inline";
    }
  }
}
document.querySelector("#play-again").addEventListener("click", () => {
  isGameOver = false;
  turn = "X";
  document.querySelector(".bg").style.left = "0";
  document.querySelector("#results").innerHTML = ""; // Corrected to #results
  document.querySelector("#play-again").style.display = "none";
  boxes.forEach(e => {
    e.innerHTML = "";
    e.style.removeProperty("background-color");
    e.style.color = "#fff";
  });
});