import React, { Component } from 'react'
import Video from './Video'
import VideoPlayer from './components/VideoPlayer'
import VideoClips from './components/VideoClips'

class VideoContainter extends Component {
  render () {
    return (
      <Video>
        <VideoPlayer
            autoplay={false}
            src={'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'}
            title={'holi'}
          />
        <VideoClips />
      </Video>
    )
  }
}

export default VideoContainter
