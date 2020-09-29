import React, { Component } from "react";
import ReactDOM from 'react-dom';

class UserPage extends Component {
  render() {
    return (
      ReactDOM.render(
      <h1>UserPage.js</h1>,
      document.getElementById('root')
    )
    );
  }
}

export default UserPage;