import React, { Component } from 'react'

export default class HappyHourDeal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    const { description, startTime, endTime } = this.props
    return (
      <div>
        <li>
          {description} {startTime} - {endTime}
        </li>
      </div>
    )
  }
}
