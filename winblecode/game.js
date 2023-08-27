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
  const shufled = players.sort(() => Math.random() - 0.5);
  return shufled.slice(0, 2);
};

const showSummary = function (game, group, winner) {
  console.log(`Group ${group} Winner: `, winner);
  console.log("Final result:");
  game.getStats();
};

const simulateMatch = function (game) {
  let winner = null;
  while (!winner) {
    game.pointWonBy(randomPoint());
    // console.log(game.getCurrentRoundScore());
    if (game.getWinner()) return game.getWinner();
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
  const finalGroup = [];

  const winnerA = playMatch("A", groupA);
  finalGroup.push(winnerA);
  console.log(
    "------------------------------------------------------------------------------------"
  );

  const winnerB = playMatch("B", groupB);
  finalGroup.push(winnerB);
  console.log(
    "------------------------------------------------------------------------------------"
  );

  const finalWinner = playMatch("Final", finalGroup);
  console.log(
    "------------------------------------------------------------------------------------"
  );

  console.log(`THE WINNER IS: ${finalWinner}`);
}
