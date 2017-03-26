import React, { Component } from 'react';

export default class Square extends Component {
  render() {
    return (
      <td>
        {this.props.value}
      </td>
    );
  }
}
