import React from 'react';
import { connect } from 'react-redux';
import SongsList from './../Model/SongList';

const AlbumDetail = ({songs, history, location, match}) => {
  if (songs.isLoading) {
    return <p>Cargando...</p>
  } else if (songs.error) {
    return <p>Hubo un error al obtener los datos :(</p>
  } else {
    return  <SongsList songs={songs.songs} 
                       history={history}  
                       location={location} 
                       match={match} /> 
  }   
}

const mapStateToProps = (state/*, otherProps */) => {
    console.log(state);
    return {
      ...state
    }
  }
  
export default connect(
    mapStateToProps,
    () => ({})
)(AlbumDetail);