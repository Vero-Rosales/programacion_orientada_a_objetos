class Particula {
  // este método se ejecuta automáticamente
  constructor(_x, _y) {
    this.posx = _x;
    this.posy = _y;
    this.estaViva = true;
    // tVida es el tiempo de vida
    this.tVida = round(random(10, 200));
    this.tamaño = 50;
    // Asignamos un color aleatorio a cada partícula
    this.color = color(random(255), random(255), random(255));
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
    // Usamos el color de la partícula
    fill(this.color);
    noStroke();

    // Dibujar el rombo
    beginShape();
    vertex(this.posx, this.posy - this.tamaño / 2); // vértice superior
    vertex(this.posx + this.tamaño / 2, this.posy); // vértice derecho
    vertex(this.posx, this.posy + this.tamaño / 2); // vértice inferior
    vertex(this.posx - this.tamaño / 2, this.posy); // vértice izquierdo
    endShape(CLOSE);
  }
}
