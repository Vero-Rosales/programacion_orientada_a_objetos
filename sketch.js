let particulas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20, 10);
  let nuevaParticula = new Particula(mouseX, mouseY);
  particulas.push(nuevaParticula);

  for (let i = 0; i < particulas.length; i++) {
    particulas[i].update();
    particulas[i].display();
  }
  for (let i = 0; i < particulas.length; i++) {
    if (particulas[i].estaViva) {
    } else {
      particulas.splice(i, 1);
    }
  }
  console.log(particulas.length);
}
