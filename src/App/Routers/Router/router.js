import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Component to define private routes
// import PrivateRoute from '../PrivateRouter/privateRouter';

//Layout
import Layout from './../../components/Layout/Layout/layout';

// Page containers
import AlbumsPage from '../../containers/AlbumsContainer/albumsPages';
import LoginPage from '../../containers/LoginContainer/LoginPage';

const AlbumPage = React.lazy(() => import('../../containers/AlbumContainer/AlbumPage'));
const PlayerPage = React.lazy(() => import('../../containers/PlayerContainer/playerPage'));
const UserPage = React.lazy(() => import('../../containers/UserContainer/UserPage'));

class Router extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<div> Loading...</div>}>
            <Switch>
              <Route path="/" exact component={AlbumsPage}/>
              <Route path="/albums" exact component={AlbumsPage}/>
              <Route path="/albums/:id" exact component={AlbumPage}/>
              <Route path="/player" exact component={PlayerPage}/>
              <Route path="/login" exact component={LoginPage}/>
              {/* <PrivateRoute path="/profile" exact component={UserPage}/> */}
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    );
  }
}

  
export default Router;