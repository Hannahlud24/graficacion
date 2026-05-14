let edificios = [];
let neonEncendido = true;
let modoColor = 0;

function setup() {
  createCanvas(800, 500, WEBGL);

  // crear ciudad
  for (let i = 0; i < 50; i++) {
    edificios.push({
      x: random(-600, 600),
      z: random(-600, 600),
      h: random(80, 300)
    });
  }
}

function draw() {

  background(5);
  orbitControl();
  ambientLight(40);

  // luz que sigue el mouse
  pointLight(
    0,
    255,
    255,
    mouseX - width / 2,
    -150,
    300
  );

  directionalLight(255, 0, 255, 1, 1, -1);


  push();
  rotateX(HALF_PI);
  ambientMaterial(15);
  plane(2000, 2000);
  pop();


  for (let b of edificios) {

    push();

    let pulso = sin(frameCount * 0.02 + b.x) * 10;

    translate(b.x, -b.h / 2 + pulso, b.z);

    // cambio de color con teclado
    if (modoColor === 0) {
      specularMaterial(0, 200, 255);
    } else if (modoColor === 1) {
      specularMaterial(255, 0, 200);
    } else {
      specularMaterial(0, 255, 120);
    }

    box(60, b.h, 60);

    pop();
  }



  if (neonEncendido) {

    push();
    translate(0, -120, 0);
    emissiveMaterial(255, 0, 255);
    rotateY(frameCount * 0.02);
    sphere(70);
    pop();

  }

  push();
  resetMatrix();
  fill(255);
  textSize(14);

  text("CIUDAD NEON 3D", 20 - width/2, 30 - height/2);

  text("Click = prender/apagar neón", 20 - width/2, 55 - height/2);

  text("1/2/3 = cambiar color edificios", 20 - width/2, 80 - height/2);

  pop();
}

function mousePressed() {

  neonEncendido = !neonEncendido;

}

function keyPressed() {

  if (key === '1') modoColor = 0;
  if (key === '2') modoColor = 1;
  if (key === '3') modoColor = 2;

}