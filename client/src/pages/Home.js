import React, { Component } from 'react'
import HappyHourCard from '../components/HappyHourCard'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <img
            style={{ maxWidth: '60%' }}
            src="https://i.imgur.com/0UlDmAu.png"
            alt="logo"
            className="myImg"
          />
        </div>

        <div className="homepageString">
          <h1>Welcome back to the Happy Hour Database!!!</h1>
        </div>
      </div>
    )
  }
}
