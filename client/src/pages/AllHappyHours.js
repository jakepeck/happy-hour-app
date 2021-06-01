import React, { Component } from 'react'
import HappyHourCard from '../components/HappyHourCard'

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
        <button>Add New Happy Hour</button>
        <button onClick={() => this.props.clearAllHappyHours}>
          Clear All Happy Hours
        </button>
        <br></br>
        <br></br>

        <div>{allhappyhours}</div>
        {/* <HappyHourCard /> */}
      </div>
    )
  }
}
