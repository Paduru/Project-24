class Iron {
  constructor(x, y, w, h) {
    var options = {
      friction: 1.0,
      restitution: 0.8,
      density: 5,
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
    this.w = w;
    this.h = h;
  }

  display() {
    var pos = this.body.position;
    rectMode(CENTER);
    fill("black");
    rect(pos.x, pos.y, this.w, this.h);
  }
}
