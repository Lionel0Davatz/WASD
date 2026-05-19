import { walls } from "./createMap.js";
let resetButton = document.getElementById("deathScreenButton")

const player = document.getElementById("player");
let x = 0;
let xDirection = 0;

let y = 0;
let yDirection = 0;

let isDead = false;
let deathScreen = document.getElementById("deathScreen")

const keys = {
  KeyW: false,
  KeyA: false,
  KeyS: false,
  KeyD: false
};

let playerSpeed = 2

function boxCollision(p, o) {
  const player = p.getBoundingClientRect();
  const obstacle = o.getBoundingClientRect();

  if (
    player.x + player.width >= obstacle.x &&
    player.x <= obstacle.x + obstacle.width &&
    player.y + player.height >= obstacle.y &&
    player.y <= obstacle.y + obstacle.height
  ) {
      isDead = true;
  }
}

document.addEventListener("keydown", (event) => {
    keys[event.code] = true
});

document.addEventListener("keyup", (event) => {
    keys[event.code] = false
});

export function movePlayer() {
  if (!isDead) {

  yDirection = 0;
  xDirection = 0;

  if(keys.KeyW) yDirection = -playerSpeed;
  if(keys.KeyS) yDirection = playerSpeed;
  if(keys.KeyD) xDirection = playerSpeed;
  if(keys.KeyA) xDirection = -playerSpeed;

  x += xDirection;
  y += yDirection;


  player.style.transform = `translate(${x}px, ${y}px)`;

  walls.forEach((wall) => {
    boxCollision(player, wall);
  });

  requestAnimationFrame(movePlayer);
  } else {
    deathScreen.style.display = "grid"
  }
}

function resetGame() {
  deathScreen.style.display = "none";
  x = 0;
  y = 0;
  player.style.transform = `translate(${x}px, ${y}px)`;
  isDead = false;
  movePlayer()
}

resetButton.addEventListener("click", () => {
  resetGame()
})

movePlayer();