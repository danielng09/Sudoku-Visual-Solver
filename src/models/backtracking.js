import SudokuSolver from './sudokuSolver'

import { EASY_BOARD_1, EASY_BOARD_2, EASY_BOARD_3 } from '../utilities/boards.js'

export default class Backtracking extends SudokuSolver {
  constructor(inputBoard = EASY_BOARD_2) {
    super(inputBoard)
    this.squares_to_values = this._parseInputBoard(inputBoard);
    this.iterations = 0;
    this.prettyPrint()
  }

  solve() {
    this.squares_to_values = this.search(new Map(this.squares_to_values));
    console.log(`${"*".repeat(40)} DONE!!! ${"*".repeat(40)}`);
    this.prettyPrint()
    console.log("iterations: ", this.iterations);
  }

  // search (dfs)
  search(squares_to_values) {
    if (this._isSolved(squares_to_values)) { return squares_to_values; }

    let square = this._findNextSquare(squares_to_values);
    // let possValues = this.DIGITS.split("")
    let possValues = this._getPossValuesFor(squares_to_values, square);
    if (possValues.length === 0) { return false; }

    for (var count = 0; count < possValues.length; count ++) {
      // if (this._validPlacement(squares_to_values, square, possValues[count])) {
        let result = this.search(new Map(squares_to_values).set(square, possValues[count]));
        if (result) { return result; }
      // }
    }

    return false;
  }

  _findNextSquare(squares_to_values) {
    let squares = Array.from(squares_to_values.keys());
    return [].find.call(squares, (square) => squares_to_values.get(square) === "0")
  }

  _getPossValuesFor(squares_to_values, square) {
    let possValues = new Set(this.DIGITS.split(""));
    this.PEERS[square].forEach((peer) => {
      possValues.delete(squares_to_values.get(peer))
    });

    return Array.from(possValues);
  }

  _isSolved(squares_to_values) {
    return Array.from(squares_to_values.keys()).every((key) => {
      return squares_to_values.get(key) !== "0";
    });
  }

  // _validPlacement(squares_to_values = this.squares_to_values, square, value) {
  //   if (!squares_to_values.get(square).includes(value)) { return false; }
  //
  //   for (let peer of this.PEERS[square]) {
  //     let values = squares_to_values.get(peer);
  //
  //     if (values.includes(String(value)) && values.length === 1) {
  //       return false;
  //     }
  //   }
  //
  //   return true
  // }

  _parseInputBoard(inputBoard) {
    let squares_to_values = new Map();
    [].forEach.call(inputBoard, (inputSquare, index) => {
      let square = this.SQUARES[index];
      squares_to_values.set(square, inputSquare)
    });

    return squares_to_values;
  }

}
