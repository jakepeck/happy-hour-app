import React, { Component } from 'react'
import HappyHourCard from '../components/HappyHourCard'
import AddHappyHourForm from '../components/AddHappyHourForm'
import AddHappyHourDealForm from '../components/AddHappyHourDealForm'

export default class AllHappyHours extends Component {
  render() {
    // console.log('about to call props for allhappyhours')
    console.log(this.props)
    const { happyhours } = this.props
    let allhappyhours = happyhours.map((hh, idx) => {
      return <HappyHourCard key={idx} happyhour={hh} />
    })

    return (
      <div>
        <h1>All Happy Hours Page</h1>
        <div className="allHappyHours">{allhappyhours}</div>
      </div>
    )
  }
}
