import { combineReducers } from 'redux';
import BoardReducer from './containers/board/reducer';
import AlgorithmListReducer from './containers/algorithmList/reducer';
import SolvingStatus from './containers/ControlPanel/reducer';

const rootReducer = combineReducers({
  board: BoardReducer,
  activeAlgorithm: AlgorithmListReducer,
  solvingStatus: SolvingStatus
});

export default rootReducer;
