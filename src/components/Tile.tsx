import React from 'react';

type TileProps = {
  key: string,            // Unique key for the tile
  value: number,          // Value of the tile
  position: { row: number, col: number },  // Position of the tile
}

const Tile: React.FC<TileProps> = (props) => {
  const { key, value, position } = props;
  
  return (
    <div className="tile" key={key} >
      {value}
    </div>
  );
}

export default Tile;
