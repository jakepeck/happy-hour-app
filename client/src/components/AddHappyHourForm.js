import React, { Component } from 'react'

export default class AddHappyHourForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameInput: '',
      locationInput: ''
    }
  }

  handleChange(e) {
    const target = e.target
    const name = e.target.name
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        AddHappyHourForm
        <br />
        <form>
          <input
            type="text"
            placeholder="Name of happy hour establishment"
            onChange={(e) => this.handleChange(e)}
            value={this.state.nameInput}
            name="nameInput"
          ></input>
          <input
            type="text"
            placeholder="Location/address"
            onChange={(e) => this.handleChange(e)}
            value={this.state.locationInput}
            name="locationInput"
          ></input>
          {/* <input type="time" step="3600" placeholder="start time:"></input> */}
        </form>
      </div>
    )
  }
}
