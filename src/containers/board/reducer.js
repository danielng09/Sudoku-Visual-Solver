import { DEFAULT_SQUARES_TO_VALUES } from '../../utilities/algorithmConstants';

export default function(state = DEFAULT_SQUARES_TO_VALUES, action) {
  switch(action.type) {
    case "UPDATE_BOARD":
      return action.payload;
    case "RESET_BOARD":
      return DEFAULT_SQUARES_TO_VALUES;
  }

  return state;
}
