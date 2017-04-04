import { Queue } from '../../models/algorithms';

let queue = new Queue();

function makeMove() {
  let squaresToValues = queue.shift();

  return {
    type: "UPDATE_BOARD",
    payload: squaresToValues
  }
}

/**
* @param {Boolean} status
*/
function updateSolvingStatus(status) {
  return {
    type: "UPDATE_SOLVING_STATUS",
    payload: status
  }
}

function attemptSolve() {
  return function(dispatch, getState) {

    // return if queue is empty
    if (!queue || queue.length === 0 || !getState().solvingStatus) {
      return;
    }

    // make move
    dispatch(makeMove());

    // continue making moves
    setTimeout(() => {
      attemptSolve()(dispatch, getState);
    }, 100)
  }
}

/**
* @param {Boolean} status
*/
export function toggleSolvingStatus(status) {
  return function(dispatch, getState) {

    // do nothing if status is the same
    if (getState.solvingStatus === status) {
      return;
    }

    dispatch(updateSolvingStatus(status));

    // attempt to solve if 'play'
    if (getState().solvingStatus) {
      attemptSolve()(dispatch, getState);
    }

  }
}

export function resetBoard() {
  return {
    type: "RESET_BOARD",
    payload: null
  }
}
