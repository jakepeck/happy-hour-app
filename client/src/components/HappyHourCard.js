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

  addDealToHappyHourCard(e) {
    e.preventDefault()
    const myArr = this.state.happyhourdealsArray
    console.log(myArr)
    console.log(this.state.newDeal)
    myArr.push(this.state.newDeal)
    this.setState({ happyhourdealsArray: myArr })
  }

  clearHappyHourCardDeals(e) {
    console.log('Deleting all happy hour deals on a happy hour card')
    this.setState({
      happyhourdealsArray: []
    })
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
