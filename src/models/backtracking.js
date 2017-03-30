import SudokuSolver from './sudokuSolver'

export default class Backtracking extends SudokuSolver {

  /**
  * @param {String} inputBoard
  */
  constructor(squaresToValues) {
    this.squaresToValues = squaresToValues;
    this.iterations = 0;
  }

  solve() {
    this.squaresToValues = this.search(new Map(this.squaresToValues));
    this.prettyPrint()
    console.log("iterations: ", this.iterations);
  }

  /**
  * @param {Map} squaresToValues
  */
  search(squaresToValues) {
    if (this._isSolved(squaresToValues)) { return squaresToValues; }
    this.iterations += 1;

    let square = this._findNextSquare(squaresToValues);
    let possValues = this._getPossValuesFor(squaresToValues, square);
    if (possValues.length === 0) { return false; }

    for (let possValue of possValues) {
      let newSquaresToValues = this._assign(new Map(squaresToValues), square, possValue);
      let result = this.search(newSquaresToValues);
      if (result) { return result; }
    }

    return false;
  }

  /**
  * @param {Map} squaresToValues
  */
  _findNextSquare(squaresToValues) {
    let sortedSquares = [...squaresToValues.entries()]
    sortedSquares.sort((a, b) => {
        if (a[1].length === 1 ) {
          return 1;
        } else if (b[1].length === 1) {
          return -1;
        } else {
          return a[1].length - b[1].length || a[0].localeCompare(b[0]);
        }
    });

    return sortedSquares[0][0];
  }

  /**
  * @param {Map} squaresToValues
  * @param {String} square
  */
  _getPossValuesFor(squaresToValues, square) {
    let possValues = new Set(this.DIGITS.split(""));
    this.PEERS[square].forEach((peer) => {
      possValues.delete(squaresToValues.get(peer))
    });

    return Array.from(possValues);
  }

  /**
  * @param {Map} squaresToValues
  */
  _isSolved(squaresToValues = this.squaresToValues) {
    return Array.from(squaresToValues.keys()).every((key) => {
      return squaresToValues.get(key).length === 1;
    });
  }

}
