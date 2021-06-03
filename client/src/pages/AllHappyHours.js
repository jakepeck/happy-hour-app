import React, { Component } from 'react'
import HappyHourCard from '../components/HappyHourCard'
import AddHappyHourForm from '../components/AddHappyHourForm'
import AddHappyHourDealForm from '../components/AddHappyHourDealForm'

export default class AllHappyHours extends Component {
  render() {
    const { happyhours, happyhourdeals } = this.props
    let allhappyhours = happyhours.map((hh, idx) => {
      return (
        <HappyHourCard
          key={idx}
          happyhour={hh}
          happyhourdeals={happyhourdeals}
          happyhours={hh}
          deleteHappyHourHelper={this.props.deleteHappyHourHelper}
          deleteHappyHourDealHelper={this.props.deleteHappyHourDealHelper}
          createHappyHourDealHelper={this.props.createHappyHourDealHelper}
          updateHappyHourHelper={this.props.updateHappyHourHelper}
          updateteHappyHourDealHelper={this.props.updateHappyHourDealHelper}
        />
      )
    })

    return (
      <div>
        <h1>All Happy Hours</h1>
        <div className="allHappyHours">{allhappyhours}</div>
      </div>
    )
  }
}
