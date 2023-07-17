import createMatch from "./match.js";
import { winner } from "./match.js";

const players = [
  "Alberto Casero",
  "David Jiménez",
  "Javier de Miguel",
  "Eduardo Aguilar",
];

const randomPoint = function () {
  return Math.floor(Math.random() * 2) + 1;
};

const getRandomPlayers = function (players) {
  const shufled = [...players].sort(() => Math.random() - 0.5);
  return shufled.slice(0, 2);
};

const showSummary = function (game) {
  console.log("Group A Winner: ", winner);
  console.log("Final result:");
  game.getStats();
  game.resetMatch();
};

const simulateMatch = function (game) {
  while (winner === "") {
    game.pointWonBy(randomPoint());
    game.getWinner();
  }
};

export default function gameLoop() {
  const groupA = getRandomPlayers(players);
  const groupB = players.filter((player) => !groupA.includes(player));
  const groupC = [];

  console.log("Group A: ", groupA.join(" - "));
  const game1 = createMatch(...groupA);
  simulateMatch(game1);
  showSummary(game1);
  groupC.push(winner);
  console.log("\n");

  console.log("Group B: ", groupB.join(" - "));
  const game2 = createMatch(...groupB);
  simulateMatch(game2);
  showSummary(game2);
  groupC.push(winner);
  console.log("\n");

  console.log("Group C: ", groupC.join(" - "));
  const finalGame = createMatch(...groupC);
  simulateMatch(finalGame);
  showSummary(finalGame);
  console.log("\n");

  console.log(`THE WINNER IS: ${winner}`);
}
