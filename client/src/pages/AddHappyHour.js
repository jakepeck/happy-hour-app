import React, { Component } from 'react'
import AddHappyHourForm from '../components/AddHappyHourForm'
import AddHappyHourDealForm from '../components/AddHappyHourDealForm'

export default class AddHappyHours extends Component {
  render() {
    // console.log('about to call props for allhappyhours')
    console.log(this.props)

    return (
      <div>
        <h1>Add a Happy Hour Here</h1>
        <button>Add New Happy Hour</button>
        <AddHappyHourForm />
        <AddHappyHourDealForm />
      </div>
    )
  }
}
