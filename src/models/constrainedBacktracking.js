import Backtracking from './backtracking'

import { EASY_BOARD_1, EASY_BOARD_2, EASY_BOARD_3 } from '../utilities/boards.js'

export default class ConstrainedBacktracking extends Backtracking {

  /**
  * @param {String} square
  * @param {String} value
  */
  _assign(square, value) {
    super._assign(square, value);
    this._eliminate(square, value);
  }

  _eliminate(square, value) {
    for (let peer of this.PEERS[square]) {
      let values = this.squares_to_values.get(peer);
      if (!values.includes(value)) { continue; }

      values = values.replace(`${value}`, "");
      this.squares_to_values.set(peer, values)

      switch (values.length) {
        case 0:
          return false;
        case 1:
          if (!this._eliminate(peer, values[0])) { return false; }
        default:
          continue;
      }
    }

    return true;
  }
}
