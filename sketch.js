const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var pig1, pig2, log1,log2,log3,log4,bird,box1,box2,box3,box4,box5;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,370,50,50);
    box2 = new Box(900,370,50,50);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(800,370);
    bird = new Bird(100,100);
    log1 = new Log(800,350,300,PI/2);

    pig2 = new Pig(800,280);
    log2 = new Log(800,275,300,PI/2);
    box3 = new Box(700,300,50,50);
    box4 = new Box(900,300,50,50);

    box5 = new Box(800,250,50,50);
    log3 = new Log(750,250,150,PI/6);
    log4 = new Log(850,250,150,-PI/6);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    bird.display();
    log1.display();

    pig2.display();
    log2.display();
    box3.display();
    box4.display();

    box5.display();
    log3.display();
    log4.display();
}