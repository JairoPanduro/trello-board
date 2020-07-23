import { combineReducers } from 'redux';
import user from './home/reducer';
import board from './board/reducer';

const rootReducer = combineReducers({
  user,
  board
});

export default rootReducer;
