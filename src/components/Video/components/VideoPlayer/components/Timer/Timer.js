import React from 'react'
import { number } from 'prop-types'

import { formatTime } from '../../../../../../helpers'
import './Timer.css'

const Timer = (props) => (
  <div className="Timer">
    <p>
      <span>{formatTime(props.currentTime)} / {formatTime(props.duration)}</span>
    </p>
  </div>
)

Timer.propTypes = {
  duration: number,
  currentTime: number
}

export default Timer
