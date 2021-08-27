const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, dragon, dragon1, dragon2, dragon3;
var backgroundImg,platform;
var cannonball, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    backgroundImg = loadImage("castle.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Wall(500,320,70,70);
    box2 = new Wall(720,320,70,70);
    dragon = new Dragon(800,370);
    dragon2 = new Dragon(900, 370);
    log1 = new Block(600,260,300, PI/2);
    log2 = new Block(600,100,300,PI/2);
    log4 = new Block(890, 180, 300, PI/2); 
    box7 = new Wall(890,320,70,70);
    box8 = new Wall(890,240,70,70);

    box3 = new Wall(490,240,70,70);
    box4 = new Wall(710,240,70,70);
    log3 =  new Block(600,180,300, PI/2);
    box5 = new Wall(490,160,70,70);
    box6 = new Wall(710,160,70,70);

    cannonball = new CannonBall(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(cannonball.body,{x:200, y:50});

}

function draw(){
    background(backgroundImg);
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    dragon.display();
    dragon.score();
    log1.display();
    log2.display();

    box3.display();
    box4.display();
    log3.display();
    log4.display();

    dragon2.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();


    cannonball.display();
    platform.display();
    slingshot.display();    

}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(cannonball.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        cannonball.trajectory = [];
        Matter.Body.setPosition(cannonball.body,{x:200, y:50});
       slingshot.attach(cannonball.body);
    }
}