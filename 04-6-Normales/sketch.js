function setup() {
  createCanvas(800, 500, WEBGL);
}
function draw() {
  background(20);
  orbitControl();

  //Luces
  ambientLight(40);
  pointLight(255, 255, 255, 0, -100, 200);
  
  //Esfera
  push();
  translate(-200, 0, 0);
  sphere(80);
  pop();

  //Cubo
  push();
  translate(200, 0, 0);
  box(120);
  pop();


}