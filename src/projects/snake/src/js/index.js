
const game = new Game(
    document.querySelector(".map"),
    document.querySelector(".score__score"),
    document.querySelector(".score__highscore"),
    document.querySelector(".game-over"),
    document.querySelector(".start"),
    document.querySelector(".start-button"),
);
document.querySelector(".start-button").addEventListener("click",  (e) => {
    game.reset();
    game.start();
});