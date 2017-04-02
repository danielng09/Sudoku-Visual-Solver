import { SudokuSolver } from '../../models/algorithms';

let sudokuSolver = new SudokuSolver();

export default function(state, action) {
  return sudokuSolver.squaresToValues;
}
