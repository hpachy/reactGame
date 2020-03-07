import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import player from "./player";
import map from "./map";

export default combineReducers({
  player,
  maps: map,
});

  // router: routerReducer,
