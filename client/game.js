import React from "react";
import { Panda, Character } from "./characters";

let CANVAS_WIDTH = 480;
let CANVAS_HEIGHT = 320;

const pieces = [];

class PandoGame extends React.Component {
  constructor(props) {
    super(props);

    this.gameStarted = false;
    this.keysPressed = {};
    this.obstacles = [];


    document.body.addEventListener("keydown", (event) => {
      console.log("Key down checked", event.keyCode)
      if (event.keyCode === 32 && !this.gameStarted) {
        this.startGame();
      }

      if(event.keyCode === 27) {
        this.resetGame(this.gameCanvas.getContext("2d"));
      }
      this.keysPressed[event.keyCode] = true;
    });

    document.body.addEventListener("keyup", (event) => {
      console.log("Key up checked")
      delete this.keysPressed[event.keyCode];
    });
  }

  startGame = () => {
    this.gameStarted = true;
    this.mainCharacter = new Character(32, 32);
    const ctx = this.gameCanvas.getContext("2d");
    ctx.clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
    this.mainCharacter.draw(ctx)
  };

  endGame = () => {
    this.gameStarted = false;
    return null;
  };

  moveCharacter = () => {
    const nX = this.mainCharacter.x + 20;
    const nY = this.mainCharacter.y + 20;
    const ctx = this.gameCanvas.getContext("2d");
    ctx.clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
    this.mainCharacter.move(nX, nY)
    this.mainCharacter.draw(ctx)
  }

  resetGame = (ctx) => {
    ctx.clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
    return null;
  };

  updateFrame = () => {
    ctx.clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
    return null;
  };

  setCanvasRef = (el) => {
    this.gameCanvas = el;
  }

  render() {
    return (
      <div>
        <h1>Pando Hop</h1>
        <button onClick={this.moveCharacter}>{"move item"}</button>
        <canvas ref={this.setCanvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
      </div>
    );
  }
}

export default PandoGame;
