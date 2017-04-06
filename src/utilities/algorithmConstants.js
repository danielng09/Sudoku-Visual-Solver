import { SudokuSolver } from '../models/algorithms';

let sudokuSolver = new SudokuSolver();
let defaultSquaresToValues = sudokuSolver.parseInputBoard();

export const DEFAULT_SQUARES_TO_VALUES = defaultSquaresToValues;
export const SELECTABLE_ALGORITHM_NAMES = Object.freeze(["Backtracking", "ConstrainedBacktracking"]);
