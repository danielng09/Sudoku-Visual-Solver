import SudokuSolver from '../../models/sudokuSolver';

let sudokuSolver = new SudokuSolver();

export default function(state, action) {
  return sudokuSolver.squaresToValues;
}
