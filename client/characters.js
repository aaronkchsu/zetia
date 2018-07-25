export class Character {
  constructor(width, height) {
    this.speed = 256;
    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0;
  }

  move = (dx, dy) => {
    this.x = this.x + dx;
    this.y = this.y + dy;
    console.log('NEW X Y', this.x, " ", this.y)
  }

  draw = (gameCtx) => {
    gameCtx.fillStyle = "#000";
    gameCtx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export class Obstacle extends Character {
  constructor(x, y, width, height) {
    super(width, height)
    this.speed = 256;
    this.x = x;
    this.y = y;
  }

  draw = (gameCtx) => {
    const ctx = gameCtx;
    ctx.fillStyle = "#000";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export class Panda extends Character {
  constructor(width, height) {
    super(width, height)
    this.speed = 256;
    this.x = 0;
    this.y = 0;
  }

  draw = () => {

  }
}

const panda = {
  speed: 256,
  x: 0,
  y: 0,
  charImage: ""
}
