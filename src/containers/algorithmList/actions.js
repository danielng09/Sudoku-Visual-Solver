import { Queue, Backtracking } from '../../models/algorithms';

let queue = new Queue();

export function selectAlgorithm(algorithmName) {
  let backtracking = new Backtracking();
  backtracking.solve();

  return {
    type: "SELECT_ALGORITHM",
    payload: algorithmName
  }

}
