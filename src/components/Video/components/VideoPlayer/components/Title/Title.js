import React from 'react'
import { string } from 'prop-types'

import './Title.css'

const Title = (props) => (
  <div className="Title">
    <h2>{props.title}</h2>
  </div>
)

Title.propTypes = {
  title: string
}

export default Title
