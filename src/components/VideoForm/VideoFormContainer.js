import React, { Component } from 'react'
import { connect } from 'react-redux'
import VideoForm from './VideoForm'

class VideoFormContainer extends Component {
  state = {
    url: '',
    title: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.saveForm()
  }

  saveForm = () => {
    console.log(this.state)
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

export default connect()(VideoFormContainer)
