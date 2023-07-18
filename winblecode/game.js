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

const playMatch = function (groupLetter, group) {
  console.log(`Group ${groupLetter}: `, group.join(" -VS- "));
  const game = createMatch(...group);
  const winner = simulateMatch(game);
  showSummary(game, groupLetter, winner);
  return winner;
};

export default function gameLoop() {
  const groupA = getRandomPlayers(players);
  const groupB = players.filter((player) => !groupA.includes(player));
  const groupC = [];

  const winnerA = playMatch("A", groupA);
  groupC.push(winnerA);
  console.log("\n");

  const winnerB = playMatch("B", groupB);
  groupC.push(winnerB);
  console.log("\n");

  const finalWinner = playMatch("Final", groupC);
  console.log("\n");

  console.log(`THE WINNER IS: ${finalWinner}`);
}
