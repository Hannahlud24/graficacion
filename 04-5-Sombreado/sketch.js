function setup() {
  createCanvas(800, 500, WEBGL);
}
function draw() {
  background(30);
  orbitControl();

  //Luces
  ambientLight(50);
  directionalLight(255, 255, 255, 1, 1, -1);
  
  //Plano
  push();
  translate(-250, 0, 0);
  fill(200, 80, 80);
  box(120);
  pop();

  //Gouraud / Phong aproximado
  push();
  translate(0, 0, 0);
  sphere(90);
  pop();

  //Especular
  push();
  translate(250, 0, 0);
  specularMaterial(255);
  shininess(100);
  sphere(90);
  pop();

}