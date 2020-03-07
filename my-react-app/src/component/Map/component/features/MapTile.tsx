import React, { ReactElement } from "react";
import { playerSpriteSize } from "../../../../Sprite/player/SpriteSize";
import '../utilities/map.css';

interface Props {
  tile: number;
}

const getTileSprite = (tile: number) => {
  switch (tile) {
    case 0:
      return "grass";
    case 5:
      return "rock";
    case 6:
      return "tree";
  }
};

export default function MapTile({ tile }: Props): ReactElement {
  return (
    <div
      className={`tile ${getTileSprite(tile)}`}
      style={{ height: playerSpriteSize, width: playerSpriteSize }}
    >
      {tile}
    </div>
  );
}
