const box = document.getElementById("box");
let boxPositionX = 0;
let boxPositionY = 0;

document.addEventListener("keydown", (event) => {
  const boxWidth = box.offsetWidth;
  const boxHeight = box.offsetHeight;
  const step = 10;

  console.log(event.key);
  switch (event.key) {
    case "ArrowUp":
      boxPositionY = Math.max(0, boxPositionY - step);
      break;
    case "ArrowDown":
      boxPositionY = Math.min(window.innerHeight - boxHeight, boxPositionY + step);
      break;
    case "ArrowLeft":
      boxPositionX = Math.max(0, boxPositionX - step);
      break;
    case "ArrowRight":
      boxPositionX = Math.min(window.innerWidth - boxWidth, boxPositionX + step);
      break;
  }

  box.style.left = `${boxPositionX}px`;
  box.style.top = `${boxPositionY}px`;

  console.log("top: " + box.style.top);
  console.log("left: " + box.style.left);

  if (
    boxPositionX >= window.innerWidth / 2 - boxWidth / 2 &&
    boxPositionY >= window.innerHeight / 2 - boxHeight / 2 &&
    boxPositionX <= window.innerWidth / 2 + boxWidth / 2 &&
    boxPositionY <= window.innerHeight / 2 + boxHeight / 2
  ) {
    openModal();
    console.log("enter");

  }
});

function openModal() {
    const modal = document.getElementById("myModal");
    modal.classList.remove("fade");
    modal.style.display = "block";
  }
  
  function closeModal() {
    const modal = document.getElementById("myModal");
    modal.classList.add("fade");
    modal.style.display = "none";
  }

  function submitRoomName() {
    const roomNameInput = document.getElementById("roomNameInput").value;
    closeModal();
    window.location.href = "http://localhost:3000/room";
}
