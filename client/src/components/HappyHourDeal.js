import React, { Component } from 'react'

export default class HappyHourDeal extends Component {
  constructor(props) {
    super(props)
  }

  removeDeal = (e) => {
    e.preventDefault()
    this.props.deleteHappyHourDealHelper(e.target.attributes[0].value)
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
        <div className="daysDiv">{days}</div>
        <h5>
          {startTime} - {endTime}: {description}
        </h5>
        <button
          happyhourdeal_ID={dealId}
          onClick={this.removeDeal}
          className="rightRoundBtn"
          id="dealRemoveBtn"
        >
          X
        </button>
      </div>
    )
  }
}
