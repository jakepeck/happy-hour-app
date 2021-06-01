import React, { Component } from 'react'

export default class HappyHourDeal extends Component {
  render() {
    const { description, startTime, endTime } = this.props
    return (
      <div>
        <li>
          {startTime} - {endTime} {description}
        </li>
      </div>
    )
  }
}
