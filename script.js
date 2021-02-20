var numSquares = 6;
var colors = generateColor(numSquares);
var squares = document.querySelectorAll(".square");
var winColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var jumbo = document.querySelector(".jumbotron");
var newColors = document.getElementById("newColors");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

// easy button shows 3 squares
easy.addEventListener("click", function () {
  easy.classList.add("active");
  hard.classList.remove("active");
  numSquares = 3;
  colors = generateColor(numSquares);
  winColor = pickColor();
  colorDisplay.textContent = pickedColor(winColor);
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

// hard button shows 6 squares
hard.addEventListener("click", function () {
  easy.classList.remove("active");
  hard.classList.add("active");
  numSquares = 6;
  colors = generateColor(numSquares);
  winColor = pickColor();
  colorDisplay.textContent = pickedColor(winColor);
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

colorDisplay.textContent = pickedColor(winColor);
newColors.addEventListener("click", function () {
  colors = generateColor(numSquares);
  winColor = pickColor();
  colorDisplay.textContent = pickedColor(winColor);
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
});
this.textContent = "New colors";

//restarting game logic
for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor == winColor) {
      alert("correct");
      changeColors(winColor);
      var header = document.getElementById("h1");
      header.style.background = winColor;
      newColors.textContent = "Play again ?";

      message.textContent = "";
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try again";
    }
  });

  function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = color;
    }
  }
}
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function pickedColor(color) {
  return color.substring(0, 3).toUpperCase() + color.substring(3);
}

function generateColor(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(colorChoice());
  }
  return arr;
}
//creating random colors
function colorChoice() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
