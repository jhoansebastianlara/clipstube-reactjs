import React from 'react'
import { bool } from 'prop-types'

import './Spinner.css'

const Spinner = (props) => {
  if (!props.active) return null
  return (
    <div className="Spinner">
      <span>Loading...</span>
    </div>
  )
}

Spinner.propTypes = {
  active: bool
}

export default Spinner
