import React from 'react'
import './PlayPause.css'
import PlayIcon from '../../../../../common/Icon/Play'
import PauseIcon from '../../../../../common/Icon/Pause'

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
