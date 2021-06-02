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

  render() {
    return (
      <div>
        AddHappyHourDealForm
        <br />
        <form>
          <input
            type="text"
            placeholder="Enter deal description here"
            onChange={(e) => this.handleInputChange(e)}
            value={this.state.newHappyHourDeal}
            name="newHappyHourDeal"
          ></input>

          <input
            type="time"
            step="3600"
            placeholder="start time:"
            onChange={(e) => this.handleInputChange(e)}
            value={this.state.startTime}
          ></input>

          <input
            type="time"
            step="3600"
            placeholder="end time:"
            onClick={(e) => this.handleInputChange(e)}
            value={this.state.endTime}
          ></input>

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
