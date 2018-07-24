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
    this.mainCharacter = new Character(50, 50);
    this.mainCharacter.draw(this.gameCanvas.getContext("2d"))
    return null;
  };

  endGame = () => {
    this.gameStarted = false;
    return null;
  };

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
        <canvas ref={this.setCanvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
      </div>
    );
  }
}

export default PandoGame;
