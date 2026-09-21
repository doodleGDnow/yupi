const playButton = document.getElementById("playButton");
const zunoButton = document.getElementById("zunoButton");

const menu = document.getElementById("menu");
const game = document.getElementById("game");

playButton.addEventListener("click", () => {
    menu.style.display = "none";
    game.style.display = "block";
});

zunoButton.addEventListener("click", () => {
    console.log("zuno");
});
