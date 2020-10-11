import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
// Component to define private routes
// import PrivateRoute from '../PrivateRouter/privateRouter';

// Loader
import Loader from './../../Services/Loader';


// App Pages with lazy
const Login = lazy(() => import('./../../components/Login/LoginPage'));
const Profile = lazy(() => import('./../../components/Login/ProfilePage'));
const Home = lazy(() => import('../../components/Home/HomePage'));
const AlbumDetail = lazy(() => import('../../components/Albums/AlbumDetail'));
const Albums = lazy(() => import('../../components/Albums/Albums'));


const Router = ({user}) => {
  return <>
      <Suspense fallback={Loader(null)}>
          <Switch>
            <Route path="/"  exact component={Loader(Home)}/>
            <Route path="/login"  exact component={user.signedIn ? Loader(Profile) : Loader(Login)}/>
            {/* <PrivateRoute path="/profile"  component={Profile}/> */}
            <Route path="/albums"  exact component={Loader(Albums)}/>
            <Route path="/albums/:id([0-9]*)" exact  component={Loader(AlbumDetail)}/>
            <Redirect to="/" />
           </Switch>
      </Suspense> 
  </>
};
const mapStateToProps = (state/*, otherProps */) => {
  return {
    ...state
  }
}

export default connect(
  mapStateToProps,
  () => ({}),
)(Router);