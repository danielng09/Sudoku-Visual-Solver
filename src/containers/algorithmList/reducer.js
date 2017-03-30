// state is only the state that this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
    case 'ALGORITHM_SELECTED':
      return action.payload;
  }

  return state
}
