import React from 'react';
import Router from './Routes/Router/Router';
import store from './store';
import { Provider } from "react-redux";

// Css
import './App.css';


// const App = ({ user }) => {
//   return (
//     <Router user={user} />
//   );
// }
const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
export default App;