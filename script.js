const player = document.getElementById("player");
const block = document.getElementById("block");
const project = document.getElementById("project");

let position = 50;
let jumping = false;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    position += 10;
    player.style.left = position + "px";
  }

  if (e.key === " " && !jumping) {
    jumping = true;
    player.style.bottom = "80px";

    setTimeout(() => {
      player.style.bottom = "0px";
      jumping = false;
      checkHit();
    }, 400);
  }
});

function checkHit() {
  const playerRect = player.getBoundingClientRect();
  const blockRect = block.getBoundingClientRect();

  if (
    playerRect.right > blockRect.left &&
    playerRect.left < blockRect.right &&
    playerRect.top < blockRect.bottom
  ) {
    project.classList.remove("hidden");
  }
}
