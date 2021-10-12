import Phaser from "phaser";
import { width, height } from "./modules/constants.js";

const config = {
  type: Phaser.AUTO,
  width,
  height,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 200
      }
    }
  },
  scene: {
    preload,
    create
  }
};

function preload() {
  this.load.image("sky", "assets/sprites/space3.png");
  this.load.image("logo", "assets/sprites/phaser3-logo.png");
  this.load.image("red", "assets/sprites/red.png");
}

function create() {
  this.add.image(400, 300, "sky");

  const logo = this.physics.add.image(400, 100, "logo");

  logo.setVelocity(100, 200);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);
  logo.setDepth(5);

  const particles = this.add.particles("red");

  const emitter = particles.createEmitter({
    speed: 200,
    scale: { start: 1, end: 0 },
    blendMode: "ADD"
  });

  emitter.startFollow(logo);
}

// eslint-disable-next-line
const game = new Phaser.Game(config);
