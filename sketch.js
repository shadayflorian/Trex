var trex ,trex_running;
var ground, invisibleGround, groundImage;


function preload(){
 
}

function setup(){
  createCanvas(600,200);
  
  //create a trex sprite
  trex = createSprite(50, 160, 20, 50);
  
 //crear el sprite del suelo
 ground = createSprite(200, 180, 400, 20);

}

function draw(){
  background(220);
  

  drawSprites();
}
