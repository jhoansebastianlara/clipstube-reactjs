import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <div className="Header">
      {props.children}
    </div>
  )
}

export default Header
