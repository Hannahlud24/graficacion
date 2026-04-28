let invaders = []
let invaderImg
let player
let bullets = []

let invaderBullets = []
let invaderShootingFrequency = 0.05;
let maxInvaderBullets = 5

let gameOver = false
let gameWon = false

let touchDir = 0;

function preload() {
    invaderImg = loadImage('invader.gif')
}

function setup() {
    createCanvas(700,500)
    textFont('monospace');

    player = createPlayer()

    for ( let j = 0; j < 3; j++){
        for(let i = 0; i < 6; i++){
            invaders.push(createInvader(i * 70, j * 70))
        }
    }
}

function draw() {

    if (gameOver || gameWon) {
        background(0);

        fill(gameOver ? [255,0,0] : [118,240,19]);
        textSize(32);
        textAlign(CENTER, CENTER);
        text(gameOver ? "GAME OVER" : "¡WINNER!", width / 2, height / 2);

        textSize(14);
        text("Presiona ESPACIO para reiniciar", width / 2, height / 2 + 50);

        return;
    }

    background(0)

    movePlayer(player)
    showPlayer(player)

    // BALAS PLAYER
    for (let i = bullets.length - 1; i >= 0; i--) {
        showBullet(bullets[i]);
        moveBullet(bullets[i]);

        for (let j = invaders.length - 1; j >= 0; j--) {
            if(bulletHitsInvader(bullets[i], invaders[j])){
                invaders.splice(j, 1)
                bullets.splice(i, 1)

                if(invaders.length === 0){
                    gameWon = true
                }
                break
            }
        }
    }

    // INVADERS
    let limit = false

    for(let i = 0; i < invaders.length; i++){
        showInvaders(invaders[i])
        moveInvaders(invaders[i])

        if(invaders[i].x > width || invaders[i].x < 0){
            limit = true
        }

        if(random(1) < invaderShootingFrequency && invaderBullets.length < maxInvaderBullets){
            let invaderBullet = createBullet(
                invaders[i].x + invaders[i].r / 2,
                invaders[i].y + invaders[i].r
            )
            invaderBullets.push(invaderBullet)
        }
    }

    // BALAS INVADERS
    for(let i = invaderBullets.length - 1; i >= 0; i--){
        showBullet(invaderBullets[i])
        moveInvaderBullet(invaderBullets[i])

        if(bulletHitsPlayer(invaderBullets[i], player)){
            gameOver = true
        }

        if (invaderBullets[i].y > height){
            invaderBullets.splice(i, 1)
        }  
    }

    if(limit){
        for(let i = 0; i < invaders.length; i++){
            shiftInvaderDown(invaders[i])
        }
    }
}

// PLAYER
function createPlayer(){
    return {x: width / 2 , y: height - 20, w: 60, h:20, dir: 0}
}

function showPlayer(player){
    fill(255)
    rect(player.x, player.y, player.w, player.h)
}

function movePlayer (player){
    player.x += (player.dir + touchDir) * 5
    player.x = constrain(player.x, 0, width - player.w)   
}

// TECLADO
function keyPressed() { 

    // 🔥 REINICIAR
    if ((gameOver || gameWon) && keyCode === 32){
        restartGame()
        return
    }

    if (keyCode === 32){
        let bullet = createBullet(player.x + player.w / 2, player.y)
        bullets.push(bullet)
    }

    if (keyCode === RIGHT_ARROW){
        player.dir = 1
    } else if (keyCode === LEFT_ARROW){
        player.dir = -1
    }
}

function keyReleased() {
    if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
        player.dir = 0
    }
}

// TOUCH 📱
function touchStarted() {
    if (gameOver || gameWon){
        restartGame()
        return false
    }

    if (mouseY < height - 100) {
        let bullet = createBullet(player.x + player.w / 2, player.y)
        bullets.push(bullet)
    }
}

function touchMoved() {
    if (mouseX < width / 2) {
        touchDir = -1;
    } else {
        touchDir = 1;
    }
    return false;
}

function touchEnded() {
    touchDir = 0;
}

// 🔥 REINICIO
function restartGame(){
    invaders = []
    bullets = []
    invaderBullets = []

    gameOver = false
    gameWon = false

    player = createPlayer()

    for ( let j = 0; j < 3; j++){
        for(let i = 0; i < 6; i++){
            invaders.push(createInvader(i * 70, j * 70))
        }
    }
}

// BALAS
function createBullet(x, y){  
    return {x: x, y: y, r: 8}
} 

function showBullet(bullet) {
    if(invaderBullets.includes(bullet)){
        fill(118, 240, 19)
    }else{
        fill(255)
    }
    ellipse(bullet.x, bullet.y, bullet.r * 2);
}

function moveBullet(bullet){
    bullet.y -= 5 
}

function moveInvaderBullet(bullet) {
    bullet.y += 5;
}

function bulletHitsPlayer(invaderBullet, player) {
    let d = dist(invaderBullet.x, invaderBullet.y, player.x + player.w / 2, player.y + player.h / 2);
    return d < invaderBullet.r + player.w / 2;
}

// INVADERS
function createInvader(x, y){
    return {x: x , y: y, r: 60, xdir: 1}
}
    
function showInvaders(invader){
    image(invaderImg, invader.x, invader.y, invader.r, invader.r);
}

function moveInvaders(invader){
    invader.x += invader.xdir
}

function shiftInvaderDown(invader){
    invader.xdir *= -1
    invader.y += invader.r
}

function bulletHitsInvader(bullet, invader) {
    let d = dist(
        bullet.x,
        bullet.y,
        invader.x + invader.r / 2,
        invader.y + invader.r / 2
    )
    return d < bullet.r + invader.r / 2
}