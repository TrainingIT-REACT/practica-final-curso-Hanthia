import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MusicNote from '@material-ui/icons/MusicNote';


const styles = theme => ({
  appBar: {
    position: 'static',
  },
  toolbarTitle: {
    flex: 1,
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '10px',
    marginRight: '10px',
  }
});

const Navbar = ({ classes, user }) => (
  <AppBar position="static" className= {classes.appBar}>
    <Toolbar>
      <MusicNote fontSize="large" className= {classes.icon} />
      <Typography variant="h5" color="inherit" noWrap className={classes.toolbarTitle}>
        <NavLink className={classes.link} activeClassName="active" exact to="/">Reactify Web</NavLink>
      </Typography>
      <div>
        <NavLink activeClassName="active" className={classes.link} exact to="/albums">Albums</NavLink>
        <NavLink activeClassName="active" className={classes.link} exact to="/player">Player</NavLink>
       { user ? <NavLink className={classes.link} activeClassName="active" to="/login"> Profile</NavLink> : 
        <NavLink className={classes.link} activeClassName="active" to="/login"> Login</NavLink>}
      </div>
    </Toolbar>
  </AppBar>
);

const mapStateToProps = (state/*, otherProps */) => ({
  user: state.user.user,
})

const mapDispatchToProps = (dispatch) => ({
  //
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Navbar);