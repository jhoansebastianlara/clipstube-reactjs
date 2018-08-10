import React from 'react'
import './VideoPlayer.css'

const VideoPlayer = (props) => {
  return (
    <div
      className="VideoPlayer"
      ref={props.setRef}
    >
      {props.children}
    </div>
  )
}

export default VideoPlayer
