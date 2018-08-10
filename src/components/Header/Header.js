import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header(props) {
  return (
    <div className="Header">
      <NavLink
        to={'/'}
        className="Header-logo"
      >
        <span>You</span>
        <span>Clips</span>
      </NavLink>
      <div className="body">
        <button className="btn-small">Create a video</button>
      </div>
    </div>
  )
}

export default Header
