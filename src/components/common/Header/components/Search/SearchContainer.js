import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../../../../actions'
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
    this.props.actions.searchVideos(searchText)
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SearchContainer)
