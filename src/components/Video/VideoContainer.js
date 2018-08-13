import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import queryString from 'query-string'

import * as actions from '../../actions'
import Video from './Video'
import VideoPlayer from './components/VideoPlayer'
import VideoClips from './components/VideoClips'

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

  componentDidMount () {
    const { videoId } = this.props.match.params
    this.props.actions.getVideo(videoId)
    this.checkIfLoadClip(this.props)
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
      videoClip
    } = this.props
    return (
      <Video>
        <VideoPlayer
          autoplay={true}
          data={video}
          videoClip={videoClip}
          />
        <VideoClips
          clips={videoClips}
        />
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
