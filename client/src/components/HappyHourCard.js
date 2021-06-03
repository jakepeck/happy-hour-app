import React, { Component } from 'react'
import AddHappyHourDealForm from './AddHappyHourDealForm'
import AddHappyHourForm from './AddHappyHourForm'
import HappyHourDeal from './HappyHourDeal'

export default class HappyHourCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      happyhours: props.happyhours,
      happyhourdeals: props.happyhourdeals,
      clicked: false
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

  addDealToHappyHourCard = (e) => {
    e.preventDefault()
    // console.log(e)
    this.setState({ clicked: !this.state.clicked })
    // this.state.clicked = !this.state.clicked
    console.log(this.state)
    console.log(e.target)

    console.log('addDealToHappyHourCard being called')
  }

  removeHappyHour = async (e) => {
    // e.preventDefault()
    console.log(e.target.attributes[0].value)
    console.log(
      `Trying to remove happy hour with id of: ${e.target.attributes[0].value}`
    )
    this.props.deleteHappyHourHelper(e.target.attributes[0].value)
  }

  cancelAddDeal = (e) => {
    this.setState({ clicked: false })
  }

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

    // console.log('Array to map is:')
    // console.log(arrToMap)

    let happyHourDeals = arrToMap.map((hhd, idx) => {
      return (
        <HappyHourDeal
          {...hhd.props}
          key={idx}
          description={hhd.description}
          startTime={hhd.startTime}
          endTime={hhd.endTime}
          dealId={hhd._id}
          sunday={hhd.sunday}
          monday={hhd.monday}
          tuesday={hhd.tuesday}
          wednesday={hhd.wednesday}
          thursday={hhd.thursday}
          friday={hhd.friday}
          saturday={hhd.saturday}
          deleteHappyHourDealHelper={this.props.deleteHappyHourDealHelper}
          createHappyHourDealHelper={this.props.createHappyHourDealHelper}
        />
      )
    })

    return (
      <div className="allHappyHoursDisplayCard">
        <button
          happyhour_id={happyhour._id}
          onClick={this.removeHappyHour}
          className="rightRoundBtn"
          id="big"
        >
          X
        </button>{' '}
        <div></div>
        <img src={`${happyhour.image}`} alt="hhimage" width="300" />
        <h3>{happyhour.name} </h3>
        <h4>{happyhour.location}</h4>
        {happyHourDeals.length > 0 ? (
          <div className="dealsList">{happyHourDeals}</div>
        ) : null}
        {/* <div className="dealsList">{happyHourDeals}</div> */}
        <button
          happyhour_id={happyhour._id}
          onClick={this.addDealToHappyHourCard}
        >
          Add New Deal
        </button>
        {this.state.clicked === true ? (
          <div>
            <AddHappyHourDealForm
              cancelAddDeal={this.cancelAddDeal}
              happyhour_id={happyhour._id}
              createHappyHourDealHelper={this.props.createHappyHourDealHelper}
            />
          </div>
        ) : null}
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
