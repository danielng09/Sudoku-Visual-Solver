export default function(state = false, action) {
  switch(action.type) {
    case "UPDATE_SOLVING_STATUS":
      return action.payload;
  }

  return state;
}
