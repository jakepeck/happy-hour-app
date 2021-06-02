import React, { Component } from 'react'
import HappyHourDeal from './HappyHourDeal'

export default class HappyHourCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      happyhours: props.happyhours,
      happyhourdeals: props.happyhourdeals
    }
  }

  // newDealChange(e) {
  //   this.setState({ newDeal: e.target.value })
  // }

  // addDealToHappyHourCard(e) {
  //   e.preventDefault()
  //   const myArr = this.state.happyhourdealsArray
  //   console.log(myArr)
  //   console.log(this.state.newDeal)
  //   myArr.push(this.state.newDeal)
  //   this.setState({ happyhourdealsArray: myArr })
  // }

  // clearHappyHourCardDeals(e) {
  //   console.log('Deleting all happy hour deals on a happy hour card')
  //   this.props.happyhour.deals = []
  //   this.setState({
  //     happyhourdealsArray: []
  //   })
  // }

  componentDidMount() {
    // console.log('HappyHourCard component mounted')
    // console.log(this.props)
  }

  render() {
    // console.log('rendernig happy hour card')
    // console.log(this.props)
    // console.log(`All happy hour deals in HappyHourCard component`)
    // console.log(this.props.happyhourdeals)
    // console.log(`Happy hour deals in HappyHourCard component`)
    // console.log(this.props.happyhour.happyhourdeals)
    const { happyhour } = this.props
    let arrToMap = []

    for (let i = 0; i < happyhour.happyhourdeals.length; i++) {
      for (let j = 0; j < this.props.happyhourdeals.length; j++) {
        if (happyhour.happyhourdeals[i] === this.props.happyhourdeals[j]._id) {
          arrToMap.push(this.props.happyhourdeals[j])
        }
      }
    }

    console.log('Array to map is:')
    console.log(arrToMap)

    let happyHourDeals = arrToMap.map((hhd, idx) => {
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
        <br></br>Happy Hour at {happyhour.name} <br></br>
        {happyhour.location}
        <ul>{happyHourDeals}</ul>
        {/* <button onClick={(e) => this.clearHappyHourCardDeals(e)}>
          Clear deals
        </button>
        <form>
          <input
            type="text"
            placeholder="Type a new deal here"
            onChange={(e) => this.newDealChange(e)}
            value={this.state.newDeal}
          />
          <br></br>
          <button onClick={(e) => this.addDealToHappyHourCard(e)}>
            Add new deal!
          </button>
        </form> */}
        <br></br>
      </div>
    )
  }
}
