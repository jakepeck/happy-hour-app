import React, { Component } from 'react'
import HappyHourDeal from './HappyHourDeal'

export default class HappyHourCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      happyhourdealsArray: [],
      newDeal: '',
      location: '',
      name: ''
    }
  }

  addDealToHappyHourCard(e) {
    e.preventDefault()
    const myArr = this.state.happyhourdealsArray
    console.log(myArr)
    console.log(this.state.newDeal)
    myArr.push(this.state.newDeal)
    this.setState({ happyhourdealsArray: myArr })
  }

  clearHappyHourCardDeals(e) {
    console.log('Deleting all happy hour deals on a happy hour card')
    this.setState({
      happyhourdealsArray: []
    })
  }

  render() {
    console.log(this)
    const { happyhour } = this.props
    let happyHourDeals = happyhour.deals.map((hhd, idx) => {
      return (
        <HappyHourDeal
          key={idx}
          description={hhd.description}
          startTime={hhd.startTime}
          endTime={hhd.endTime}
        />
      )
    })

    return (
      <div>
        Happy Hour Card: {happyhour.name}
        {happyhour.location}
        <ul>{happyHourDeals}</ul>
        <button onClick={(e) => this.clearHappyHourCardDeals(e)}>
          Clear happy hour list
        </button>
        <form>
          <input
            type="text"
            placeholder="Type a new deal here"
            onChange={(e) => this.newDealChange(e)}
            value={this.state.newDeal}
          />
          <button onClick={(e) => this.addDealToHappyHourCard(e)}>
            Add new deal!
          </button>
        </form>
      </div>
    )
  }
}
