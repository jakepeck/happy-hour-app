import React, { Component } from 'react'

export default class HappyHourDeal extends Component {
  render() {
    console.log(this.props)
    const { description, startTime, endTime } = this.props
    return (
      <div>
        <li>Happy Hour Deal</li>
      </div>
    )
  }
}
