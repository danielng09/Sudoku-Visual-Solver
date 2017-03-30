import { combineReducers } from 'redux';
import BoardReducer from './containers/board/reducer';
import AlgorithmListReducer from './containers/algorithmList/reducer'

const rootReducer = combineReducers({
  squaresToValues: BoardReducer,
  activeAlgorithm: AlgorithmListReducer
});

export default rootReducer;
