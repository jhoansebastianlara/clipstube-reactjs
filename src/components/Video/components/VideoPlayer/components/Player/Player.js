import React, { Component } from 'react'
import './Player.css'

class Player extends Component {
  state = {
    video: null
  }

  togglePlay() {
    if (!this.video) return
    if (this.props.pause) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pause !== this.props.pause) {
      this.togglePlay()
    }
  }

  setRef = element => {
    this.video = element
  }

  render() {
    const {
      handleLoadedMetadata,
      handleTimeUpdate,
      handleSeeking,
      handleSeeked,
      handlePause
    } = this.props
    return (
      <div className="Player">
        <video
          autoPlay={this.props.autoplay}
          src={this.props.src}
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
          onPause={handlePause}
        />
      </div>
    )
  }
}

export default Player
