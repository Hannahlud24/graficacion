function setup() {
  createCanvas(800, 500, WEBGL);
}
function draw() {
  background(25);
  orbitControl();

  //Luces
  ambientLight(50);
  directionalLight(255, 255, 255, 1, 1, -1);
  pointLight(255, 200, 200, 0,-100,200);

  //Esfera
  push();
  translate(0, 0, 0);
  rotateX(frameCount * 0.08);
  sphere(90);
  pop();

  //Cubo
  push();
  translate(-200, 0, 0);
  rotateY(frameCount * 0.08);
  box(120);
  pop();

  //Toroide
  push();
  translate(200, 0, 0);
  rotateY(frameCount * 0.08);
  torus(80, 20);
  pop();
}