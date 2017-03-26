import { combineReducers } from 'redux';
import BoardReducer from './containers/board/reducer';

const rootReducer = combineReducers({
  squaresToValues: BoardReducer
});

export default rootReducer;
