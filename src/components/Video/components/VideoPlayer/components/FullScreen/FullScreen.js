import React from 'react'
import { func } from 'prop-types'

import FullScreenIcon from '../../../../../common/Icon/FullScreen'
import './FullScreen.css'

const FullScreen = (props) => (
  <div
    className="FullScreen"
    onClick={props.handleFullScreenClick}
  >
    <FullScreenIcon
      size={20}
      color="white"
    />
  </div>
)

FullScreen.propTypes = {
  handleFullScreenClick: func
}

export default FullScreen
