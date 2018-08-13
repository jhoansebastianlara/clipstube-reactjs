import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { getDynamicAvatar } from '../../../../helpers'
import PlayIcon from '../../../common/Icon/Play'
import './Media.css'

class Media extends PureComponent {
  render () {
    return (
      <NavLink
        to={`/watch/${this.props.id}`}
        className="Media"
      >
        <div className="Media-overlay">
          <PlayIcon size={80} color="white" />
        </div>
        <img
          className="Media-cover-image"
          src={this.props.cover || getDynamicAvatar(this.props.id)}
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
