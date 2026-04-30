function setup() {
  createCanvas(800, 500, WEBGL);
}
function draw() {
  background(20);
  orbitControl();

  //Luces
  ambientLight(40);
  directionalLight(255, 255, 255, 1, 1, -1);
  pointLight(255, 255, 255, mouseX-width/2,mouseY-height/2);

  //Objeto mate
  push();
  translate(-200, 0, 0);
  ambientMaterial(200, 80, 80);
  sphere(80);
  pop();

  //Obejto brillante
  push();
  translate(200, 0, 0);
  specularMaterial(255);
  shininess(80);
  sphere(80);
  pop();

}