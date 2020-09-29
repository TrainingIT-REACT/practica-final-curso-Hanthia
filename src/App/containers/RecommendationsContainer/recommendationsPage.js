import React, { Component } from "react";
import ReactDOM from 'react-dom';

class RecommendationPage extends Component {
  render() {
    return (
      ReactDOM.render(
      <h1>RecommendationPage.js</h1>,
      document.getElementById('root')
    )
    );
  }
}

export default RecommendationPage;