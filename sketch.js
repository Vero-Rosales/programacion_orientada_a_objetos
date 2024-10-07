let posX, posY;
let velX, velY;
let diam;
let rad;
let bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);

  rad = ceil(random(50, 50));
  diam = rad * 2;

  posX = random(rad, width - rad);
  posY = random(rad, height - rad);

  velX = 5;
  velY = 5;

  bgColor = color(255, 0, 155);
}

function draw() {
  background(bgColor);
  fill(255);
  noStroke();

  posX += velX;
  posY += velY;

  if (posX > width - rad || posX < rad) {
    velX *= -1;
    changeBackgroundColor();
  }

  if (posY > height - rad || posY < rad) {
    velY *= -1;
    changeBackgroundColor();
  }

  circle(posX, posY, diam);
}

function changeBackgroundColor() {
  bgColor = color(random(255), random(255), random(255));
}
