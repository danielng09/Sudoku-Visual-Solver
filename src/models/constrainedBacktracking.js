import Backtracking from './backtracking'

import { EASY_BOARD_1, EASY_BOARD_2, EASY_BOARD_3 } from '../utilities/constants.js'

export default class ConstrainedBacktracking extends Backtracking {

  /**
  * @param {Map} squaresToValues
  * @param {String} square
  * @param {String} value
  */
  _assign(squaresToValues, square, value) {
    super._assign(squaresToValues, square, value);
    this._eliminate(squaresToValues, square, value);

    return squaresToValues;
  }

  /**
  * @param {Map} squaresToValues
  * @param {String} square
  * @param {String} value
  */
  _eliminate(squaresToValues, square, value) {
    for (let peer of this.PEERS[square]) {
      let values = squaresToValues.get(peer);
      if (!values.includes(value)) { continue; }

      values = values.replace(`${value}`, "");
      squaresToValues.set(peer, values)

      switch (values.length) {
        case 0:
          return false;
        case 1:
          if (!this._eliminate(squaresToValues, peer, values[0])) { return false; }
        default:
          continue;
      }
    }

    return true;
  }
}
