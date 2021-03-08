class Plane {
  constructor(x, y) {
    this.body = Bodies.rectangle(x, y, 800, 100, { isStatic: true });
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;

    fill("white");

    rectMode(CENTER);
    rect(pos.x, pos.y, 800, 100);
  }
}
