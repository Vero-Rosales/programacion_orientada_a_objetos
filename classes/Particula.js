class Particula {
  // este método se ejecuta automáticamente
  constructor(_x, _y) {
    this.posx = _x;
    this.posy = _y;
    this.estaViva = true;
    // tVida es el tiempo de vida
    this.tVida = round(random(10, 200));
    this.tamaño = 50;
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
    fill(255);
    noStroke();
    circle(this.posx, this.posy, this.tamaño);
  }
}
