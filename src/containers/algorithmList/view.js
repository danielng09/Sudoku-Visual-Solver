import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAlgorithm } from './actions';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

require("./style.scss");

import { SELECTABLE_ALGORITHM_NAMES } from "../../utilities/algorithmConstants";

class AlgorithmList extends Component {
  renderList() {
    return ALGORITHM_NAMES.map((algorithmName) => {
      let algoClass = classNames("btn", "btn-primary", {
        active: this.props.activeAlgorithm == algorithmName
      })
      return (
        <div
          key={algorithmName}
          className={algoClass}
          onClick={() => this.props.selectAlgorithm(algorithmName)}>
          {algorithmName}
        </div>
      )
    });
  }

  render() {
    return (
      <div className="btn-group-vertical">
        {this.renderList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeAlgorithm: state.activeAlgorithm
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectAlgorithm: selectAlgorithm}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AlgorithmList);
