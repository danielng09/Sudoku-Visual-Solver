import React, { Component } from 'react';

import Board from '../../containers/board/view.js';
import AlgorithmList from '../../containers/algorithmList/view.js';

export default class App extends Component {
  render() {
    return (
      <div className="gray-bg w-100">
        <div className="card text-center w-100">
          <div className="card-header">
            <h1>Sudoku Visual Solver</h1>
          </div>

          <div className="card-block">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <Board />
              </div>

              <div className="col-lg-3 col-md-12">
                <AlgorithmList />
              </div>

            </div>
          </div>

          <div className="card-footer text-muted">
            By Daniel Ng
          </div>
        </div>
      </div>
    );
  }
}
