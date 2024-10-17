// Pi calculation using Monte Carlo Method
// By throwing a ton of darts onto a square with a circle inscribed in it,
// you can use the ratio of the two areas to find Pi. 
// https://editor.p5js.org/abraramin454/sketches/73SgheBgV
let circlePoints=0;

let points = [];
let frame;
let pi;
let pastPi;
function setup() {
  createCanvas(400, 400);
  frame = 0
}

function draw() {
  background(220);
  strokeWeight(3);
  translate(width/2,height/2)
  
  square(-100,-100,200)
  circle(0,0,200);
  
  
  let x = random(-100,100);
  let y = random(-100,100);
  points.push([x,y]);
  let d = sqrt(x*x+y*y);

  
  if(d > 100)
  {
    point(x,y);
  }
  else if( d==100 ||  d <100)
  {    
    circlePoints++;
    point(x,y);
  }
  pi = 4*(circlePoints/points.length)

  if(frameCount % 60 == 0) {
    pastPi = pi
    text(round(pastPi,3), -150,-100)
  }
  else{
    
    text(round(pastPi,3), -150,-100)

    
  }
    
  
  for(let i = 0; i<points.length;i++){
    point(points[i][0],points[i][1]);
    
  }
  frame++

}
