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
import Login from './../../components/Login/LoginPage';
import Profile from './../../components/Login/ProfilePage';
import Home from '../../components/Home/HomePage';
import Player from './../../components/MusicPlayer/Player';
import Layout from '../../Layout/Layout';

// App Pages with lazy
const AlbumDetail = lazy(() => import('../../components/Albums/AlbumDetailPage'));
const Albums = lazy(() => import('../../components/Albums/AlbumsPage'));



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
        <Player />
        {/* Routers */}
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/albums" exact component={Loader(Albums)}/>
            <Route path="/albums/:id" component={Loader(AlbumDetail)}/>
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