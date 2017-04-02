import { Queue, Backtracking } from '../../models/algorithms';

let queue = new Queue();

export function selectAlgorithm(algorithmName) {
  let backtracking = new Backtracking();
  backtracking.solve();

  return {
    type: "ALGORITHM_SELECTED",
    payload: algorithmName
  }

}
