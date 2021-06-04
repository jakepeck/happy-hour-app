import React, { Component } from 'react'
import AddHappyHourDealForm from './AddHappyHourDealForm'

export default class HappyHourDeal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updateClicked: false
    }
  }

  removeDeal = async (e) => {
    e.preventDefault()
    this.props.deleteHappyHourDealHelper(e.target.attributes[0].value)
  }

  updateDeal = async (e) => {
    e.preventDefault()
    console.log('udpatee deal called')
    this.setState({ updateClicked: !this.state.updateClicked })
    // this.props.updateHappyHourDealHelper(e.target.attributes[0].value)
  }

  cancelUpdateDeal = async (e) => {
    e.preventDefault()
    this.setState({ updateClicked: false })
  }

  render() {
    const { sunday, monday, tuesday, wednesday, thursday, friday, saturday } =
      this.props
    const daysArr = [
      sunday,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday
    ]
    const shortDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

    const { description, startTime, endTime, dealId } = this.props

    const days = daysArr.map((day, idx) => {
      if (idx === 6) {
        return day === true ? (
          <h4 style={{ color: 'rgba(255, 166, 0, 0.9)' }}> {shortDays[idx]}</h4>
        ) : (
          <h4>{shortDays[idx]}</h4>
        )
      } else {
        return day === true ? (
          <h4 style={{ color: 'rgba(255, 166, 0, 0.9)' }}> {shortDays[idx]}</h4>
        ) : (
          <h4> {shortDays[idx]}</h4>
        )
      }
    })
    return (
      <div className="dealInfo">
        {this.state.updateClicked === true ? (
          <div>
            <AddHappyHourDealForm
              updateClicked={this.state.updateClicked}
              description={this.props.description}
              startTime={this.props.startTime}
              endTime={this.props.endTime}
              sunday={this.props.sunday}
              monday={this.props.monday}
              tuesday={this.props.tuesday}
              wednesday={this.props.wednesday}
              thursday={this.props.thursday}
              friday={this.props.friday}
              saturday={this.props.saturday}
              cancelUpdateDeal={this.cancelUpdateDeal}
              happyhourdeal_id={dealId}
              updateHappyHourDealHelper={this.props.updateHappyHourDealHelper}
            />
          </div>
        ) : (
          <div>
            <div className="daysDiv">{days}</div>
            <h5>
              {startTime} - {endTime}: {description}
            </h5>

            <button
              happyhourdeal_id={dealId}
              onClick={this.updateDeal}
              className="updateBtn"
              id="dealUpdateBtn"
            >
              U
            </button>

            <button
              happyhourdeal_id={dealId}
              onClick={this.removeDeal}
              className="rightRoundBtn"
              id="dealRemoveBtn"
            >
              X
            </button>
          </div>
        )}
      </div>
    )
  }
}
