var database;

var playerCount, gameState = 0;

var player,game,form;
var car1,car2,car3,car4,cars;
var allplayers


function setup(){
  database = firebase.database();

  createCanvas(windowWidth-50,windowHeight-50);

  game = new Game();//to create the object of the game class
  game.getState(); //to get the gameState from the DB at the beginnning of the game
  game.start();


}

function draw(){
  if(playerCount===4){
    game.updateState(1);
    
  }
  if(gameState===1){
 
    clear();
    game.play();
   
  }
    
  
}

