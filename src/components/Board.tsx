import React from 'react';
import Tile from './Tile';

type BoardProps = {
  board: number[][],  // 2D array representing the game board
  onUserInput: (input: number[][]) => void,  // Function for handling user input
};

const Board: React.FC<BoardProps> = (props) => {
  const { board, onUserInput } = props;

  

  // Render a Tile component for each element in the board array
  // Render a Tile component for each element in the board array
  const renderTiles = () => {
    return board.map((row, rowIndex) => {
      return (
        <div className="row" key={`row-${rowIndex}`}>
          {row.map((value, colIndex) => {
            return (
              <Tile
                key={`tile-${rowIndex}-${colIndex}`} //unique key for every tile
                value={value}
                position={{ row: rowIndex, col: colIndex }}
              />
            );
          })}
        </div>
      );
    });
  }


  return (
    <div className="board">
      {renderTiles()}
    </div>
  );
}

export default Board;

