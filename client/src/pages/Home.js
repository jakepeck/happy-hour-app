import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <img
            style={{ display: 'block', maxWidth: '100%' }}
            src="https://i.imgur.com/0UlDmAu.png"
            alt="logo"
          />
        </div>
        <div>
          <h1>Welcome back to the Happy Hour Database</h1>
        </div>
      </div>
    )
  }
}
