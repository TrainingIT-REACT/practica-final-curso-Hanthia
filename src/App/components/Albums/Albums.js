import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../../Services/Loader';
import AlbumList from './AlbumList';

class Albums extends Component {
    renderAlbums() {
        const { albums } = this.props;
    
        return (albums.isLoading) ? Loader(null) : ((albums.hasError) ? <p>Hubo un error al obtener los datos </p> :
             <AlbumList albums={albums.list} 
                    history={this.props.history}  
                    location={this.props.location} 
                    match={this.props.match} /> );
        
    }    

    render() {
        return <>
            { this.renderAlbums() }
        </>
    }
}

const mapStateToProps = (state/*, otherProps */) => {
  return {
    ...state
  }
}
  
export default connect(
    mapStateToProps,
    () => ({}),
)(Albums);
