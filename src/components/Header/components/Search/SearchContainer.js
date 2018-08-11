import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from './Search'

class SearchContainer extends Component {
  state = {
    value: ''
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  doSearch = () => {
    const searchText = (this.input.value || '').trim()
    console.log(searchText)
    this.props.dispatch({
      type: 'SEARCH_VIDEO',
      payload: {
        searchText
      }
    })
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value
    }, this.doSearch)
  }

  setInputRef = element => {
    this.input = element
  }

  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

export default connect()(SearchContainer)
