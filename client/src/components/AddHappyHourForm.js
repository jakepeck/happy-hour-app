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

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submit button clicked')
    console.log(e)
    let formData = {
      name: this.state.nameInput,
      location: this.state.locationInput,
      image: this.state.imageInput
    }
    this.props.createHappyHour2(formData)
    // this.props.history.push('/allhappyhours')
  }

  render() {
    console.log('add happy hour FORM rendered')
    console.log(this.props)
    return (
      <div>
        {/* Add a New Happy Hour! */}
        <form className="happyHourForm">
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
          {/* <input type="time" step="3600" placeholder="start time:"></input> */}
        </form>
        <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
      </div>
    )
  }
}
