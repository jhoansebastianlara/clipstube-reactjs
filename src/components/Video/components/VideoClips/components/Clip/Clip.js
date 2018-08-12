import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types'
import { getDynamicAvatar } from '../../../../../../helpers'
import PlayIcon from '../../../../../common/Icon/Play'
import RemoveIcon from '../../../../../common/Icon/Remove'
import EditIcon from '../../../../../common/Icon/Edit'
import './Clip.css'

class Clip extends PureComponent {
  render () {
    const classCurrent = this.props.current ? 'Clip-current' : ''
    return (
      <NavLink
        className={"Clip " + classCurrent}
        to={`?clip=${this.props.id}`}
      >
        <div className="Clip-current-indicator">
          <PlayIcon size={40} color="#FE3976" />
        </div>
        <img
          className="Clip-cover-image"
          src={getDynamicAvatar(this.props.id, 100)}
          alt="Play"
        />
        <div className="Clip-body">
          <span className="Clip-name">
            {this.props.name}
          </span>
          <span className="Clip-time">
            {this.props.startTime} - {this.props.endTime}
          </span>
        </div>
        <div className="Clip-options">
          <button>
            <RemoveIcon size={20} color="gray" />
          </button>
          <button>
            <EditIcon size={20} color="gray" />
          </button>
        </div>
      </NavLink>
    )
  }
}

export default Clip