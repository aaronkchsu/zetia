export class Character {
  constructor({width, height, x, y, speed}) {
    this.speed = speed || 256
    this.width = width
    this.height = height
    this.x = x || 0
    this.y = y || 0
  }

  getPosition() {
    return {
      x: this.x,
      y: this.y
    }
  }

  checkCollide(otherX, otherY, otherWidth, otherHeight) {
    const BUFFER = 6;
    if (
      otherX < this.x + this.width - BUFFER &&
      otherX + otherWidth - BUFFER > this.x &&
      otherY < this.y + this.height - BUFFER &&
      otherHeight - BUFFER + otherY > this.y
    ) {
      return true
    } else {
      return false
    }
  }

  move = (dx, dy) => {
    this.x = this.x + dx
    this.y = this.y + dy
  }

  draw = gameCtx => {
    gameCtx.fillStyle = '#008EE2'
    gameCtx.fillRect(this.x, this.y, this.width, this.height)
  }
}

export class Obstacle extends Character {
  constructor({x, y, width, height, speed, goingLeft}) {
    super({width, height, x, y, speed})
    this.goingLeft = goingLeft || false
  }

  draw = gameCtx => {
    const ctx = gameCtx
    ctx.fillStyle = '#8B969E'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  move = () => {
    if (this.goingLeft) {
      this.x = this.x - this.speed
    } else {
      this.x = this.x + this.speed
    }
  }
}

export class GoalObject extends Character {
  constructor({x, y, width, height, speed, goingLeft}) {
    super({width, height, x, y, speed})
    this.goingLeft = goingLeft || false
  }

  draw = (gameCtx) => {
    const ctx = gameCtx
    ctx.fillStyle = '#00AC18'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  move = () => {
    if (this.goingLeft) {
      this.x = this.x - this.speed
    } else {
      this.x = this.x + this.speed
    }
  }
}
