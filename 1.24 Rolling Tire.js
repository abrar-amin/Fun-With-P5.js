// Problem from second PHYS1116 PSET regarding a particle stuck to a moving wheel's tire. 
// Coded using answer obtained from rotational coordinates.
// Was a good reminder of rotation angles working backwards in programming. 
// https://editor.p5js.org/aa2732/sketches/r7Hg_pCL5

let R = 50;
let v = 15;
let t = 0;

let xCir = 200;
let yCir = 200;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  x = R*cos((1*v/R)*t - PI/2) + v*t + width/2;
  y = R*sin((1*v/R)*t - PI/2) + height/2;
  
  xCir = 200+ v*t;
  circle(xCir,yCir,2*R)
  circle(x,y,2*R/10)

  t+=0.05;
}


