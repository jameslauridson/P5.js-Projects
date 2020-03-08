var x=9;
var y=7;
var xspeed=4;
var yspeed=5;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100,100, 0);
  move();
  bounce();
  display();
}

function move()
{
  x=x+xspeed;
  y=y+yspeed;
}

function bounce()
{
  if ((x>width) || (x<0)) 
  {
    xspeed=xspeed*-1;
  }
 if  ((y> height) || (y<0))
  { 
    yspeed=yspeed*-1;
}
}

function display()
{
  stroke(0);
  fill(200, 0, 0);
  ellipse(x,y, 10,10);
}