class Rubber {
  constructor(x, y) {
    var options = {
      restitution: 0.3,
      friction: 5,
      density: 1,
    };
    this.body = Bodies.circle(x, y, 25, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;

    fill("pink");

    ellipseMode(CENTER);
    ellipse(pos.x, pos.y, 50, 50);
  }
}
