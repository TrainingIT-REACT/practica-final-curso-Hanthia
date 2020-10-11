import React, { Component } from 'react';
import { connect } from 'react-redux';
import Song from '../Songs/Song';

class Home extends Component {
    render() {
      return <>
        <h1>Canciones Recomendadas</h1>
        <ul className="list-group">
          {this.props.songs.list.slice(0,10).map(song => {
            return <Song key = {song.id}
                        song={song} 
                        history={this.props.history}  
                        location={this.props.location}
                        match={this.props.match} />
          })}
        </ul>
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
)(Home);