import React from 'react';

type HeaderProps = {
  score: number,  // Current score of the game
};

const Header: React.FC<HeaderProps> = (props) => {
  const { score } = props;

  return (
    <div className="header">
      <h1>Hex 2048</h1>
      <h2>Score: {score}</h2>
    </div>
  );
}

export default Header;
