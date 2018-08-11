import React, { Component } from 'react'
// import data from '../../data.json'
import { connect } from 'react-redux'
import Home from './Home'
import Playlist from '../Playlist'

class HomeContainter extends Component {
  render () {
    return (
      <Home>
        {
          this.props.searchText ? (
            <Playlist playlist={this.props.search} />
          ) : (
            <Playlist playlist={this.props.playlist} />
          )
        }
      </Home>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    playlist: state.data.playlist,
    search: state.search,
    searchText: state.searchText
  }
}

export default connect(mapStateToProps)(HomeContainter)
