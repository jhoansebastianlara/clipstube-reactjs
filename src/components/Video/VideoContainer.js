import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import queryString from 'query-string'

import * as actions from '../../actions'
import Video from './Video'
import VideoPlayer from './components/VideoPlayer'
import VideoClips from './components/VideoClips'

const keyMap = {
  'l': 'goToNextClip',
  'j': 'goToPrevClip'
}

class VideoContainter extends Component {
  state = {
    videoClips: this.props.video.clips || []
  }

  checkIfLoadClip = (props) => {
    const search = queryString.parse(props.location.search)
    if (search && search.clip) {
      this.props.actions.getVideoClip(search.clip)
    }
  }

  getSiblingClipId = (nextSibling = true) => {
    let {video, videoClip} = {...this.props}
    const {clips} = video
    let idNextClip = null
    let indexClip
    let indexNextClip

    if (video.id && videoClip.id && clips.length > 1) {
      // find index of current video
      indexClip = clips.indexOf(videoClip.id)
      if (nextSibling) {
        // start from the beginning if the current clip is the last one
        indexNextClip = (indexClip + 1) === clips.length ? 0 : (indexClip + 1)
      } else {
        indexNextClip = (indexClip - 1) === -1 ? (clips.length - 1) : (indexClip - 1)
      }
      idNextClip = clips[indexNextClip]
    }

    return idNextClip
  }

  goToNextClip = (delay = 0) => {
    const idNextClip = this.getSiblingClipId()
    if (idNextClip) {
      setTimeout(() => {
        this.props.actions.getVideoClip(idNextClip)
      }, delay || 0)
    }
  }

  goToPrevClip = (delay = 0) => {
    const idPrevClip = this.getSiblingClipId(false)
    if (idPrevClip) {
      setTimeout(() => {
        this.props.actions.getVideoClip(idPrevClip)
      }, delay || 0)
    }
  }

  handleVideoClipFinish = (clipId) => {
    this.goToNextClip(3000)
  }

  listenForHotKeys = (event) => {
    const keyName = event.key
    const handlerName = keyMap[keyName]
    this[handlerName] && this[handlerName]()
  }

  registerHotKeysListeners = () => {
    document.addEventListener('keypress', this.listenForHotKeys)
  }

  removeHotKeysListeners = () => {
    document.removeEventListener('keypress', this.listenForHotKeys)
  }

  loadVideo = () => {
    const { videoId } = this.props.match.params
    this.props.actions.getVideo(videoId)
    this.checkIfLoadClip(this.props)
  }

  componentDidMount () {
    this.registerHotKeysListeners()
    this.loadVideo()
  }

  componentWillUnmount () {
    this.removeHotKeysListeners()
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.checkIfLoadClip(nextProps)
    }
  }

  render () {
    const {
      video,
      videoClips,
      videoClip,
      videoNotFound,
      videoClipNotFound
    } = this.props
    const notDataFound = (
      <div className="not-data-container">
        <h3 className="notDataFound">Video Not Found</h3>
      </div>
    )
    return (
      (videoNotFound || videoClipNotFound) ? notDataFound :
      <Video>
        <VideoPlayer
          autoplay={true}
          data={video}
          videoClip={videoClip}
          onVideoClipFinish={this.handleVideoClipFinish}
          />
        <VideoClips
          clips={videoClips}
        />
        <div className="shortcuts-container">
          <span className="shortcuts-title">
            Shortcuts:
          </span>
          <div className="shortcuts">
            <span className="shortcuts-item">
              <span className="shortcuts-key">J</span>: Previous clip
            </span>
            <span className="shortcuts-item">
              <span className="shortcuts-key">N</span>: Next clip
            </span>
          </div>
        </div>
      </Video>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    video: state.data.video,
    videoClips: state.data.videoClips,
    videoNotFound: state.data.videoNotFound,
    videoClip: state.data.videoClip,
    videoClipNotFound: state.data.videoClipNotFound
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoContainter)
