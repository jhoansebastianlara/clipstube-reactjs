import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../../../../../actions'
import Clip from './Clip'

class ClipContainer extends Component {
  state = {
    modalVideoFormId: 'modalClipFormVisible'
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
  const {videoClip} = state.data
  const clipId = videoClip.id
  return {
    data: props.id ? state.data.clips[props.id] : {},
    current: clipId === props.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClipContainer)
