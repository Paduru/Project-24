class Hammer {
  constructor(x, y) {
    var options = {
      density: 2,
      friction: 1.0,
      restution: 0.5,
    };
    this.side = 50;
    this.body = Bodies.rectangle(x, y, this.side * 2, this.side, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;

    fill("orange");
    rectMode(CENTER);
    rect(pos.x, pos.y, this.side * 2, this.side);
  }
}
