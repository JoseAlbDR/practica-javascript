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

export default function gameLoop() {
  const groupA = getRandomPlayers(players);
  const groupB = players.filter((player) => !groupA.includes(player));
  const groupC = [];

  console.log("Group A: ", groupA);
  console.log("Group B: ", groupB);

  const game1 = createMatch(...groupA);

  while (winner === "") {
    game1.pointWonBy(randomPoint());
    game1.getWinner();
  }
  const groupAWinner = winner;
  console.log("Group A Winner: ", groupAWinner);
  groupC.push(groupAWinner);

  const game2 = createMatch(...groupB);
  while (winner === "") {
    game2.pointWonBy(randomPoint());
    game2.getWinner();
  }
  const groupBWinner = winner;
  console.log("Group B Winner: ", groupBWinner);
  groupC.push(groupBWinner);

  console.log("Group C: ", groupC);
  const finalGame = createMatch(...groupC);
  while (winner === "") {
    finalGame.pointWonBy(randomPoint());
    finalGame.getWinner();
  }

  console.log("Final Winner: ", winner);
}
