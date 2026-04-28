let tierra;

function preload() {
  textura_tierra = loadImage('https://i.ibb.co/PD4LyP5/planeta.jpg');
  textura_luna = loadImage('https://i.ibb.co/WPvVybx/luna.jpg');
  textura_fondo_estrellas= loadImage("https://i.ibb.co/NNTFKmL/nocheHD.jpg");
}
function setup() {
  createCanvas(700, 700, WEBGL);
}

function draw() {
  background(0);
  noStroke();

  texture(textura_fondo_estrellas);
  sphere(800);

  for (let i = 0; i < 3; i++) {
    directionalLight(255, 255, 255-i*25,-1,1,-1);
  }


  orbitControl();

  rotateZ(-0.3); // Rotación del fondo de estrellas

  push();
  rotateY(frameCount * 0.009);// Rotación de la Tierra
  texture(textura_tierra);
  sphere(150);
  pop();

  push();
  rotateY(-frameCount * 0.1/10); // Rotación de la luna
  translate(0, 0, 250); // Mover la luna  
  rotateY(-frameCount * 0.05); // Rotación de la luna
  texture(textura_luna);
  sphere(50);
  pop();


}
