import React, { Component } from 'react'
import HappyHourDeal from './HappyHourDeal'

export default class HappyHourCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      happyhourdealsArray: props.happyhourdeals,
      newDeal: ''
    }
  }

  render() {
    console.log(props)
    // const { happyHour } = this.props
    return (
      <div>
        Happy Hour Card
        <HappyHourDeal
          description={this.props.description}
          startTime={this.props.startTime}
          endTime={this.props.endTime}
        />
      </div>
    )
  }
}
