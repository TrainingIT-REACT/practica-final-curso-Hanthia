import React from 'react';
import { connect } from 'react-redux';
import SongsList from '../Songs/SongsList';

const AlbumDetail = ({songs, history, location, match}) => {
  
  return (songs.isLoading) ? <div>Cargando ....</div> : 
    ((songs.hasError) ? <p>Hubo un error al obtener los datos</p> : 
            <SongsList history={history}  
                location={location} 
                match={match} /> )
  
}

const mapStateToProps = (state/*, otherProps */) => {
    return {
      ...state
    }
  }
  
export default connect(
    mapStateToProps,
    () => ({})
)(AlbumDetail);
