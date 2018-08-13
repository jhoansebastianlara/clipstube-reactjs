import React from 'react'
import { number, func } from 'prop-types'

import './ProgressBar.css'

const ProgressBar = (props) => (
  <div className="ProgressBar">
    <input
      type="range"
      min={0}
      max={props.duration}
      value={props.value}
      onChange={props.handleProgressChange}
    />
  </div>
)

ProgressBar.propTypes = {
  duration: number,
  value: number,
  handleProgressChange: func
}

export default ProgressBar
