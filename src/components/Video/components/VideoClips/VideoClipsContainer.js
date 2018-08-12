import React from 'react'
import VideoClips from './VideoClips'
import Clip from './components/Clip'

const VideoClipsContainter = (props) => {
  return (
    <VideoClips>
      {
        props.clips.map((clipId) => {
          return <Clip id={clipId} key={clipId} />
        })
      }
    </VideoClips>
  )
}

export default VideoClipsContainter
