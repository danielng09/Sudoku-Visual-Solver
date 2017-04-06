import { SudokuSolver } from '../models/algorithms';

let sudokuSolver = new SudokuSolver();
let defaultSquaresToValues = sudokuSolver.parseInputBoard();
let defaultSquares = Array.from(defaultSquaresToValues.keys()).filter(square => {
  return defaultSquaresToValues.get(square).length === 1;
})

export const DEFAULT_SQUARES_TO_VALUES = defaultSquaresToValues;
export const DEFAULT_SQUARES = new Set(defaultSquares);
export const SELECTABLE_ALGORITHM_NAMES = Object.freeze(["Backtracking", "ConstrainedBacktracking"]);
