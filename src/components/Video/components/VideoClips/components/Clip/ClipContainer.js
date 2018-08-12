import React, { Component } from 'react'
import { connect } from 'react-redux'
import Clip from './Clip'

class ClipContainer extends Component {
  render() {
    return <Clip {...this.props.data} current={this.props.current} />
  }
}

const mapStateToProps = (state, props) => {
  const {videoClip} = state.data
  const clipId = videoClip.id
  return {
    data: props.id ? state.data.clips[props.id] : {},
    current: clipId === props.id
  }
}

export default connect(mapStateToProps)(ClipContainer)
