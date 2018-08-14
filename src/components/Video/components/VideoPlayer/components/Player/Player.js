import React, { Component } from 'react'
import { func, bool, string } from 'prop-types'

import './Player.css'

class Player extends Component {
  state = {
    video: null
  }

  static propTypes = {
    handleLoadedMetadata: func.isRequired,
    handleTimeUpdate: func,
    handleSeeking: func,
    handleSeeked: func,
    handlePause: func,
    handleError: func,
    autoplay: bool,
    pause: bool,
    src: string
  }

  static defaultProps = {
    autoplay: true,
    pause: true,
    src: ''
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
      handlePause,
      handleError
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
          onError={handleError}
        />
      </div>
    )
  }
}

export default Player
