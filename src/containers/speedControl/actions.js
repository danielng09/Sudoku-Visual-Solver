/**
* @param {Number} speed
*/
export default function updateSolvingSpeed(speed) {
  return {
    type: "UPDATE_SOLVING_SPEED",
    payload: speed
  }
}
