const player = document.getElementById("player");
const block = document.getElementById("block");
const project = document.getElementById("project");

let position = 50;
let jumping = false;

document.addEventListener("keydown", (e) => {
 if (e.key === "ArrowRight") {
  position += 15;
}

if (e.key === "ArrowLeft") {
  position -= 15;
}

position = Math.max(0, Math.min(position, window.innerWidth - 40));
player.style.left = position + "px";


 if (e.key === " " && !jumping) {
  jumping = true;
  let jumpHeight = 0;

  const jumpInterval = setInterval(() => {
    jumpHeight += 8;
    player.style.bottom = jumpHeight + "px";

    if (jumpHeight >= 120) {
      clearInterval(jumpInterval);

      const fallInterval = setInterval(() => {
        jumpHeight -= 8;
        player.style.bottom = jumpHeight + "px";

        checkHit();

        if (jumpHeight <= 0) {
          clearInterval(fallInterval);
          jumping = false;
        }
      }, 20);
    }
  }, 20);
}

});

function checkHit() {
  const playerRect = player.getBoundingClientRect();
  const blockRect = block.getBoundingClientRect();

  const hitFromBelow =
    playerRect.top <= blockRect.bottom &&
    playerRect.bottom > blockRect.bottom &&
    playerRect.right > blockRect.left &&
    playerRect.left < blockRect.right;

  if (hitFromBelow) {
    project.classList.remove("hidden");
    block.style.background = "gold";
  }
}

