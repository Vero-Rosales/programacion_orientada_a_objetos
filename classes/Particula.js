/*class Particula {
  // este método se ejecuta automáticamente
  constructor(_x, _y) {
    this.posx = _x;
    this.posy = _y;
    this.estaViva = true;
    // tVida es el tiempo de vida
    this.tVida = round(random(10, 200));
    this.tamaño = 50;

    // Asignamos blanco o celeste aleatoriamente a cada partícula
    let colores = [
      color(255, 255, 255), // Blanco
      color(173, 216, 230), // Celeste
    ];
    this.color = random(colores);
  }

  update() {
    this.tVida -= 1;
    if (this.tVida <= 0) {
      this.estaViva = false;
      return;
    }
    this.posy += 2;
    this.posx += random(-10, 10);
    this.tamaño -= 0.5;
  }

  display() {
    // Usamos el color de la partícula (blanco o celeste)
    stroke(this.color);
    strokeWeight(2);
    noFill();

    // Dibujar el copo de nieve
    push();
    translate(this.posx, this.posy);
    let ramas = 6; // Número de ramas del copo de nieve
    let angulo = TWO_PI / ramas;

    for (let i = 0; i < ramas; i++) {
      line(0, 0, 0, -this.tamaño / 2); // Ramas principales

      // Dibujar ramas secundarias en cada rama principal
      push();
      translate(0, -this.tamaño / 4); // Posiciona las ramas secundarias a lo largo de la rama principal
      line(0, 0, -this.tamaño / 8, -this.tamaño / 8); // Rama secundaria izquierda
      line(0, 0, this.tamaño / 8, -this.tamaño / 8); // Rama secundaria derecha
      pop();

      rotate(angulo);
    }
    pop();
  }
}*/

class Particula {
  // este método se ecuta automáticamente
  constructor(_x, _y) {
    this.posx = _x;
    this.posy = _y;
    this.estaViva = true;
    // tVida es el tiempo que tiene de vida
    this.tVida = round(random(10, 200));
    this.tamano = 1;
    this.opacidad = 100;
  }
  update() {
    // this.tVida -= 1;
    // if (this.tVida <= 0) {
    // 	this.estaViva = false;
    // 	return;
    // }

    if (this.posy < this.tamano / 2) {
      this.estaViva = false;
      return;
    }

    this.opacidad -= 0.5;

    this.posy -= 2;
    this.posx += random(-10, 10);
    this.tamano += 0.5;
  }
  display() {
    fill(255, this.opacidad);
    noStroke();
    circle(this.posx, this.posy, this.tamano);
    circle();
  }
}
