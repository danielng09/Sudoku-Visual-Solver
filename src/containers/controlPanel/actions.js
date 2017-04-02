import { Queue } from '../../models/algorithms';

let queue = new Queue();

function makeMove() {
    let squaresToValues = queue.shift();

    return {
      type: "UPDATE_BOARD",
      payload: squaresToValues
    }
}

export default function attemptToSolve() {
  return function(dispatch, getState) {
    if (!queue || queue.length === 0) {
      return;
    }

    dispatch(makeMove());

    setTimeout(() => {
      attemptToSolve()(dispatch, getState);
    }, 100)
  }
}
