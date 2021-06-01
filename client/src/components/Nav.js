import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/activetoday">Today</NavLink>
          <NavLink to="/happyhours">Happy Hours</NavLink>
        </div>
      </nav>
    )
  }
}
