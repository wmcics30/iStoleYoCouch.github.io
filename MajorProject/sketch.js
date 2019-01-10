// Major Project
// Brett Sane
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let picture;
let x, y;
let state;
let isFilledWithBlack;
let cellSize;
let previousPosx;
let previousPosy;
let a, b;
let boardWidth = 800;
let e, q;


let board = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 9, 0, 9, 0, 9, 0, 9],
  [9, 0, 9, 0, 9, 0, 9, 0],
  [0, 9, 0, 9, 0, 9, 0, 9],
  [9, 0, 9, 0, 9, 0, 9, 0],
  [0, 2, 0, 2, 0, 2, 0, 2],
  [2, 0, 2, 0, 2, 0, 2, 0],
];



////////////////////////////////////////////////////////////////////////////////

function preload() {
  picture = loadImage("assets/checkerboard.png");
}


////////////////////////////////////////////////////////////////////////////////


function setup() {
  createCanvas(1200, 800);
  state = 1;
  cellSize = boardWidth/8;
  isFilledWithBlack = false;

}


////////////////////////////////////////////////////////////////////////////////

function draw() {
  checkState();
  isThereATwoOnTheBoard();
}

////////////////////////////////////////////////////////////////////////////////

function checkState(){
  if (state === 1){
    mainMenu();
  }
  if (state === 2 || state === 3){
    displayGrid();
    // redPeices();
    // blackPeices();
    showPeices();
  }



  if (state === 4){
    displayGrid();
    showPeices();
    console.log("state 4");
    for (let i = 0; i < 8; i ++){
      for (let j = 0; j < 8; j ++){
        if (board[i][j] === 3){
          board[i][j] = 9;
          state = 5;
        }
      }
    }
  }



  if (state === 5){
    displayGrid();
    showPeices();
    console.log("state 5");
  }



  if (state === 7){
    displayGrid();
    showPeices();
    console.log("state 7");
    for (let i = 0; i < 8; i ++){
      for (let j = 0; j < 8; j ++){
        if (board[i][j] === 4){
          board[i][j] = 9;
          state = 2;
        }
      }
    }
  }
  if (state === 22){
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (board[y][x] === "m"){
          board[y][x] = 9;
        }
        state = 4;
      }
    }
  }
  if(state !== 1){
    if (isThereATwoOnTheBoard() === false){
      fill("red");
      rect(0, 0, width, height);

      fill(0);
      textSize(100);
      text("Red Wins!", 100, 200);
    }
    if (isThereAOneOnTheBoard() === false){
      fill("gray");
      rect(0, 0, width, height);


      fill(0);
      textSize(100);
      text("Black Wins!", 100, 200);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////

function isThereATwoOnTheBoard(){
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (board[y][x] === 2 || board[y][x] === 4){
        return true;
      }
    }
  }
  return false;
}



function isThereAOneOnTheBoard(){
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (board[y][x] === 1 || board[y][x] === 3){
        return true;
      }
    }
  }
  return false;
}
////////////////////////////////////////////////////////////////////////////////

function showPeices() {
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {

      //red peices

      if (board[y][x] === 1) {
        fill(0);
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(255, 0, 0);
        ellipse(x*cellSize+50, y*cellSize+50, cellSize - 1, cellSize - 1);
      }

      if (board[y][x] === "rk"){
        fill("yellow");
        ellipse(x*cellSize+50, y*cellSize+50, cellSize - 1, cellSize - 1);
      }





      if (board[y][x] === 3 && state === 2) {
        fill(0, 255, 0);
        ellipse(x*cellSize+50, y*cellSize+50, cellSize - 1, cellSize - 1);



        if (y + 2 < 8) {  // only check this if there is space on the board...

          if (board[y+1][x+1] === 2){
            if (board[y+2][x+2] === 9){
              board[y+2][x+2] = "k1";          // k is for red piece to jump black piece
            }
          }
          if (board[y+1][x-1] === 2){
            if (board[y+2][x-2] === 9){
              board[y+2][x-2] = "k2";
            }
          }
        }

        if (board[y+1][a+1] !== 9 && board[y+1][a-1] !== 9){
          state = 3;
        }

        if (board[y+1][x+1] === 9){
          board[y+1][x+1] = "m";
          if (y === 7){
            board[y][x] = "rk";
          }        //m is for red moving
        }
        if (board[y+1][x-1] === 9){
          board[y+1][x-1] = "m";

        }
        state = 3;
      }






      //black spaces

      if (board[y][x] === 9){
        fill(0);
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if (state !== 6){
        if (board[y][x] === "t"){
          board[y][x] = 9;
        }
      }
      if (state !== 3){
        if (board[y][x] === "k1" || board[y][x] === "k2"){
          board[y][x] = 9;
        }
      }
      if (state !== 6){
        if (board[y][x] === "l"){
          board[y][x] = 9;
        }
      }






      //black peices

      if (board[y][x] === 2){
        fill(75);
        ellipse(x*cellSize + 50, y*cellSize + 50, cellSize - 1, cellSize - 1);
      }


      if (board[y][x] === 4 && state === 5){
        fill(0, 0, 255);
        ellipse(x*cellSize+50, y*cellSize+50, cellSize - 1, cellSize - 1);



        if (y - 2 >= 0) {
          if (board[y-1][x-1] === 1){
            if (board[y-2][x-2] === 9){
              board[y-2][x-2] = "l1";          //l is for black to jump red
            }
          }
          if (board[y-1][x+1] === 1){
            if (board[y-2][x+2] === 9){
              board[y-2][x+2] = "l2";
            }
          }
        }


        if (board[y-1][x+1] === 9){
          board[y-1][x+1] = "t";        //t is black movement
        }
        if ( board[y-1][x-1] === 9){
          board[y-1][x-1] = "t";
        }
        state = 6;
      }
    }
  }
}

////////////////////////////////////////////////////////////////////////////////

function mainMenu(){
  x = 800;
  y = 800;
  fill(255, 125, 125);       //background
  rect(0, 0, x, y);

  fill(0);
  textSize(125);              //Title
  text("Checkers", 100, 100);


  image(picture, 350, 500);   //checkers PNG




  fill(0);
  rect(300, 350, 150, 100);   //button

  fill(255);
  textSize(50);                 //play text
  text("Play!", 320, 420);

  if (mouseX >= 300 && mouseX <= 500 && mouseY >= 350 && mouseY <= 450){
    fill(0, 255, 0);
    rect(300, 350, 150, 100);       //changes the color of button


    fill(255);
    textSize(50);
    text("Play!", 320, 420);      //play text


  }

}


////////////////////////////////////////////////////////////////////////////////

function displayGrid(){
  if (state === 2){
    for (let i = 0; i < 8; i++){
      for (let j = 0; j < 8; j++){    //draws the checker board
        if (isFilledWithBlack){
          fill(0);
        }
        else{
          fill(255);
        }
        rect(i*800/8, j*height/8, 800/8, height/8);
        isFilledWithBlack = !isFilledWithBlack;
      }
      isFilledWithBlack = !isFilledWithBlack;
    }
  }
  sideBar();
}


////////////////////////////////////////////////////////////////////////////////

function sideBar(){
  fill(120);
  rect(800, 0, 400, 800);

  fill(0);
  textSize(15);
  text("Player One", 865, 50);
  text("Player Two", 960, 50);


  //Player turn

  fill(255);
  ellipse(900, 100, 75, 75);
  ellipse(1000, 100, 75, 75);


  if (state === 2 || state === 3){
    fill("green");
    ellipse(900, 100, 75, 75);
  }
  if (state === 4 || state === 5){
    fill("green");
    ellipse(1000, 100, 75, 75);
  }
}

////////////////////////////////////////////////////////////////////////////////

function mousePressed(){
  a = floor(mouseX / cellSize);
  b = floor(mouseY / cellSize);


  if (state === 1){
    console.log("state is 1");
    if (mouseX >= 300 && mouseX <= 500 && mouseY >= 350 && mouseY <= 450){    // if you click the button, the state changes
      state = 2;
    }
  }

  if (state === 2){
    console.log("state is 2");
    if (board[b][a] === 1 ){//=== "e"){
      board[b][a] = 3;

    }
  }

  else if (state === 3){
    console.log("state is 3");

    if (board[b][a] === 3){
      board[b][a] = 1;
      state = 2;
    }


    if (board[b][a] === "m"){
      console.log("was a 0");   //move red piece
      board[b][a] = 1;
      state = 22;
    }
    if (board[b][a] === "k2"){
      board[b][a] = 1;
      if (board[b-1][a+1] === 2){
        board[b-1][a+1] = 9;
      }

      state = 22;
    }
    if (board[b][a] === "k1"){
      board[b][a] = 1;
      if (board[b-1][a-1] === 2){
        board[b-1][a-1] = 9;
      }





      state = 22;
    }
  }



  else if (state === 5){

    if (board[b][a] === 2 ){
      board[b][a] = 4;
    }
  }


  else if (state === 6){
    a = floor(mouseX / cellSize);
    b = floor(mouseY / cellSize);
    console.log("state is 6");      //move black piece

    if (board[b][a] === 4){
      board[b][a] = 2;
      state = 5;
    }

    if (board[b][a] === 0){
      state = 6;
    }



    if (board[b][a] === "t"){
      console.log("was a 0");
      board[b][a] = 2;
      state = 7;
    }


    if (board[b][a] === "l1"){
      board[b][a] = 2;
      if (board[b+1][a+1] === 1){
        board[b+1][a+1] = 9;
      }
      state = 7;
    }
    if (board[b][a] === "l2"){
      board[b][a] = 2;
      if (board[b+1][a-1] === 1){
        board[b+1][a-1] = 9;
      }
      state = 7;
    }
  }
}
