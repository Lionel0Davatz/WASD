import { wallPositions } from "./maps/map1.js";
export const walls = [];

wallPositions.forEach(([x,y]) => {
  const wall = document.createElement("div")

  wall.classList.add("wall")
  wall.style.transform = `translate(${x}px, ${y}px)`


  document.body.appendChild(wall)
  walls.push(wall)
})