import Queue from './queue';

import { ROWS, COLS, EASY_BOARD_1, EASY_BOARD_2, EASY_BOARD_3 } from '../utilities/boardConstants.js'

export default class SudokuSolver {

  MAX_ITERATIONS = 1000;
  COLS = COLS;
  ROWS = ROWS;
  DIGITS = this.COLS;
  SQUARES = Object.freeze(this._product(this.ROWS, this.COLS));
  UNIT_LIST = Object.freeze(this._getUnitList());
  UNITS = this._getUnits();
  PEERS = this._getPeers();

  /**
  * @param {String} inputBoard
  */
  constructor(inputBoard = EASY_BOARD_3) {
    this.inputBoard = inputBoard;
    this.queue = new Queue();
  }

  _getUnitList() {
    // get subsquare units
    let subsquareUnits = [];
    ["ABC", "DEF", "GHI"].forEach((rowGroup) => {
      ["123", "456", "789"].forEach((colGroup) => {
        subsquareUnits.push(this._product(rowGroup, colGroup));
      })
    })

    // get row and col units
    let colUnits = [].map.call(this.COLS, (col) => this._product(this.ROWS, col));
    let rowUnits = [].map.call(this.ROWS, (row) => this._product(row, this.COLS));

    return colUnits.concat(rowUnits, subsquareUnits);
  }

  _getUnits() {
    let units = {};
    this.SQUARES.forEach((square) => {
      units[square] = this.UNIT_LIST.filter((unit) => unit.includes(square));
    })

    return units;
  }

  _getPeers() {
    let peers = {};
    this.SQUARES.forEach((square) => {
      peers[square] = new Set(this.UNITS[square].reduce((a, b) => a.concat(b)));
      peers[square].delete(square);
    })

    return peers;
  }

  /**
  * @param {Array} group1
  * @param {Array} group2
  */
  _product(group1, group2) {
    var output = [];
    [].forEach.call(group1, (ele1) => {
      [].forEach.call(group2, (ele2) => {
        output.push(String(ele1) + String(ele2));
      })
    })

    return output;
  }

  parseInputBoard() {
    let squaresToValues = new Map();
    this.SQUARES.forEach((square) => squaresToValues.set(square, this.DIGITS));
    this.squaresToValues = squaresToValues;

    [].forEach.call(this.inputBoard, (inputValue, index) => {
      if (inputValue !== "0") {
        let square = this.SQUARES[index];
        this._assign(this.squaresToValues, square, inputValue);
      }
    })

    return squaresToValues;
  }

  /**
  * @param {Map} squaresToValues
  * @param {String} square
  * @param {String} value
  */
  _assign(squaresToValues, square, value) {
    return squaresToValues.set(square, value);
  }

  /**
  * @param {Map} squaresToValues
  */
  prettyPrint(squaresToValues = this.squaresToValues) {
    console.log(new Array(3).join('\n'))

    console.log(`${"*".repeat(46)} BOARD ${"*".repeat(46)}`);

    // print column headers
    var colHeader = ["  "];
    [].forEach.call(this.COLS, (col) => {
      colHeader.push(`${" ".repeat(4)}${col}${" ".repeat(4)}`)
      if (["3","6"].includes(col)) { colHeader.push(" ") }
    })
    console.log(`${colHeader.join(" ")}`);

    [].forEach.call(this.ROWS, (row) => {
      let output = [];
      output.push(`${row} `);
      [].forEach.call(this.COLS, (col) => {
        let values = squaresToValues.get(`${row}${col}`);
        while (values.length < 9) {
          if (values.length % 2 === 0) {
            values = " " + values;
          } else {
            values += " ";
          }

        }
        output.push(values);

        if (["3", "6"].includes(col)) { output.push("|"); }
      })
      console.log(output.join(" "))

      // print row subsquare line
      if (["C", "F"].includes(row)) {
        var line = [];
        for (var count = 0; count < 3; count ++) {
          line.push(`${"-".repeat(31)}`);
        }
        console.log(`  ${line.join("+")}`);
      }
    })

    console.log("")
  }

}
