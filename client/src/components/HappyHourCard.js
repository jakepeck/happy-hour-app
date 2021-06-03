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
      clicked: false,
      updateClicked: false
    }
  }

  addDealToHappyHourCard = (e) => {
    e.preventDefault()
    this.setState({ clicked: !this.state.clicked })
  }

  updateHappyHour = (e) => {
    e.preventDefault()
    this.setState({ updateClicked: !this.state.updateClicked })
  }

  removeHappyHour = async (e) => {
    e.preventDefault()
    this.props.deleteHappyHourHelper(e.target.attributes[0].value)
  }

  cancelAddDeal = (e) => {
    this.setState({ clicked: false })
  }

  componentDidMount() {}

  render() {
    const { happyhour } = this.props
    let arrToMap = []

    for (let i = 0; i < happyhour.happyhourdeals.length; i++) {
      for (let j = 0; j < this.props.happyhourdeals.length; j++) {
        if (happyhour.happyhourdeals[i] === this.props.happyhourdeals[j]._id) {
          arrToMap.push(this.props.happyhourdeals[j])
        }
      }
    }

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
          updateHappyHourHelper={this.props.updateHappyHourHelper}
          updateteHappyHourDealHelper={this.props.updateHappyHourDealHelper}
        />
      )
    })
    console.log(this.state.updateClicked)
    return (
      <div>
        {this.state.updateClicked === true ? (
          <div>
            <div>update is true</div>
          </div>
        ) : (
          <div>
            <div className="allHappyHoursDisplayCard">
              <button
                happyhour_id={happyhour._id}
                onClick={(e) => this.props.updateHappyHourHelper(e)}
                className="updateBtn"
                id="hhUpdateBtn"
              >
                U
              </button>
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
                    createHappyHourDealHelper={
                      this.props.createHappyHourDealHelper
                    }
                  />
                </div>
              ) : null}
              <br></br>
            </div>
          </div>
        )}
      </div>
    )
  }
}
