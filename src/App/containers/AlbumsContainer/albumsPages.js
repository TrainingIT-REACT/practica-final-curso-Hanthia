import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginTop: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

class AlbumPage extends Component {
  constructor(props) {
    super(props);

  }
    render() {
      return (
        ReactDOM.render(
        <h1>AlbumsPage.js</h1>,
        document.getElementById('root')
      )
      );
    }
  }
  
export default AlbumPage;