function setup() {
  createCanvas(800, 500, WEBGL);
}
function draw() {
  background(20);
  orbitControl();

  //Luces
  ambientLight(40);
  directionalLight(255,255,255,1,1,-1);
  pointLight(255, 200, 200, 0, -150, 200);
  
  //Esfera
  push();
  translate(-200, 0, 0);
  specularMaterial(255);
  shininess(100);
  sphere(80);
  pop();

  //Cubo
  push();
  translate(0, 0, 0);
  ambientLight(200,50,50);
  box(120);
  pop();

  //Toro
  push();
  translate(200,0,0);
  normalMaterial();
  torus(80,20);
  pop();


}