const players = [
  "Alberto Casero",
  "David Jiménez",
  "Javier de Miguel",
  "Eduardo Aguilar",
];

const getRandomPlayers = function (players) {
  const shufled = [...players].sort(() => Math.random() - 0.5);

  return shufled.slice(0, 2);
};

export default function gameLoop() {
  const groupA = getRandomPlayers(players);
  const groupB = players.filter((player) => !groupA.includes(player));
}
