import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import VideoForm from './VideoForm'

class VideoFormContainer extends Component {
  state = {
    src: '',
    title: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.saveForm()
  }

  saveForm = () => {
    this.props.actions.createVideo(this.state)
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
      <VideoForm
        handleSubmit={this.handleSubmit}
        handleInputChange={this.handleInputChange}
        formData={this.state}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(null, mapDispatchToProps)(VideoFormContainer)
