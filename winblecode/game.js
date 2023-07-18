import createMatch from "./match.js";

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

const showSummary = function (game, group, winner) {
  console.log(`Group ${group} Winner: `, winner);
  console.log("Final result:");
  game.getStats();
  // game.resetMatch();
};

const simulateMatch = function (game) {
  let winner = "";
  while (winner === "") {
    game.pointWonBy(randomPoint());
    winner = game.getWinner();
    if (winner !== "No winner yet.") {
      return winner
        .split(" ")
        .splice(0, winner.split(" ").length - 1)
        .join(" ");
    } else {
      winner = "";
    }
  }
};

// const match = function (groupLetter, group) {
//   console.log(`Group ${groupLetter}: `, group.join(" -VS- "));
//   const game1 = createMatch(...groupA);
//   const winnerA = simulateMatch(game1);
//   showSummary(game1, "A", winnerA);
// };

export default function gameLoop() {
  const groupA = getRandomPlayers(players);
  const groupB = players.filter((player) => !groupA.includes(player));
  const groupC = [];

  console.log("Group A: ", groupA.join(" -VS- "));
  const game1 = createMatch(...groupA);
  const winnerA = simulateMatch(game1);
  showSummary(game1, "A", winnerA);
  groupC.push(winnerA);
  console.log("\n");

  console.log("Group B: ", groupB.join(" -VS- "));
  const game2 = createMatch(...groupB);
  const winnerB = simulateMatch(game2);
  showSummary(game2, "B", winnerB);
  groupC.push(winnerB);
  console.log("\n");

  console.log("Group C: ", groupC.join(" -VS- "));
  const finalGame = createMatch(...groupC);
  const finalWinner = simulateMatch(finalGame);
  showSummary(finalGame, "C", finalWinner);
  console.log("\n");

  console.log(`THE WINNER IS: ${finalWinner}`);
}
