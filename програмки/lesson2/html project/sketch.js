let x = 100;
let y = 100;

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

    drawCharacter(x, y, offsetX, offsetY);
}

function drawCharacter(x, y, offsetX, offsetY) {
    fill('red');
    rect(x - 25, y + 10, 50, 100); 
    rect(x - 70, y + 10, 40, 20);  
    rect(x + 30, y + 10, 40, 20); 
    ellipse(x + offsetX, y + offsetY, 50, 50);
}