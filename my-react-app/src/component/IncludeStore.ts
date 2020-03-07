export interface IStore {
  player: {
    position: {
      y: number;
      x: number;
    };
  };
  maps: {
    listMap: {
      [key: string]: number[][];
    };
    mapSelected: number[][];
  };
}
