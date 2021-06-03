import React, { Component } from 'react'

export default class AddHappyHourDealForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newHappyHourDeal: '',
      startTime: '',
      endTime: '',
      sunday: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false
    }
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submit button clicked')
    console.log(e)
    let formData = {
      newHappyHourDeal: this.state.newHappyHourDeal,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      sunday: this.state.sunday,
      monday: this.state.monday,
      tuesday: this.state.tuesday,
      wednesday: this.state.wednesday,
      thursday: this.state.thursday,
      friday: this.state.friday,
      saturday: this.state.saturday
    }
    this.props.createHappyHour2(formData)
    console.log(this.props)
    this.props.history.push('/allhappyhours')
  }

  render() {
    return (
      <div>
        AddHappyHourDealForm
        <br />
        <form className="dealForm">
          Deal Description:
          <input
            type="text"
            placeholder="Enter deal description here"
            onChange={(e) => this.handleInputChange(e)}
            value={this.state.newHappyHourDeal}
            name="newHappyHourDeal"
          ></input>
          <div className="timeInputs">
            Start Time:
            <input
              type="text"
              placeholder="6pm"
              onChange={(e) => this.handleInputChange(e)}
              value={this.state.startTime}
              name="startTime"
            ></input>
            End Time:
            <input
              type="text"
              placeholder="9pm"
              onChange={(e) => this.handleInputChange(e)}
              value={this.state.endTime}
              name="endTime"
            ></input>
          </div>
          {/* <div className="timeInputs">
            Start Time:
            <input
              type="time"
              step="3600"
              placeholder="start time:"
              onChange={(e) => this.handleInputChange(e)}
              value={this.state.startTime}
            ></input>
            End Time:
            <input
              type="time"
              step="3600"
              placeholder="end time:"
              onChange={(e) => this.handleInputChange(e)}
              value={this.state.endTime}
            ></input>
          </div> */}
          <div className="daysOfWeek-Box">
            <div className="checkbox-Box">
              <input
                name="sunday"
                type="checkbox"
                checked={this.state.sunday}
                onChange={(e) => this.handleInputChange(e)}
              />
              <input
                name="monday"
                type="checkbox"
                checked={this.state.monday}
                onChange={(e) => this.handleInputChange(e)}
              />
              <input
                name="tuesday"
                type="checkbox"
                checked={this.state.tuesday}
                onChange={(e) => this.handleInputChange(e)}
              />

              <input
                name="wednesday"
                type="checkbox"
                checked={this.state.wednesday}
                onChange={(e) => this.handleInputChange(e)}
              />
              <input
                name="thursday"
                type="checkbox"
                checked={this.state.thursday}
                onChange={(e) => this.handleInputChange(e)}
              />
              <input
                name="friday"
                type="checkbox"
                checked={this.state.friday}
                onChange={(e) => this.handleInputChange(e)}
              />
              <input
                name="saturday"
                type="checkbox"
                checked={this.state.saturday}
                onChange={(e) => this.handleInputChange(e)}
              />
            </div>
            <div className="checkbox-Box">
              <h4>Sun Mon Tue Wed Thu Fri Sat</h4>
            </div>
          </div>
        </form>
        <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
      </div>
    )
  }
}
