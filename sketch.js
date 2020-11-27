var  thief, canvas, diamond,diamond1;
var guard1,guard2,guard3,guard4,guard5,guard6;
var edges;
var gameState,play, laser1, laser2;
var lose = 0;
var win = 0;
var lives = 3;
function setup(){
canvas = createCanvas(500,500);
    thief = createSprite(50,50,10,10);
    thief.shapeColor="red";
    

    
    diamond1 = createSprite(460,460,10,10);
    diamond1.shapeColor="black";
   
    diamond = createSprite(460,460,10,10);
    diamond.shapeColor="blue";
    

        laser1 = createSprite(100,400,100,5); 
        laser1.shapeColor="red";
        laser1.velocityX=6;
        
        laser2 = createSprite(300,200,100,5); 
        laser2.shapeColor="red";
        laser2.velocityX=-6;

    //Guards
    guard1 = createSprite(150,50,10,10);
    guard1.shapeColor="cyan";
   guard1.velocityY=10;
 



    guard2 = createSprite(250,460,10,10);
    guard2.shapeColor="cyan";
    guard2.velocityY=-10;

    guard3 = createSprite(350,50,10,10);
    guard3.shapeColor="cyan";
    guard3.velocityY=10;

    guard4 = createSprite(50,150,10,10);
    guard4.shapeColor="cyan";
    guard4.velocityX=10;

    guard5 = createSprite(460,250,10,10);
    guard5.shapeColor="cyan";
    guard5.velocityX=-10;

    guard6 = createSprite(50,350,10,10);
    guard6.shapeColor="cyan";
    guard6.velocityX=10;

}

function draw(){
background("black");

gameState=play;
edges = createEdgeSprites();

//Guards bounce of edges
guard1.bounceOff(edges);
guard2.bounceOff(edges);
guard3.bounceOff(edges);
guard4.bounceOff(edges);
guard5.bounceOff(edges);
guard6.bounceOff(edges);
laser1.bounceOff(edges);
laser2.bounceOff(edges);

thief.collide(edges);

if(thief.isTouching(guard1) || thief.isTouching(guard2) ||thief.isTouching(guard3)||thief.isTouching(guard4) ||thief.isTouching(guard5) ||thief.isTouching(guard6))
{
lives=lives-1;
thief.x=50;
thief.y=50;
}

if(thief.isTouching(diamond1)){
win=win+1;
}

if(win===1){
    guard1.destroy();
    guard2.destroy();
    guard3.destroy();
    guard4.destroy();
    guard5.destroy();
    guard6.destroy();
    laser1.destroy();
    laser2.destroy();
    thief.x=200;
    thief.y=200;
    stroke(30);
    fill("cyan");
    text("YOU WIN",200,180);
diamond.x=210;
diamond.y=200;
if(thief.x===200){

    thief.x=200;
    thief.y=200;
}
}
if(lives===0){

    guard1.destroy();
    guard2.destroy();
    guard3.destroy();
    guard4.destroy();
    guard5.destroy();
    guard6.destroy();
    
    laser1.destroy();
    laser2.destroy();


   thief.x=200;
    thief.y=200;
    stroke(30);
    fill("red");
    text("YOU LOSE",200,180);
}

if(thief.isTouching(laser1)||thief.isTouching(laser2)){
thief.x=50;
thief.y=50;
guard1.velocityY=14;
guard2.velocityY=-14;
guard3.velocityY=14;
guard4.velocityX=14;
guard5.velocityX=-14;
guard6.velocityX=14;

}
textSize(18);
fill("white");
text("Lives"+" "+"="+"" +lives,20,20);

//Controls
if(gameState===play){

    textSize(18);
    fill("white");
    text("Lives"+" "+"="+"" +lives,20,20);
    
    if(keyDown("up")){

    thief.y=thief.y-5;
}

if(keyDown("down")){

    thief.y=thief.y+5;
}

if(keyDown("left")){

    thief.x=thief.x-5;
}

if(keyDown("right")){

    thief.x=thief.x+5;
}}



drawSprites();




}