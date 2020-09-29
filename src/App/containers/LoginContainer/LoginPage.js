import React, { Component } from "react";
import ReactDOM from 'react-dom';

class LoginPage extends Component {
  render() {
    return (
      ReactDOM.render(
      <h1>LoginPage.js</h1>,
      document.getElementById('root')
    )
    );
  }
}

export default LoginPage;