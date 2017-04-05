export default function(state = null, action) {

  switch(action.type) {
    case 'SELECT_ALGORITHM':
      return action.payload;
  }

  return state
}
