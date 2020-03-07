import { store } from "../../../../config/store";
import { directionMoveAction } from "../../../../actions/movement";
import { playerSpriteSize } from "../../../../Sprite/player/SpriteSize";
import { MAP_HEIGHT, MAP_WIDTH } from "../../../../constants";

export const handleMovement = (player: Function) => {
  const getNewPosition = (
    direction: string,
    oldPos: { x: number; y: number }
  ): { x: number; y: number } => {
    if (direction === "WEST")
      return { x: oldPos.x - playerSpriteSize, y: oldPos.y };
    else if (direction === "NORTH")
      return { x: oldPos.x, y: oldPos.y - playerSpriteSize };
    else if (direction === "EAST")
      return { x: oldPos.x + playerSpriteSize, y: oldPos.y };
    else if (direction === "SOUTH")
      return { x: oldPos.x, y: oldPos.y + playerSpriteSize };
    return { x: oldPos.x, y: oldPos.y };
  };

  const observeImpassable = (
    oldPos: { x: number; y: number },
    newPos: { x: number; y: number }
  ) => {
    if (
      newPos.x >= 0 &&
      newPos.x <= MAP_WIDTH - playerSpriteSize &&
      newPos.y >= 0 &&
      newPos.y <= MAP_HEIGHT - playerSpriteSize
    )
      return newPos;
    else return oldPos;
  };

  const observeBoundaries = (
    oldPos: { x: number; y: number },
    newPos: { x: number; y: number }
  ) => {
    if (
      newPos.x >= 0 &&
      newPos.x <= MAP_WIDTH - playerSpriteSize &&
      newPos.y >= 0 &&
      newPos.y <= MAP_HEIGHT - playerSpriteSize
    )
      return newPos;
    else return oldPos;
  };

  const directionMove = (direction: string) => {
    const oldPos = store.getState().player.position;
    let newPos: { x: number; y: number } = getNewPosition(direction, oldPos);
    newPos = observeBoundaries(oldPos, newPos);
    store.dispatch(directionMoveAction(newPos));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        return directionMove("WEST");
      case 38:
        return directionMove("NORTH");
      case 39:
        return directionMove("EAST");
      case 40:
        return directionMove("SOUTH");
      default:
        return player;
    }
  };

  window.addEventListener("keydown", (e) => {
    handleKeyDown(e);
  });

  return player;
};
