import Backtracking from './backtracking'

import { EASY_BOARD_1, EASY_BOARD_2, EASY_BOARD_3 } from '../utilities/boards.js'

export default class ConstrainedBacktracking extends Backtracking {

  /**
  * @param {Map} squares_to_values
  * @param {String} square
  * @param {String} value
  */
  _assign(squares_to_values, square, value) {
    super._assign(squares_to_values, square, value);
    this._eliminate(squares_to_values, square, value);

    return squares_to_values;
  }

  /**
  * @param {Map} squares_to_values
  * @param {String} square
  * @param {String} value
  */
  _eliminate(squares_to_values, square, value) {
    for (let peer of this.PEERS[square]) {
      let values = squares_to_values.get(peer);
      if (!values.includes(value)) { continue; }

      values = values.replace(`${value}`, "");
      squares_to_values.set(peer, values)

      switch (values.length) {
        case 0:
          return false;
        case 1:
          if (!this._eliminate(squares_to_values, peer, values[0])) { return false; }
        default:
          continue;
      }
    }

    return true;
  }
}
