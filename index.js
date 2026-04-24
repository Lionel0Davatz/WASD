const player = document.getElementById("player");
let xDirection = 0;
let yDirection = 0;

document.addEventListener("keydown", (event) => {
  if (event.key === "w") {
    yDirection -= 10;
  }

  if (event.key === "s") {
    yDirection += 10;
  }

  if (event.key === "d") {
    xDirection += 10;
  }

  if (event.key === "a") {
    xDirection -= 10;
  }

  player.style.transform = `translate(${xDirection}px, ${yDirection}px)`;
});
