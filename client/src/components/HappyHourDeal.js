import React, { Component } from 'react'

export default class HappyHourDeal extends Component {
  constructor(props) {
    super(props)
  }

  removeDeal = (e) => {
    e.preventDefault()
    console.log(`deal id is: ${e.target.attributes[0].value}`)
    this.props.deleteHappyHourDealHelper(e.target.attributes[0].value)
  }

  render() {
    console.log(this.props)
    const { description, startTime, endTime, dealId } = this.props
    console.log(dealId)
    return (
      <div className="dealInfo">
        <h4>
          {startTime} - {endTime}: {description}
        </h4>
        <button
          happyhourdeal_ID={dealId}
          onClick={this.removeDeal}
          className="rightRoundBtn"
        >
          X
        </button>
      </div>
    )
  }
}
