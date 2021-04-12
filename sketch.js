var hr,mim,sec;
var hrangle,secangle,minangle;

function setup() {
  createCanvas(400,400);
   angleMode(DEGREES)
}

function draw() {
  background("black");
  stroke("white")
  textSize(20)
  text(hr+":"+min+":"+sec,30,30)
  
  translate(200,200)
  rotate(-90)
  //calculating  time using predefined function
  hr = hour();
  min= minute();
  sec = second();

 
  //to create interactive rotation
  secangle= map(sec,0,60,0,360);
  minangle= map(min,0,60,0,360);
  hrangle= map(hr%12,0,12,0,360);
  //second hand
  push();
  rotate(secangle);
 
  stroke("green");
  strokeWeight(5);
  line(0,0,100,0);
  pop();

  //minute hand
  push();
  rotate(minangle);
  
  stroke("red");
  strokeWeight(5);
  line(0,0,80,0);
  pop();

  //hour hand
  push();
  rotate(hrangle);
  
  stroke("blue");
  strokeWeight(5);
  line(0,0,50,0);
  pop();

  stroke("blue");
  point(0,0);
 
  //drawing arc
  strokeWeight(8);
  noFill();
  stroke("green")
  arc(0,0,300,300,0,secangle);
  stroke("yellow")
  arc(0,0,280,280,0,minangle);
  stroke("blue")
  arc(0,0,260,260,0,hrangle);

  
 
}