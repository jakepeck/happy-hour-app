import React, { Component } from 'react'
import AddHappyHourForm from '../components/AddHappyHourForm'
import AddHappyHourDealForm from '../components/AddHappyHourDealForm'

export default class AddHappyHour extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    // console.log('Props for add happy hours page:')
    // console.log(this.props)
    // const { createHappyHour, createHappyHour2 } = this.props
    // console.log('showing functions here')
    // console.log(createHappyHour, createHappyHour2)
    return (
      <div>
        <h1>Add a Happy Hour Here</h1>
        {/* <button>Add New Happy Hour</button> */}
        <AddHappyHourForm
          {...this.props}
          createHappyHour={this.props.createHappyHour}
          createHappyHour2={this.props.createHappyHour2}
        />
        {/* <AddHappyHourDealForm /> */}
      </div>
    )
  }
}
