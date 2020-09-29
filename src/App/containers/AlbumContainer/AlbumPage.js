import React, { Component } from "react";
import ReactDOM from 'react-dom';

class AlbumPage extends Component {
  render() {
    return (
      ReactDOM.render(
      <h1>AlbumContainerPage.js</h1>,
      document.getElementById('root')
    )
    );
  }
}

export default AlbumPage;