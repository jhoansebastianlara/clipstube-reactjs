import React, { Component } from 'react'
import VideoPlayer from './VideoPlayer'
import Player from './components/Player'
import Title from './components/Title'
import Controls from './components/Controls'
import Spinner from './components/Spinner'
import PlayPause from './components/PlayPause'
import Timer from './components/Timer'
import ProgressBar from './components/ProgressBar'
import Volume from './components/Volume'
import FullScreen from './components/FullScreen'

class VideoPlayerContainter extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false
  }

  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }

  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      duration: this.video.duration,
      pause: (!this.props.autoplay)
    })
  }

  handleTimeUpdate = event => {
    this.video && this.setState({
      currentTime: this.video.currentTime
    })
  }

  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }

  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }

  handlePause = event => {
    this.setState({
      pause: true
    })
  }

  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }

  handleVolumeChange = event => {
    this.video.volume = event.target.value
  }

  handleFullScreenClick = event => {
    if (!document.webkitIsFullScreen) {
      this.player.webkitRequestFullscreen()
    } else {
      document.webkitExitFullscreen()
    }
  }

  setRef = element => {
    this.player = element
  }

  // lifecycle

  componentWillReceiveProps (nextProps) {
    const currentVideoClip = this.props.videoClip
    const newVideoClip = nextProps.videoClip
    if (currentVideoClip.id &&
      currentVideoClip.id !== newVideoClip.id) {
      this.setState({
        pause: (!this.props.autoplay)
      })
    }
  }

  render () {
    const {videoClip} = this.props
    let title = this.props.data.title
    let videoSrc = this.props.data.src

    // if there is videoClip, so load it's data
    if (videoClip.id) {
      title += ` [${videoClip.name}]`
      videoSrc += `#t=${videoClip.startTime},${videoClip.endTime}`
    }

    return (
      <VideoPlayer
        setRef={this.setRef}
      >
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
          />
          <FullScreen
            handleFullScreenClick={this.handleFullScreenClick}
          />
        </Controls>

        <Spinner
          active={this.state.loading}
        />

        <Player
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          handlePause={this.handlePause}
          src={videoSrc}
        />

        <Title
          title={title}
        />
      </VideoPlayer>
    )
  }
}

export default VideoPlayerContainter
