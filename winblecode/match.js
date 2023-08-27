// Initial State of Player object
const initialPlayer = {
  id: 0,
  name: "",
  score: 0,
  roundsWon: 0,
  gamesWon: 0,
  advantage: false,
};

// Global variables
const SCORE_DEUCE = 40;
const ROUNDS_TO_WIN = 4;
const WIN_MARGIN = 2;
const MAX_ROUNDS = 7;

export default function createMatch(player1Name, player2Name) {
  let player1 = { ...initialPlayer, id: 1, name: player1Name };
  let player2 = { ...initialPlayer, id: 2, name: player2Name };
  const players = [player1, player2];
  let deuce = false;

  // Finds the oponent given a player
  const findOponent = (player) => players.find((p) => p.id !== player.id);

  // Reset variables before new round
  const resetRound = () => {
    players.forEach((player) => {
      player.score = 0;
      player.advantage = false;
    });
    deuce = false;
  };

  // When there is a winner
  const handleWinner = (player) => {
    const oponent = findOponent(player);
    player.roundsWon += 1;
    // console.log(
    //   "--------------------------------------------------------------------"
    // );
    if (
      player.roundsWon === MAX_ROUNDS ||
      (player.roundsWon >= ROUNDS_TO_WIN &&
        player.roundsWon - oponent.roundsWon >= WIN_MARGIN)
    ) {
      console.log(
        `Game ${player.gamesWon + oponent.gamesWon + 1}: \n`,
        getGameScore()
      );
      player.gamesWon += 1;
      player.roundsWon = 0;
      oponent.roundsWon = 0;
    }

    resetRound();
  };

  // Deuce phase 40-40
  const handleDeucePhase = (player) => {
    const oponent = findOponent(player);

    // If player scores with advantage wins
    if (player.advantage) return handleWinner(player);

    // if player scores with oponent advantage is deuce
    if (oponent.advantage) {
      oponent.advantage = false;
      deuce = true;
      return;
    }

    // No ones have advantage, set player advantage to true
    player.advantage = true;
  };

  // Add score logic
  const addScore = (player) => {
    if (deuce) return handleDeucePhase(player);

    if (player.score === SCORE_DEUCE && !deuce) return handleWinner(player);

    player.score < 30 ? (player.score += 15) : (player.score += 10);
  };

  // Message helper for getGameScore and getMatchScore
  // prettier-ignore
  const message = (type) =>
    `${type} won:
    ${player1.name} ${player1[`${type.toLowerCase()}Won`]} 
    ${player2.name} ${player2[`${type.toLowerCase()}Won`]}`;

  // Deuce checker
  const checkDeuce = () =>
    player1.score === SCORE_DEUCE && player2.score === SCORE_DEUCE;

  // Public methods --------------------------------
  // Add points to a player based on id
  const pointWonBy = (id) => {
    players.forEach((player) => {
      if (player.id === id) addScore(player);
    });

    // Check if there is a deuce after giving points
    deuce = checkDeuce();
  };

  // Show current round score for both players
  const getCurrentRoundScore = () => {
    if (player1.advantage) return `Advantage ${player1.name} `;

    if (player2.advantage) return `Advantage ${player2.name} `;

    if (deuce) return "Deuce";

    return `${player1.name} ${player1.score} - ${player2.score} ${player2.name}`;
  };

  // Show global game score for both players
  const getGameScore = () => message("Rounds");

  // Show global match score for both players
  const getMatchScore = () => message("Games");

  // Show winner if there is one if not returns null
  const getWinner = () => {
    let winner = null;
    players.forEach((player) => {
      if (player.gamesWon === 2) winner = player.name;
    });
    return winner;
  };

  // Show game stats for both players
  const getStats = () => {
    players.forEach((player) =>
      console.log(`${player.name} games won: ${player.gamesWon}`)
    );
  };

  return {
    pointWonBy,
    getCurrentRoundScore,
    getGameScore,
    getMatchScore,
    getWinner,
    getStats,
  };
}
