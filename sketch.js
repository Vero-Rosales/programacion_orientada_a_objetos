let bgColor;
let pelotas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(155, 0, 255);
  for (let i = 0; i < 100; i++) {
    let nuevaPelota = new Pelota();
    pelotas.push(nuevaPelota);
  }
}

function draw() {
  background(bgColor);
  for (let i = 0; i < 100; i++) {
    pelotas[i].update();
    pelotas[i].display();
  }
}

function changeBackgroundColor() {
  bgColor = color(random(255), random(255), random(255));
}

class Pelota {
  //Plano de instrucciones para crear una pelota
  constructor() {
    this.rad = ceil(random(5, 30));
    this.diam = this.rad * 2;
    this.posX = random(this.rad, width - this.rad);
    this.posY = random(this.rad, height - this.rad);
    this.velX = random(-10, 10);
    this.velY = random(-10, 10);
    console.log("estoy vivaaa!");
  }
  //método update
  update() {
    this.posX += this.velX;
    this.posY += this.velY;

    if (this.posX > width - this.rad || this.posX < this.rad) {
      this.velX *= -1;
    }

    if (this.posY > height - this.rad || this.posY < this.rad) {
      this.velY *= -1;
    }
  }

  display() {
    fill(255);
    noStroke();
    circle(this.posX, this.posY, this.diam);
  }
}
