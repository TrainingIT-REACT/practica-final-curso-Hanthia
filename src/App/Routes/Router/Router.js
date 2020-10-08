import React, { lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
// Component to define private routes
// import PrivateRoute from '../PrivateRouter/privateRouter';

// Css
import './../../App.css';
// Loader
import Loader from './../../Services/Loader';

// Api Calls
import { getAlbums } from './../../actions/album';
import { getSongs } from './../../actions/songs';

// Pages
import Login from './../../Pages/Login';
import Profile from './../../Pages/Profile';
import Home from './../../Pages/Home';
import Layout from '../../Layout/Layout';

// App Pages with lazy
const AlbumDetail = lazy(() => import('./../../Pages/AlbumDetail.js'));
const Albums = lazy(() => import('./../../Pages/Albums'));



class Router  extends React.Component {

  async componentDidMount() {
    this.props.getAlbums();
    this.props.getSongs();
  }
  
  render() {
    return(
      <BrowserRouter>
      <div className="App">
        <Layout>
        {/* Player Musics */}
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
          </Layout>
        </div>
      </BrowserRouter>
    );
  }

  
}
const mapStateToProps = (state/*, otherProps */) => {
  return {
    // user: {
    //   name: state.user.name,
    //   signedIn: state.user.signedIn
    // },
    ...state
  }
}
const mapDispatchToProps = (dispatch) => ({
  getSongs: () => dispatch(getSongs()),
  getAlbums: () => dispatch(getAlbums()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Router);