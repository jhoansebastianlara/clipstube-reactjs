import React from 'react'

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

export default PlayPause
