import React, { Component } from "react";
import ReactDOM from 'react-dom';

class PlayerPage extends Component {
  render() {
    return (
      ReactDOM.render(
      <h1>PlayerPage.js</h1>,
      document.getElementById('root')
    )
    );
  }
}

export default PlayerPage;