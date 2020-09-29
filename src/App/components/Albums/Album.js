import React, { Component } from "react";
import ReactDOM from 'react-dom';

class Album extends Component {
  render() {
    return (
      ReactDOM.render(
      <h1>Album.js</h1>,
      document.getElementById('root')
    )
    );
  }
}

export default Album;