import React from 'react';
import Router from './Routes/Router/Router';

// Css
import './App.css';


const App = ({ user }) => {
  return (
    <Router user={user} />
  );
}

export default App;