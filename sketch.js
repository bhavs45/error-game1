var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car4,car1,car2,car3;
var allCars;
var car11,car22,car33,car44
var trackk 
var coin
var coinn

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
function preload(){
car11 = loadImage("images/car1.png")
car22 = loadImage("images/car2.png")
car33 = loadImage("images/car3.png")
car44 = loadImage("images/car4.png")
trackk = loadImage("images/track.jpg")
coin  = loadImage("images/coin.png")



}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2)
game.end()
}
