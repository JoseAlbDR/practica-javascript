const player1 = {
  id: 1,
  name: "",
  score: 0,
  roundsWon: 0,
  gamesWon: 0,
  advantage: false,
};

const player2 = {
  id: 2,
  name: "",
  score: 0,
  roundsWon: 0,
  gamesWon: 0,
  advantage: false,
};

export default function createMatch(player1Name, player2Name) {
  player1.name = player1Name;
  player2.name = player2Name;
  let deuce = false;

  // When there is a winner
  const handleWinner = (player) => {
    player.roundsWon += 1;
    if (player.roundsWon === 4) {
      player.gamesWon += 1;
      player.roundsWon = 0;
    }
    resetRound();
  };

  // Reset variables before new round
  const resetRound = () => {
    player1.score = 0;
    player1.advantage = false;
    player2.score = 0;
    player2.advantage = false;
    deuce = false;
  };

  const handleDeuce = (player) => {
    if (player.id === 1 && player1.advantage) {
      handleWinner(player1);
      return;
    }
    if (player.id === 2 && player2.advantage) {
      handleWinner(player2);
      return;
    }

    if (player.id === 1 && player2.advantage) {
      player2.advantage = false;
      return;
    }
    if (player.id === 2 && player1.advantage) {
      player1.advantage = false;
      return;
    }

    if (player.id === 1 && !player1.advantage) {
      player1.advantage = true;
      return;
    }
    if (player.id === 2 && !player2.advantage) {
      player2.advantage = true;
      return;
    }
  };

  const addScore = (player) => {
    if (deuce) {
      handleDeuce(player);
      return;
    }

    if (player.score === 40 && !deuce) {
      handleWinner(player);
      return;
    } else {
      player.score < 30 ? (player.score += 15) : (player.score += 10);
    }
  };

  const pointWonBy = (id) => {
    id === 1 ? addScore(player1) : addScore(player2);
    if (player1.score === 40 && player2.score === 40) deuce = true;
  };

  const getCurrentRoundScore = () => {
    if (deuce && !player1.advantage && !player2.advantage) return "Deuce";

    if (deuce && player1.advantage && !player2.advantage)
      return `Advantage ${player1.name} `;

    if (deuce && !player1.advantage && player2.advantage)
      return `Advantage ${player2.name} `;

    if (!deuce)
      return `${player1.name} ${player1.score} - ${player2.score} ${player2.name}`;
  };

  const getGameScore = () => {
    return `Rounds won:\n${player1.name} ${player1.roundsWon} \n${player2.name} ${player2.roundsWon}`;
  };

  const getMatchScore = () => {
    return `Games won:\n${player1.name} ${player1.gamesWon} \n${player2.name} ${player2.gamesWon}`;
  };

  const getWinner = () => {
    if (player1.gamesWon - player2.gamesWon === 2)
      return `${player1.name} wins`;
    if (player2.gamesWon - player1.gamesWon === 2)
      return `${player2.name} wins`;

    return "No winner yet.";
  };

  return {
    pointWonBy,
    getCurrentRoundScore,
    getGameScore,
    getMatchScore,
    getWinner,
  };
}
