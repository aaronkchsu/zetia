export class Character {
  constructor({width, height, x, y, speed}) {
    this.speed = speed || 256;
    this.width = width;
    this.height = height;
    this.x = x || 0;
    this.y = y || 0;
  }

  getPosition() {
    return {
      x: this.x,
      y: this.y
    }
  }

  move = (dx, dy) => {
    this.x = this.x + dx;
    this.y = this.y + dy;
  }

  draw = (gameCtx) => {
    gameCtx.fillStyle = "#000";
    gameCtx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export class Obstacle extends Character {
  constructor({x, y, width, height, speed}) {
    super({width, height, x, y, speed})
  }

  checkCollide(otherX, otherY) {
    const xMax = this.x + this.width;
    const yMax = this.y + this.height;

    if((this.x > otherX) && (otherX < xMax) && (y > this.y) && (y < yMax)) {
      return true
    } else {
      return false
    }
  }

  draw = (gameCtx) => {
    const ctx = gameCtx;
    ctx.fillStyle = "#000";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move = (dx, dy) => {
    this.x = this.x + dx;
    this.y = this.y + dy;
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
