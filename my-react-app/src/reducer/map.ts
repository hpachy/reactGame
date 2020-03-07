import * as mapList from "../data/map/1";

interface IlistMapType {
  [key: string]: number[][];
}

interface maps {
  listMap: IlistMapType;
  mapSelected: number[][];
}

const initialState: maps = {
  listMap: mapList,
  mapSelected: mapList.tiles_1
};

const mapReducer = (
  state = initialState,
  action: { type: string; payload: { map: string } }
) => {
  switch (action.type) {
    case "SWITCH_MAP":
      for (
        let index: number = 0;
        index < Object.keys(mapList).length;
        index++
      ) {
        if (Object.keys(mapList)[index] === action.payload.map) {
          // @ts-ignore
          state.mapSelected = mapList[action.payload.map];
          // @ts-ignore
          console.log('mapList[action.payload.map]',Object.keys(mapList)[index], state)
        }
      }
      return {...state};
    default:
      return state;
  }
};

export default mapReducer;
