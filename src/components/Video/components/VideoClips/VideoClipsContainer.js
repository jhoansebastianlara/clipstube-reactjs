import React from 'react'

import VideoClips from './VideoClips'
import ClipsHeader from './components/ClipsHeader'
import Clip from './components/Clip'

const VideoClipsContainter = (props) => {
  return (
    <VideoClips>
      <ClipsHeader />
      <div className="Clips-container">
        {
          props.clips.map((clipId) => {
            return <Clip id={clipId} key={clipId} />
          })
        }
      </div>
    </VideoClips>
  )
}

export default VideoClipsContainter
