import React from 'react'
import { func, bool } from 'prop-types'

import PlayIcon from '../../../../../common/Icon/Play'
import PauseIcon from '../../../../../common/Icon/Pause'
import './PlayPause.css'

const PlayPause = (props) => (
  <div className="PlayPause">
    {
      props.pause ?
        <button
          onClick={props.handleClick}
        >
          <PlayIcon size={25} color="white" />
        </button>
      :
      <button
        onClick={props.handleClick}
      >
        <PauseIcon size={25} color="white" />
      </button>
    }
  </div>
)

PlayPause.propTypes = {
  handleClick: func,
  pause: bool
}

export default PlayPause
