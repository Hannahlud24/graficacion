function setup() {
  createCanvas(800, 500, WEBGL);
}

function draw() {
  background(230);
  orbitControl();
  

//Cubo
    push();
    translate(-200,0,0);
    rotateY(frameCount*0.02);
    fill(200, 50, 50);
    box(80);
    pop();

//Esfera
    push();
    translate(0,0,0);
    fill(50, 200, 200);
    sphere(60);
    pop();

//Toro
     push();
     translate(200,0,0);
     rotateX(frameCount*0.02);
     fill(200, 200, 50);
     torus(50, 15);
     pop();
}
