import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from './components/Search'
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

      <Search />

      <div className="body">
        <button className="btn-small">+</button>
      </div>
    </div>
  )
}

export default Header
