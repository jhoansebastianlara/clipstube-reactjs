import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import PlayIcon from '../../../common/Icon/Play'
import './Media.css'

class Media extends PureComponent {
  handleClick = (event) => {console.log('clicked')}
  getDynamicAvatar (key) {
    return `https://api.adorable.io/avatars/300/${key}`
  }
  render () {
    return (
      <NavLink
        to={`/watch/${this.props.id}`}
        className="Media"
        onClick={this.handleClick}
      >
        <div className="Media-overlay">
          <PlayIcon size={80} color="white" />
        </div>
        <img
          className="Media-cover-image"
          src={this.props.cover || this.getDynamicAvatar(this.props.id)}
          alt="Play"
        />
        <div className="Media-title-container">
          <span className="Media-title truncate-text">
            {this.props.title}
          </span>
        </div>
      </NavLink>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Media
