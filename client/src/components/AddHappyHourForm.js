import React, { Component } from 'react'

export default class AddHappyHourForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameInput: '',
      locationInput: '',
      imageInput: ''
    }
  }

  handleChange(e) {
    const target = e.target
    const name = e.target.name
    this.setState({ [name]: target.value })
  }

  handleSubmit = (e) => {
    console.log('Form submit button clicked')
    console.log(e)
    this.props.createHappyHour()
    this.props.history.push('/allhappyhours')
  }

  render() {
    console.log('add happy hour form rendered')
    console.log(this.props)
    return (
      <div>
        Add a New Happy Hour!
        <form>
          Name of establishment:
          <input
            type="text"
            placeholder="Name of happy hour establishment"
            onChange={(e) => this.handleChange(e)}
            value={this.state.nameInput}
            name="nameInput"
          ></input>
          Location/Address:
          <input
            type="text"
            placeholder="Location/address"
            onChange={(e) => this.handleChange(e)}
            value={this.state.locationInput}
            name="locationInput"
          ></input>{' '}
          Image URL:
          <input
            type="text"
            placeholder="Image url"
            onChange={(e) => this.handleChange(e)}
            value={this.state.imageInput}
            name="imageInput"
          ></input>
          <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
          {/* <input type="time" step="3600" placeholder="start time:"></input> */}
        </form>
      </div>
    )
  }
}
