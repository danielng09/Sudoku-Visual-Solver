import { SudokuSolver } from '../../models/algorithms';

let sudokuSolver = new SudokuSolver();
let squaresToValues = sudokuSolver.parseInputBoard();

export default function(state = squaresToValues, action) {
  switch(action.type) {
    case "UPDATE_BOARD":
      return action.payload;
    case "RESET_BOARD":
      return squaresToValues;
  }

  return state;
}
