import React from 'react'
import './VideoClips.css'

function VideoClips(props) {
  return (
    <div className="VideoClips">
      {props.children}
    </div>
  )
}

export default VideoClips
