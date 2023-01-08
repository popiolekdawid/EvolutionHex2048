import React from 'react';

type ControlsProps = {
  onMove: (direction: string) => void,
  onNewGame: () => void,
};

const Controls: React.FC<ControlsProps> = ({ onMove, onNewGame }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // Check which key was pressed and call the appropriate function
    switch (event.key) {
      case 'ArrowUp':
        onMove('up');
        break;
      case 'ArrowRight':
        onMove('right');
        break;
      case 'ArrowDown':
        onMove('down');
        break;
      case 'ArrowLeft':
        onMove('left');
        break;
      case 'n':
        onNewGame();
        break;
      default:
        break;
    }
  }

  return (
    <div className="controls" onKeyDown={handleKeyDown} tabIndex={0}>
      <button onClick={() => onMove('up')}>Move Up</button>
      <button onClick={() => onMove('right')}>Move Right</button>
      <button onClick={() => onMove('down')}>Move Down</button>
      <button onClick={() => onMove('left')}>Move Left</button>
      <button onClick={onNewGame}>New Game</button>
    </div>
  );
}

export default Controls;
