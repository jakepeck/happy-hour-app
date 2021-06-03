import React, { Component } from 'react'

export default class HappyHourDeal extends Component {
  constructor(props) {
    super(props)
  }

  generateDaysOfWeekString = (daysArr) => {
    const dayLettersArr = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    const boolArr = [
      this.props.sunday,
      this.props.monday,
      this.props.tuesday,
      this.props.wednesday,
      this.props.thursday,
      this.props.friday,
      this.props.saturday
    ]
    let dayString = ''
    console.log(boolArr)
    for (let i = 0; i < 7; i++) {
      if (boolArr[i] === true) {
        if (i < 6) {
          dayString += `${dayLettersArr[i]}, `
        } else {
          dayString += `${dayLettersArr[i]}`
        }
      } else {
        if (i < 6) {
          dayString += `${dayLettersArr[i]}, `
        } else {
          dayString += `${dayLettersArr[i]}`
        }
      }
    }

    console.log(dayString)
    return dayString
  }

  removeDeal = (e) => {
    e.preventDefault()
    console.log(`deal id is: ${e.target.attributes[0].value}`)
    this.props.deleteHappyHourDealHelper(e.target.attributes[0].value)
  }

  render() {
    console.log(this.props)
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
    {
      console.log(daysArr)
    }
    const { description, startTime, endTime, dealId } = this.props
    console.log(dealId)
    const days = daysArr.map((day, idx) => {
      console.log(day, idx)
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
        {/* <div>{this.generateDaysOfWeekString(daysArr)}</div> */}
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
