import React, { Component } from "react";
import ReactDOM from 'react-dom';

class Albums extends Component {
  render() {
    return (
      ReactDOM.render(
      <h1>Albums.js</h1>,
      document.getElementById('root')
    )
    );
  }
}

export default Albums;