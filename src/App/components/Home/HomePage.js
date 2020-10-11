import React, { Component } from 'react';
import { connect } from 'react-redux';
import Song from '../Songs/SongModel';

class Home extends Component {
    render() {
      return <>
        <h1>Reactify</h1>
        <ul className="list-group">
          {this.props.songs.list.map(song => {
            return <Song key = {song.id.toString()}
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