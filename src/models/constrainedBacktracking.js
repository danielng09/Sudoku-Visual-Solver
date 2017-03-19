import Backtracking from './backtracking'

import { EASY_BOARD_1, EASY_BOARD_2, EASY_BOARD_3 } from '../utilities/boards.js'

  // parse the board
  _parseInputBoard(inputBoard) {
    let squares_to_values = new Map();
    [].forEach.call(inputBoard, (inputSquare, index) => {
      let square = this.SQUARES[index];
      squares_to_values.set(square, inputSquare === "0" ? this.DIGITS : inputSquare)
    });
export default class ConstrainedBacktracking extends Backtracking {

    return squares_to_values;
  }
}
