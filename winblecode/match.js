const player1 = {
  id: 1,
  name: "",
  score: 0,
};

const player2 = {
  id: 2,
  name: "",
  score: 0,
};

export default function createMatch(player1Name, player2Name) {
  player1.name = player1Name;
  player2.name = player2Name;

  const pointWonBy = (id) => {};

  const getCurrentRoundScore = () => {
    return `${player1.name} ${player1.score} - ${player2.score} ${player2.name}`;
  };

  const getGameScore = () => {};

  const getMatchScore = () => {};

  const getWinner = () => {};

  return {
    pointWonBy,
    getCurrentRoundScore,
    getGameScore,
    getMatchScore,
    getWinner,
  };
}
