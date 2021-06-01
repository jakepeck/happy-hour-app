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

  handleChange(e) {
    const target = e.target
    const name = e.target.name
    let value = ''
    if (target.type === 'checkbox') {
      value = target.checked
    } else {
      value = target.value
    }
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        AddHappyHourDealForm
        <br />
        <form>
          <input
            type="text"
            placeholder="Enter deal description here"
            onChange={(e) => this.handleChange(e)}
            value={this.state.newHappyHourDeal}
            name="newHappyHourDeal"
          ></input>

          {/* <input
            type="time"
            step="3600"
            placeholder="start time:"
            onChange={(e) => this.handleChange(e)}
            value={this.state.startTime}
          ></input>

          <input
            type="time"
            step="3600"
            placeholder="end time:"
            onClick={(e) => this.handleChange(e)}
            value={this.state.endTime}
          ></input> */}

          {/* <input type="checkbox" name="sunday">
            Sun
          </input>
          <input type="checkbox" name="monday">
            Mon
          </input>
          <input type="checkbox" name="tuesday">
            Tue
          </input>
          <input type="checkbox" name="wednesday">
            Wed
          </input>
          <input type="checkbox" name="thursday">
            Thu
          </input>
          <input type="checkbox" name="friday">
            Fri
          </input>
          <input type="checkbox" name="saturday">
            Sat
          </input> */}
        </form>
      </div>
    )
  }
}
