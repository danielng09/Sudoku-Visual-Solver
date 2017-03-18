import SudokuSolver from './sudokuSolver'

import { EASY_BOARD_1, EASY_BOARD_2, EASY_BOARD_3 } from '../utilities/boards.js'

export default class Backtracking extends SudokuSolver {

  /**
  * @param {String} inputBoard
  */
  constructor(inputBoard = EASY_BOARD_2) {
    super(inputBoard)
    this.squares_to_values = this._parseInputBoard(inputBoard);
    this.iterations = 0;
  }

  solve() {
    this.squares_to_values = this.search(new Map(this.squares_to_values));
    console.log(`${"*".repeat(40)} DONE!!! ${"*".repeat(40)}`);
    this.prettyPrint()
    console.log("iterations: ", this.iterations);
  }

  /**
  * @param {Map} squares_to_values
  */
  search(squares_to_values) {
    if (this._isSolved(squares_to_values)) { return squares_to_values; }
    this.iterations += 1;

    let square = this._findNextSquare(squares_to_values);
    let possValues = this._getPossValuesFor(squares_to_values, square);
    if (possValues.length === 0) { return false; }

    for (let possValue of possValues) {
      let result = this.search(new Map(squares_to_values).set(square, possValue));
      if (result) { return result; }
    }

    return false;
  }

  /**
  * @param {Map} squares_to_values
  */
  _findNextSquare(squares_to_values) {
    let squares = Array.from(squares_to_values.keys());
    return [].find.call(squares, (square) => squares_to_values.get(square) === "0")
  }

  /**
  * @param {Map} squares_to_values
  * @param {String} square
  */
  _getPossValuesFor(squares_to_values, square) {
    let possValues = new Set(this.DIGITS.split(""));
    this.PEERS[square].forEach((peer) => {
      possValues.delete(squares_to_values.get(peer))
    });

    return Array.from(possValues);
  }

  /**
  * @param {Map} squares_to_values
  */
  _isSolved(squares_to_values) {
    return Array.from(squares_to_values.keys()).every((key) => {
      return squares_to_values.get(key) !== "0";
    });
  }

  /**
  * @param {String} inputBoard
  */
  _parseInputBoard(inputBoard) {
    let squares_to_values = new Map();
    [].forEach.call(inputBoard, (inputSquare, index) => {
      let square = this.SQUARES[index];
      squares_to_values.set(square, inputSquare)
    });

    return squares_to_values;
  }
}
