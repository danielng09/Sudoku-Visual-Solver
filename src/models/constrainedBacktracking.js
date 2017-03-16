import SudokuSolver from './sudokuSolver'

export default class ConstrainedBacktracking extends SudokuSolver {

  // parse the board
  _parseInputBoard(inputBoard) {
    let squares_to_values = new Map();
    [].forEach.call(inputBoard, (inputSquare, index) => {
      let square = this.SQUARES[index];
      squares_to_values.set(square, inputSquare === "0" ? this.DIGITS : inputSquare)
    });

    return squares_to_values;
  }
}
