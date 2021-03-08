class Sand {
  constructor(x, y) {
    var options = {
      restitution: 1.3,
      friction: 5,
      density: 0.01,
    };
    this.body = Bodies.circle(x, y, 2, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;

    ellipseMode(RADIUS);
    ellipse(pos.x, pos.y, 2, 2);
  }
}
