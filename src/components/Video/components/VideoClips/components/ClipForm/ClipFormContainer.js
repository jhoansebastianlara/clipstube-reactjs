import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../../../../actions'
import ClipForm from './ClipForm'

class ClipFormContainer extends Component {
  state = {
    name: '',
    startTime: '',
    endTime: '',
    videoId: this.props.videoId,
    ...this.props.data
  }

  handleSubmit = event => {
    event.preventDefault()
    this.saveForm()
  }

  saveForm = () => {
    const clipId = this.props.data.id
    if (clipId) {
      this.props.actions.updateVideoClip(this.state)
    } else {
      this.props.actions.createVideoClip(this.state)
    }
    this.props.onFormSubmitted()
  }

  handleInputChange = (event) => {
    const target = event.target
    const name = target.name
    const value = target.value
    this.setState({
      [name]: value
    })
  }

  setInputRef = element => {
    this.input = element
  }

  render() {
    return (
      <ClipForm
        handleSubmit={this.handleSubmit}
        handleInputChange={this.handleInputChange}
        formData={this.state}
        clipData={this.props.data}
      />
    )
  }
}

const mapStateToProps = (state, props) => {
  const {modalData} = state.modal
  const {clipId} = modalData
  let clip = {}

  if (clipId && state.data.clips[clipId]) {
    clip = state.data.clips[clipId]
  }

  return {
    data: clip
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClipFormContainer)
