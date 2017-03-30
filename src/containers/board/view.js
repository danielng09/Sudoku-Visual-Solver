import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ROWS, COLS } from '../../utilities/constants';
import Square from '../../components/square/view';

class Board extends Component {

  renderRows() {
    let board = this;
    return [].map.call(ROWS, (row) => {
      return (
        <tr key={row}>{this.renderCols(row)}</tr>
      )
    });
  }

  renderCols(row) {
    return [].map.call(COLS, (col) => {
      return (
        <Square
          key={`${row}${col}`}
          col={col}
          row={row}
          value={this.props.squaresToValues.get(`${row}${col}`)} />
      )
    })
  }

  render() {
    return(
      <table className="table table-bordered table-inverse board">
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {
    squaresToValues: state.squaresToValues
  }
}

export default connect(mapStateToProps)(Board);
