import React, { lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
// Component to define private routes
// import PrivateRoute from '../PrivateRouter/privateRouter';

// Css
import './../../App.css';

// Page containers
import Login from './../../Pages/Login';
import Profile from './../../Pages/Profile';
import Home from './../../Pages/Home';
import Loader from './../../Services/Loader';

const AlbumDetail = lazy(() => import('./../../Pages/AlbumDetail.js'));
const Albums = lazy(() => import('./../../Pages/Albums'));

class Router  extends React.Component {

  render() {
    return(
      <BrowserRouter>
      <div className="App">
        <div className="row">
          <div className="col col-sm-1"><h1>Reactify Web</h1></div>
          <div className="col co-sm-11">
            <ul className="nav justify-content-around">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/login">
                  {this.props.user.signedIn ? 'Profile' : 'Login'}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link active" activeClassName="active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/albums">Albums</NavLink>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <div className="row player border border-secondary ">
            <div className="col">
              <a href="#back"><i className="fas fa-angle-left"></i></a>
            </div>
            <div className="col">
              <a href="#play"><i className="fas fa-caret-square-right"></i></a>
            </div>
            <div className="col">
              <a href="#forward"><i className="fas fa-angle-right"></i></a>
            </div>
          </div>
        </div>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/albums" exact component={Loader(Albums)}/>
            <Route path="/albums/:id([0-9]*)" component={Loader(AlbumDetail)}/>
            <Route path="/login" component={this.props.user.signedIn ? Profile : Login}/>
            {/* <PrivateRoute path="/profile" exact component={Profile}/> */}
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

  
}
const mapStateToProps = (state/*, otherProps */) => {
  return {
    user: {
      name: state.user.name,
      signedIn: state.user.signedIn
    }
  }
}
export default connect(
  mapStateToProps,
  () => ({})
)(Router);
// export default Router;