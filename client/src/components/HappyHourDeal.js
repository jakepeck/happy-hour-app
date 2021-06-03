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
