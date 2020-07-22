var numSquares = 6;
var colors=generateColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var message=document.querySelector("#message");
colorDisplay.textContent=pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares=3;
  colors=generateColor(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  
  for(var i = 0; i < squares.length; i++) {
    if(colors[i])
    squares[i].style.background = colors[i];
  else
    squares[i].style.display="none";
  }

  });

hardBtn.addEventListener("click", function() {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares=6;
  colors=generateColor(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display="block";
  }
  });

resetButton.addEventListener("click", function() {
  //generate all new colors
  colors = generateColor(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
    message.textContent="";
    if(resetButton.textContent==="Play Again?")
      resetButton.textContent="New Colors";
});

for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
      if(this.style.backgroundColor===pickedColor){
      	message.textContent="Correct!";
      	changeColors(this.style.backgroundColor);
        h1.style.backgroundColor=this.style.backgroundColor;
        resetButton.textContent="Play Again?"
      }
      else{
      	message.textContent="Try Again";
      	this.style.backgroundColor="#232323";
        }
	});
}
function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}
function generateColor(num){
  var arr=[];
  for(var i=0;i<num;i++){
      arr.push(no());
  }
  return arr;
}
function no(){
	var r=(Math.floor(Math.random()*255+1));
  var g=(Math.floor(Math.random()*255+1));
  var b=(Math.floor(Math.random()*255+1));
  return "rgb("+r+","+" "+g+","+" "+b+")";
}
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
