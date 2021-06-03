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
    // for (let i = 0; i < happyhourdeals.length; i++){
    //   for (let j = 0; j < happyhours.length; j++){
    //     if (happyhourdeals[i].dayToLookFor === true){
    //       arrToMap.push(happyhourdeals[i])
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
