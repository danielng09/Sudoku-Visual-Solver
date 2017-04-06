import { Queue, Backtracking } from "../../models/algorithms";
import { getMatchingAlgorithm } from "../../utilities/helpers";

let queue = new Queue();

/**
* @param {String} algorithmName
*/
export function selectAlgorithm(algorithmName) {
  return {
    type: "SELECT_ALGORITHM",
    payload: algorithmName
  }
}

/**
* @param {String} algorithmName
*/
export function runSolver(algorithmName) {
  queue.reset()

  // get algorithm instance
  let algorithmClass = getMatchingAlgorithm(algorithmName);
  let algorithm = new algorithmClass;
  algorithm.solve();
}

/**
* @param {String} algorithmName
*/
export function selectAndRunAlgorithm(algorithmName) {
  return function(dispatch, getState) {

    runSolver(algorithmName)

    dispatch(selectAlgorithm(algorithmName));

  }
}
