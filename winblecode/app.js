import createMatch from "./match.js";

const game = createMatch("Alberto C", "David J");

game.pointWonBy(1);
game.pointWonBy(2);
console.log(game.getCurrentRoundScore());
