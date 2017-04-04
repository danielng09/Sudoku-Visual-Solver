import React, { Component } from 'react';

import Board from '../../containers/board/view.js';
import AlgorithmList from '../../containers/algorithmList/view.js';
import ControlPanel from '../../containers/controlPanel/view.js';

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
              <div className="col-lg-8 col-md-12">
                <Board />
                <ControlPanel />
              </div>

              <div className="col-lg-4 col-md-12">
                <AlgorithmList />
              </div>
            </div>

          </div>

          <div className="card-footer text-muted">
            <a href="https://github.com/danielng09" target="_blank">By Daniel Ng</a>
          </div>
        </div>
      </div>
    );
  }
}
