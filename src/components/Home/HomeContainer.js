import React, { Component } from 'react'
import data from '../../data.json'
// components
import Home from './Home'
import Playlist from '../Playlist'

class HomeContainter extends Component {
  render () {
    return (
      <Home>
        <Playlist playlist={data.playlist} />
      </Home>
    )
  }
}

export default HomeContainter
