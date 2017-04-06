export default function(state = 1, action) {
  switch(action.type) {
    case "UPDATE_SOLVING_SPEED":
      return action.payload;
  }

  return state;
}
