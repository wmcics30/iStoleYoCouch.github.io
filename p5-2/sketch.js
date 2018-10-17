// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state;
let circleX;
let circleY;
let counterNumber = 0;




function setup() {
  createCanvas(700, 700);
  state = 1;
}

function draw() {
  checkState();

}


function checkState(){
  if (state === 1){
    ellipse(width/2, height/2, 300, 300);
  }
  if (state === 2){
    fill(100, 50, 0);
    ellipse(width/2, height/2, 250, 250);
    state = 3;
  }
  if (state === 3){
    counter();
  }
}

function counter(){
  fill(255);
  rect(700/2 - 75, 75, 200, 100);
  fill(0);
  textSize(100);
  if (counterNumber <= 30){
    counterNumber = counterNumber + 1;
  }
  if (counterNumber >= 30){
    counterNumber = counterNumber + 5;
  }
  text(counterNumber, 700/2, 150);
  state = 1;

}



function mousePressed(){
  circleX = 300;
  circleY = 300;
  if (mouseX >= circleX - 150 && mouseX <= circleX + 150 && mouseY >= circleY - 150 && mouseY <= circleY + 150){
    state = 2;
  }
}
