import React, { Component } from 'react'
import HappyHourCard from '../components/HappyHourCard'

export default class Today extends Component {
  render() {
    const today = new Date()
    const dayNum = today.getDay()
    console.log(today, dayNum)
    const daysArr = [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday'
    ]
    const dayToLookFor = daysArr[dayNum]
    let happyhours = this.props.happyhours
    let happyhourdeals = this.props.happyhourdeals
    let arrToMap = []
    let todaysHappyHourDeals = happyhourdeals.map((hhd, idx) => {
      if (hhd.dayToLookFor === true) {
        arrToMap.push(hhd)
      }
    })
    // // for (let i = 0; i < happyhourdeals.length; i++){
    // //   if (happyhourdeals[i].dayToLookFor === true){
    // //     for (let j = 0; j < happyhours.length; j++){
    // //       if (happyhourdeals[i].happyHour_Id === happyhours[j]._id){
    // //         arrToMap.push(happyhours[j])
    // //       }
    // //     }
    // //   }

    // // }

    // for (let i = 0; i < happyhours.length; i++) {
    //   for (let j = 0; j < happyhours.happyhourdeals.length; j++) {
    //     if (happyhours[i].happyhourdeals[j].dayToLookFor === true) {
    //     }
    //   }
    // }
    return (
      <div>
        <div className="homepageString">
          <h1>Today's Happy Hour Deals</h1>
        </div>
      </div>
    )
  }
}
