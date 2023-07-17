const initialPlayer1 = {
  id: 1,
  name: "",
  score: 0,
  roundsWon: 0,
  gamesWon: 0,
  advantage: false,
};

const initialPlayer2 = {
  id: 2,
  name: "",
  score: 0,
  roundsWon: 0,
  gamesWon: 0,
  advantage: false,
};

export default function createMatch(player1Name, player2Name) {
  let player1 = { ...initialPlayer1, name: player1Name };
  let player2 = { ...initialPlayer2, name: player2Name };
  let deuce = false;

  const getStats = () => {
    console.log(`${player1.name} games won: ${player1.gamesWon}`);
    console.log(`${player2.name} games won: ${player2.gamesWon}`);
  };

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
  function resetRound() {
    player1.score = 0;
    player1.advantage = false;
    player2.score = 0;
    player2.advantage = false;
    deuce = false;
  }

  function resetMatch() {
    player1 = { ...initialPlayer1 };
    player2 = { ...initialPlayer2 };
  }

  const handleDeuce = (player) => {
    // Player 1 wins a point with advantage
    if (player.id === 1 && player1.advantage) {
      handleWinner(player1);
      return;
    }

    // Player 1 wins a point with Player 2 advantage
    if (player.id === 1 && player2.advantage) {
      player2.advantage = false;
      deuce = true;
      return;
    }

    // Player 2 wins a point with advantage
    if (player.id === 2 && player2.advantage) {
      handleWinner(player2);
      return;
    }

    // Player 2 wins a point with Player 1 advantage
    if (player.id === 2 && player1.advantage) {
      player1.advantage = false;
      deuce = true;
      return;
    }

    // No player has advantage
    if (player.id === 1) {
      player1.advantage = true;
    } else {
      player2.advantage = true;
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
    if (
      player1.score === 40 &&
      player2.score === 40 &&
      !player1.advantage &&
      !player2.advantage
    )
      deuce = true;
  };

  const getCurrentRoundScore = () => {
    if (player1.advantage) return `Advantage ${player1.name} `;

    if (player2.advantage) return `Advantage ${player2.name} `;

    if (deuce) return "Deuce";

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
    if (player1.gamesWon === 4 || player1.gamesWon - player2.gamesWon === 2) {
      return `${player1.name} wins`;
    }

    if (player2.gamesWon === 4 || player2.gamesWon - player1.gamesWon === 2) {
      return `${player2.name} wins`;
    }

    return "No winner yet.";
  };

  return {
    pointWonBy,
    getCurrentRoundScore,
    getGameScore,
    getMatchScore,
    getWinner,
    getStats,
    resetMatch,
  };
}
