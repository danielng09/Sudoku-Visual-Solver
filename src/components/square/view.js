import React, { Component } from "react";
import classNames from "classnames";

import { DEFAULT_SQUARES } from "../../utilities/algorithmConstants";

require("./style.scss");

export default class Square extends Component {
  render() {
    let val = this.props.value;

    let squareClasses = classNames('square', {
      "bottom-border": ["C", "F"].includes(this.props.row),
      "right-border": ["3", "6"].includes(this.props.col),
      "light-orange-text": DEFAULT_SQUARES.has(`${this.props.row}${this.props.col}`)
    });

    return (
      <td className={squareClasses}>
        {val.length > 1 ? "" : val}
      </td>
    );
  }
}
