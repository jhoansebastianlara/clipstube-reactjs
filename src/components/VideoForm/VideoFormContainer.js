import React, { Component } from 'react'
import { connect } from 'react-redux'
import VideoForm from './VideoForm'

class VideoFormContainer extends Component {
  state = {
    url: '',
    title: '',
    loading: false
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      loading: true
    }, this.saveForm)
  }

  saveForm = () => {
    console.log('saveForm')
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 3000)
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
        titleValue={this.state.title}
        urlValue={this.state.url}
        loading={this.state.loading}
      />
    )
  }
}

export default connect()(VideoFormContainer)
