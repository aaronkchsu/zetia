import React from "react";
import { Panda, Character, Obstacle } from "./characters";

let CANVAS_WIDTH = 480;
let CANVAS_HEIGHT = 320;

const pieces = [];

const randomNumberBetween = (min, max) => {
  return Math.floor( Math.random () * (max - min + 1) + min)
}

class PandoGame extends React.Component {
  constructor(props) {
    super(props);

    this.gameStarted = false;
    this.keysPressed = {};
    this.obstacles = [];

    document.body.addEventListener("keydown", event => {
      if (event.keyCode === 32 && !this.gameStarted) {
        this.startGame();
      }

      if (this.gameStarted) {
        if (event.keyCode === 37) {
          this.moveCharacter(-10, 0);
        }

        if (event.keyCode === 38) {
          this.moveCharacter(0, -10);
        }

        if (event.keyCode === 39) {
          this.moveCharacter(10, 0);
        }

        if (event.keyCode === 40) {
          this.moveCharacter(0, 10);
        }

        if (event.keyCode === 27) {
          this.resetGame(this.gameCanvas.getContext("2d"));
        }
      }

      this.keysPressed[event.keyCode] = true;
    });

    document.body.addEventListener("keyup", event => {
      console.log("Key up checked");
      delete this.keysPressed[event.keyCode];
    });
  }

  startGame = () => {
    this.gameStarted = true;

    this.mainCharacter = new Character({width: 32, height: 32});
    const ctx = this.gameCanvas.getContext("2d");
    ctx.clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
    this.mainCharacter.draw(ctx);

    for(let i = 0; i < 10; i++) {
      const randomNumberY = randomNumberBetween(0, CANVAS_HEIGHT);
      const randomNumberX = randomNumberBetween(0, CANVAS_WIDTH);

      this.obstacles.push(new Obstacle({ width: 32, height: 32, x: randomNumberX, y: randomNumberY }));
    }

    this.obstacles.forEach((obj) => {
      obj.draw(ctx)
    })
  };

  moveObstacles = () => {

  }

  endGame = () => {
    this.gameStarted = false;
    return null;
  };

  moveCharacter = (dx, dy) => {
    const ctx = this.gameCanvas.getContext("2d");
    ctx.clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
    this.mainCharacter.move(dx, dy);
    this.mainCharacter.draw(ctx);

    this.obstacles.forEach((obj) => {
      obj.draw(ctx)
    })
  };

  resetGame = ctx => {
    this.gameStarted = false
    ctx.clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
    return null;
  };

  updateFrame = () => {
    ctx.clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
    return null;
  };

  setCanvasRef = el => {
    this.gameCanvas = el;
  };

  render() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <h1>Pando Hop</h1>
        <canvas
          ref={this.setCanvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          style={{
            border: "3px",
            borderStyle: "solid"
          }}
        />
      </div>
    );
  }
}

export default PandoGame;
