player1 = {
  id: 1,
  name: "",
  score: 0,
};

player2 = {
  id: 2,
  name: "",
  score: 0,
};

export const createMatch = (player1Name, player2Name) => {
  player1.name = player1Name;
  player2.name = player2Name;

  const pointWonBy = (id) => {};

  const getCurrentRoundsScore = () => {
    return `${player1.name} ${player1.score} - ${player2.score} ${player2.name}`;
  };

  const getGameScore = () => {};

  const getMatchScore = () => {};

  const getWinner = () => {};

  return {
    pointWonBy,
    getCurrentRoundsScore,
    getGameScore,
    getMatchScore,
    getWinner,
  };
};
