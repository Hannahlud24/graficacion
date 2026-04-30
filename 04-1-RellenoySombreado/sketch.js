function setup() {
  createCanvas(800, 500, WEBGL);
}
function draw() {
  background(20);
  orbitControl();

  //Luces
  ambientLight(60);
  directionalLight(255, 255, 255, 1, 1, -1);

  //Cubo con color homogeneo
  push();
  translate(-250, 0, 0);
  rotateY(frameCount * 0.01);
  fill(200, 80, 80);
  box(120);
  pop();

  //Esfera con material ambiental
  push();
  translate(0, 0, 0);
  rotateY(frameCount * 0.01);
  ambientMaterial(80, 160, 220);
  sphere(90);
  pop();

  //Toroide con material especular
  push();
  translate(250, 0, 0);
  rotateY(frameCount * 0.01);
  specularMaterial(230);
  shininess(80);
  torus(70, 20);
  pop();
}