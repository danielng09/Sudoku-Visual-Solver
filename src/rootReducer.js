import { combineReducers } from 'redux';
import BoardReducer from './containers/board/reducer';

const rootReducer = combineReducers({
  board: BoardReducer
});

export default rootReducer;
