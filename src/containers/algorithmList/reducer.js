import { ALGORITHM_NAMES } from '../../utilities/constants';

export default function(state = ALGORITHM_NAMES[0], action) {

  switch(action.type) {
    case 'ALGORITHM_SELECTED':
      return action.payload;
  }

  return state
}
