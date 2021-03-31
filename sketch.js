const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var divisions = [];
var divisionsHeight=300;
var particles = [];
var plinkos = [];
function preload()
{

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(400,690,800,20);

if (var i = 0; i<width;i=i+80;) {
divisions.push(new Division(i,height-divisionsHeight,2,10,divisionsHeight))
}

function draw() {
  background(255,255,255);  
  drawSprites();
}