import { walls } from "./createMap.js";

const player = document.getElementById("player");
let xDirection = 0;
let yDirection = 0;

function boxCollision(p, o) {
  const player = p.getBoundingClientRect();
  const obstacle = o.getBoundingClientRect();

  if (player.x + player.width >= obstacle.x &&
    player.x <= obstacle.x + obstacle.width &&
    player.y + player.height >= obstacle.y &&
    player.y <= obstacle.y + obstacle.height
  ) {
    return console.log("hat berührt")
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "w") {
    yDirection -= 5;
  }

  if (event.key === "s") {
    yDirection += 5;
  }

  if (event.key === "d") {
    xDirection += 5;
  }

  if (event.key === "a") {
    xDirection -= 5;
  }

  player.style.transform = `translate(${xDirection}px, ${yDirection}px)`;

  walls.forEach((wall) => {
    boxCollision(player, wall)
  })
});


