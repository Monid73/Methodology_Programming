let x = 100;
let y = 100;

let itemX = 300;
let itemY = 300;
let itemSpeedX = 2;
let itemSpeedY = 2;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(255);

    let offsetX = 0;
    let offsetY = 0;

    if (keyIsDown(65)) { 
        x -= 5;
        offsetX = -5;
    }
    if (keyIsDown(68)) { 
        x += 5;
        offsetX = 5;
    }
    if (keyIsDown(87)) {
        y -= 5;
        offsetY = -5;
    }
    if (keyIsDown(83)) {
        y += 5;
        offsetY = 5;
    }

   
    itemX += itemSpeedX;
    itemY += itemSpeedY;

    
    if (itemX <= 0 || itemX >= width - 30) {
        itemSpeedX *= -1;
    }
    if (itemY <= 0 || itemY >= height - 30) {
        itemSpeedY *= -1;
    }

    drawCharacter(x, y, offsetX, offsetY); 
    drawItem(itemX, itemY); 
}


function drawCharacter(x, y, offsetX, offsetY) {
    fill('red');
    rect(x - 25, y + 10, 50, 100); 
    rect(x - 70, y + 10, 40, 20);  
    rect(x + 30, y + 10, 40, 20);  
    
  
    ellipse(x + offsetX, y + offsetY, 50, 50);
}


function drawItem(x, y) {
    fill('blue');
    rect(x, y, 30, 30); 
}
