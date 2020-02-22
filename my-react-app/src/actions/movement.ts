export const directionMoveAction = (newPosition: {
  x: number;
  y: number;
}): {
  type: string;
  payload: { position: { x: number; y: number } };
} => ({
  type: "MOVE_PLAYER",
  payload: {
    position: newPosition
  }
});
