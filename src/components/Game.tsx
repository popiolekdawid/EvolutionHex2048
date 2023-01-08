import React, { useState } from 'react';
import Board from './Board';
import Controls from './Controls';
import Header from './Header';
import { updateBoard } from '../utils/updateBoard';
import './style.css';

type GameState = {
  board: number[][],  // 2D array representing the game board
  score: number,      // Current score
  over: boolean,      // Flag for whether the game is over
};

const Game: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    board: [[0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0]],  // Initialize game board with all tiles set to 0
    score: 0,
    over: false,
  });

  const handleMove = (direction: string) => {
    // Update the game board based on the user input
    const updatedBoard = updateBoard(gameState.board, direction);

    // Update the game state based on the user input
    setGameState((prevState) => {
      return { ...prevState, board: updatedBoard };
    });
  }


  const handleNewGame = () => {
    // Reset the game state to start a new game
    setGameState({
      board: [[0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0]],  // Initialize new game board with all tiles set to 0
      score: 0,
      over: false,
    });
  }

  const handleUserInput = (updatedBoard: number[][]) => {
    // Update the game state based on the user input
    setGameState((prevState) => {
      return { ...prevState, board: updatedBoard };
    });
  }

  return (
    <div className="game">
      <Header score={gameState.score} />
      <Board board={gameState.board} onUserInput={handleUserInput} />
      <Controls onNewGame={handleNewGame} onMove={handleMove}/>
    </div>
  );
}

export default Game;