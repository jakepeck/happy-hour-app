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

    let formData = {
      name: this.state.nameInput,
      location: this.state.locationInput,
      image: this.state.imageInput
    }
    this.props.createHappyHour2(formData)
    this.props.history.push('/allhappyhours')
  }

  handleUpdate = async (e) => {
    e.preventDefault()
    console.log('hanlde update clicked')
    let formData = {
      name: this.state.nameInput,
      location: this.state.locationInput,
      image: this.state.imageInput
    }
    console.log(this.props.happyhour_id)
    this.props.updateHappyHourHelper(this.props.happyhour_id, formData)
    // this.props.history.push('/allhappyhours')
  }

  render() {
    return (
      <div>
        {this.props.updateClicked === true ? (
          <div>
            <form className="happyHourForm">
              Name:
              <input
                type="text"
                placeholder="Name of happy hour establishment"
                onChange={(e) => this.handleChange(e)}
                value={this.props.happyhourName}
                name="nameInput"
              ></input>
              Location:
              <input
                type="text"
                placeholder="Location/address"
                onChange={(e) => this.handleChange(e)}
                value={this.props.happyhourLocation}
                name="locationInput"
              ></input>{' '}
              Image URL:
              <input
                type="text"
                placeholder="Image url"
                onChange={(e) => this.handleChange(e)}
                value={this.props.happyhourImage}
                name="imageInput"
              ></input>
            </form>
            <button
              onClick={(e) => this.props.cancelUpdateHappyHour(e)}
              className="dealSubmitBtn"
            >
              Cancel
            </button>
            <button
              happyhour_id={this.props.happyhour_id}
              onClick={(e) => this.handleUpdate(e)}
              className="submitBtn"
            >
              Update
            </button>
          </div>
        ) : (
          <div>
            <form className="happyHourForm">
              Name:
              <input
                type="text"
                placeholder="Name of happy hour establishment"
                onChange={(e) => this.handleChange(e)}
                value={this.state.nameInput}
                name="nameInput"
              ></input>
              Location:
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
            </form>
            <button onClick={(e) => this.handleSubmit(e)} className="submitBtn">
              Submit
            </button>
          </div>
        )}
      </div>
    )
  }
}
