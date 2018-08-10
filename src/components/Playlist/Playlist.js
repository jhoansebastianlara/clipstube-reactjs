import React from 'react'
import Media from './components/Media'
import './Playlist.css'

const Playlist = (props) => {
  return (
    <div className="Playlist">
      {
        props.playlist.map((item) => {
          return <Media {...item} key={item.id} />
        })
      }
    </div>
  )
}

export default Playlist
