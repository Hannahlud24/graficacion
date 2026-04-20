let modo=true;

function setup() {
  createCanvas(700, 500, WEBGL);
}

function draw() {
  background(230);
  orbitControl();
  if(modo){
    perspective();
  }else{
    ortho();
}

//Cubo cerca
    push();
    translate(-150,0,0);
    box(50);
    pop();

//Cubo lejos
    push();
    translate(150,0,-300);
    box(80);
    pop();
}

function keyPressed(){
modo=!modo;
  }