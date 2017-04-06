import { combineReducers } from 'redux';
import BoardReducer from './containers/board/reducer';
import AlgorithmListReducer from './containers/algorithmList/reducer';
import SolvingStatus from './containers/ControlPanel/reducer';
import SolvingSpeed from './containers/speedControl/reducer';

const rootReducer = combineReducers({
  board: BoardReducer,
  selectedAlgorithm: AlgorithmListReducer,
  solvingStatus: SolvingStatus,
  solvingSpeed: SolvingSpeed
});

export default rootReducer;
