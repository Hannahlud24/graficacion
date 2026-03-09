let fija = false;
let posX, posY;
let angulo = 0;
let humo1=128;
let humo2=118;
let humo3=100;
let humo4=86
function setup() {
 createCanvas(600, 400);

}

function draw() {
    background(0, 191, 255);

 // Base
 stroke(139,69,19);
 fill(240, 230, 140);
 rect(200, 200, 200, 150);

stroke(139,69,19)
 fill(160,82,45);
 rect(343, 141, 26, 26);
 rect(369, 141, 26, 26);
 rect(369, 166, 26, 26);
 rect(369, 190, 26, 10);
 rect(343, 166, 26, 26);
 

 // Techo
 fill(255,69,0);
 triangle(200, 200, 300, 120, 400, 200);


line(226,180,376,180);
line(249,160,350,160);
line(276,140,325,140);

 // Puerta
 stroke(139,69,19)
 fill(139, 69, 19);
 rect(280, 270, 40, 80);

 fill(0, 0, 0); //Ventanas
 stroke(255,255,255);
 fill(0,191,255);
 rect(220, 230, 15, 15);
 rect(220, 230, 15, 15);
 rect(220, 230, 15, 15);
 rect(236, 230, 15, 15);
 rect(236, 230, 15, 15);
 rect(236, 230, 15, 15);
 rect(236, 245, 15, 15);
 rect(236, 245, 15, 15);
 rect(236, 245, 15, 15);
 rect(220, 245, 15, 15);
 rect(220, 245, 15, 15);
 rect(220, 245, 15, 15);

rect(345, 230, 15, 15);
rect(345, 230, 15, 15);
rect(345, 230, 15, 15);
rect(361, 230, 15, 15);
rect(361, 230, 15, 15);
rect(361, 230, 15, 15);
rect(361, 246, 15, 15);
rect(361, 246, 15, 15);
rect(361, 246, 15, 15);
rect(345, 246, 15, 15);
rect(345, 246, 15, 15);
rect(345, 246, 15, 15);

 // Sol girando
push();
translate(500, 80); // centro del sol
rotate(angulo);
stroke(255,215,0);
fill(255, 200, 0);
circle(0, 0, 80);
// rayos (dibujados alrededor del centro)
line(40, 0, 60, 0);
line(-40, 0, -60, 0);
line(0, 40, 0, 60);
line(0, -40, 0, -60);
line(28, 28, 45, 45);
line(-28, 28, -45, 45);
line(28, -28, 45, -45);
line(-28, -28, -45, -45);
pop();
// animación
angulo += 0.03;
 line(540,50,549,45);
 line(545,65,555,63);
 line(547.5,80,558,80);
 line(545,95,556,98);
 line(482,123,479,134);
 line(470,117,462,125);
 line(460,108,449.5,112);
 line(454.5,95,443,96);
 line(453.5,80,442.5,78);
 line(456,64,445,60);
 line(463,50,454,43);
 line(473,40,469,31);
 line(486,34,484,25);
 line(500,32,501,23);
 line(515,34,519,25);
 line(530,40,538,31.8);
 

noStroke();
 fill(255, 255, 255);
 circle(89, 80, 50);
 circle(140, 73, 50);
 circle(110, 59, 50);
 circle(118, 87, 50);
 circle(0, 150, 30);
 circle(0, 130, 40);
 circle(20, 148, 43);
 circle(0, 170, 25);
 circle(298, 30, 50);
 circle(297, 60, 50);
 circle(265, 55, 50);
 circle(327, 56, 50);
 circle(530, 120, 50);
 circle(509, 134, 50);
 circle(543, 137, 50);
 circle(528, 142, 50);

 noStroke();
 fill(34, 139, 34);
 rect(0, 350, 600, 200);

 stroke(0);
 fill(0);
 circle(313,310,6);

 stroke(47,79,79)
 fill(105,105,105);  
 circle(357,humo1,18); //humo de la chimenea
 circle(380,humo2,18);
 circle(359,humo3,18);
 circle(384,humo4,18);

 humo1-=0.5;
 humo2-=0.5;
 humo3-=0.5;
 humo4-=0.5;

 if(humo1<0)humo1=130;
 if(humo2<0)humo2=110;
 if(humo3<0)humo3=90;
 if(humo4<0)humo4=70;

 strokeWeight(2.5);
 stroke(34, 139, 34);
 line(26,349,26,337);
 stroke(34, 139, 34);
 line(57,400,57,341);
 line(100,400,100,341);
 line(145,400,145,341);

 noStroke();
 fill(255, 215, 0);
 circle(33,320,15);
 circle(25,314,15);
 circle(31,329.5,15);
 circle(18,321,15);
 circle(20,330,15);
 fill(255, 20, 147);
 circle(25.5,323,11);

 fill(255, 215, 0);
 circle(58,328,10);
 circle(64,334.5,10);
 circle(57.5,339.5,10);
 circle(52,334,10);

 fill(153, 50, 204);
 circle(57.5,335,8);

 fill(255, 215, 0);
 circle(110,325,15);
 circle(100,318,15);
 circle(106,335,15);
 circle(91,325,15);
 circle(94.5,334.5,15);
 fill(255, 20, 147);
 circle(100,328,11);

 fill(255, 215, 0);
 circle(145,328,10);
 circle(151,334.5,10);
 circle(145,339.5,10);
 circle(139,334,10);

 fill(153, 50, 204);
 circle(145,335,8);

 fill(160, 82, 45);
 circle(500,375,25);
 circle(510,375,20);
 circle(490,375,20);
 circle(490,381,10);
 circle(510,381,10);

 fill(255, 255, 0);
 rect(530, 360, 9, 10);
 rect(545, 358, 9, 10);
 ellipse(535.5, 368, 11, 7);
 ellipse(551, 366, 11, 7);

 if (fija) {
  peppa(posX, posY, 0.8);
} else {
  peppa(mouseX, mouseY, 0.8);
}
//peppa(mouseX, mouseY, 1);
//peppa(480,200);
//peppa(500,264,1)

}

  function peppa(x, y, s) {
  // s = tamaño (escala)

  noStroke();
// cuerpo vestido rojo
  fill(255, 0, 0);
  ellipse(x, y + 45*s, 50*s, 43*s);
  // cabeza
  fill(255, 182, 193);
  ellipse(x, y, 60*s, 51*s);

  // nariz
  ellipse(x + 30*s, y + 5*s, 28*s, 20*s);

  // hoyitos nariz
  fill(255,150,170);
  ellipse(x + 35*s, y + 3*s, 4*s, 6*s);
  ellipse(x + 28*s, y + 8*s, 4*s, 6*s);

  // ojos
  fill(255);
  ellipse(x - 8*s, y - 10*s, 14*s, 14*s);
  ellipse(x + 8*s, y - 12*s, 14*s, 14*s);


  fill(0);
  ellipse(x - 8*s, y - 10*s, 5*s, 5*s);
  ellipse(x + 8*s, y - 12*s, 5*s, 5*s);

  // mejilla
  fill(255,105,130);
  ellipse(x + -15*s, y + 5*s, 10*s, 10*s);

  // boca sonrisa
  noFill();
  stroke(255,0,0);
  strokeWeight(2);
  arc(x, y + 12*s, 15*s, 10*s, 0, PI);
  //arc(x - 2*s, y + 10*s, 30*s, 20*s, 0, PI/2);

  // orejas
  
  noStroke();
  fill(255,182,193);
  ellipse(x - 18*s, y - 28*s, 10*s, 16*s);
  ellipse(x + 5*s, y - 28*s, 10*s, 16*s);

 
  // brazos
  stroke(255,182,193);
  strokeWeight(3);
  line(x - 20*s, y + 40*s, x - 35*s, y + 30*s);
  line(x + 20*s, y + 40*s, x + 35*s, y + 30*s);
  // dedos derecha
line(x + 35*s, y + 30*s, x + 40*s, y + 32*s);
line(x + 36*s, y + 28*s, x + 40*s, y + 25*s);
line(x + 34*s, y + 28*s, x + 35*s, y + 22*s);

// dedos izquierda
line(x - 35*s, y + 30*s, x - 40*s, y + 32*s);
line(x - 36*s, y + 30*s, x - 40*s, y + 25*s);
line(x - 34*s, y + 29*s, x - 35*s, y + 22*s);

  // piernas
line(x - 8*s, y + 65*s, x - 8*s, y + 80*s);
line(x + 8*s, y + 65*s, x + 8*s, y + 80*s);

  // zapatos
  noStroke();
  fill(0);
  ellipse(x - 8*s, y + 85*s, 12*s, 6*s);
  ellipse(x + 8*s, y + 85*s, 12*s, 6*s);
}


function mousePressed() {
  if (!fija) {
    posX = mouseX;
    posY = mouseY;
    fija = true;
  } else {
    fija = false;
  }
}
let pausado = false;
function keyPressed() {
 if (key === ' ') {
   if (!pausado) {
     noLoop();
     pausado = true;
   } else {
     loop();
     pausado = false;
   }
 }
}