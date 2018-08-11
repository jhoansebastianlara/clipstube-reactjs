import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import Playlist from '../Playlist'

class HomeContainter extends Component {
  render () {
    const {
      searchText,
      searchResults,
      playlist
    } = this.props
    const list = searchText ? searchResults : playlist
    return (
      <Home>
        <Playlist playlist={list} />
      </Home>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    playlist: state.data.playlistArray,
    searchResults: state.data.searchResults,
    searchText: state.data.searchText
  }
}

export default connect(mapStateToProps)(HomeContainter)
