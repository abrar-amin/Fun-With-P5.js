// Created in order to prove to classmate that my solution to question in PSET 1 for Physics 1116 was logical. 
// https://editor.p5js.org/aa2732/sketches/x8thxPv0m
let x = 0;
let y =0;
let t= 0;
let v = 0;
let h = 200;
function setup() {
  createCanvas(400, 400);
  v = pow(2*h * 10/(sin(radians(63.4*2))),1/2);
  
}

function draw() {
  background(220);
    
  x=v*t*(cos(radians(63.4)));
  y = -1/2*10*(t*t) + v*t*(sin(radians(63.4))) + 5;
  
  point(x,y)

  line(0,0,200,200);
  line(200,200,400,0)
  
  t+=0.05;
  

}
