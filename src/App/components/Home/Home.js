// Listado de musica recomendada
import React, { Component } from "react";
import ReactDOM from 'react-dom';

class Home extends Component {
  render() {
    return (
      ReactDOM.render(
      <h1>Home.js</h1>,
      document.getElementById('root')
    )
    );
  }
}

export default Home;