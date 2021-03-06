import React, { Component } from 'react'
import { string } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../../../../../actions'
import Clip from './Clip'

class ClipContainer extends Component {
  state = {
    modalVideoFormId: 'modalClipFormVisible'
  }

  static propTypes = {
    id: string.isRequired
  }

  handleEditClick = () => {
    const clipId = this.props.data.id
    this.props.actions.openModal(this.state.modalVideoFormId, {clipId})
  }

  handleRemoveClick = () => {
    if (!window.confirm('Are you Sure?')) return
    const clipId = this.props.data.id
    this.props.actions.removeVideoClip(clipId)
  }

  render() {
    return (
      <Clip
        {...this.props.data}
        current={this.props.current}
        handleEdit={this.handleEditClick}
        handleRemove={this.handleRemoveClick}
      />
    )
  }
}

const mapStateToProps = (state, props) => {
  const {videoClip, video} = state.data
  let clipId = videoClip.id

  // if there is no a videoclip running so original is running
  if (!videoClip.id && video.id) {
    clipId = video.clipOriginalId
  }
  return {
    data: props.id ? state.data.clips[props.id] : {},
    current: clipId === props.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClipContainer)
