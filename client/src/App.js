import './styles/App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import React, { Component } from 'react'
import Nav from './components/Nav'
import AllHappyHours from './pages/AllHappyHours'
import axios from 'axios'
import { BASE_URL } from './globals'
import AddHappyHour from './pages/AddHappyHour'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      happyhours: [],
      happyhourdeals: [],
      newhappyhour: '',
      newhappyhourdeal: ''
    }
  }

  deleteAllHappyHours = async () => {
    // console.log('calling clear all happy horus')
    for (let i = 0; i < this.state.happyhours.length; i++) {
      this.deleteHappyHourHelper(this.state.happyhours[i]._id)
    }
    this.updateState()
  }

  deleteHappyHourHelper = async (id) => {
    console.log('deleteHappyHourHelper called')
    console.log(this.state)
    for (let i = 0; i < this.state.happyhourdeals.length; i++) {
      if (this.state.happyhourdeals[i].happyHour_Id === id) {
        this.deleteHappyHourDealHelper(this.state.happyhourdeals[i]._id)
      }
    }

    // for (let i = 0; i < this.happyhours.length; i++) {
    //   if (this.state.happyhours[i] === id) {
    //   } else {
    //     myUpdatedHappyHours.push(this.state.happyhours[i])
    //   }
    // }
    const res = await axios.delete(`${BASE_URL}/happyhours/${id}`)
    console.log(res)
    this.updateState()
    // console.log(this)
    // this.setState({ happyhours: myUpdatedHappyHours })
  }

  deleteHappyHourDealHelper = async (id) => {
    console.log('deleteHappyHourDealHelper called')
    const res = await axios.delete(`${BASE_URL}/deals/${id}`)
    console.log(res)
    this.updateState()
  }

  // clearHappyHourCards(e) {
  //   // console.log('Deleting all happy hour deals on a happy hour card')
  //   this.props.happyhour.deals = []
  //   this.setState({
  //     happyhourdealsArray: []
  //   })
  // }
  async addNewDealToHappyHour(formData) {}

  createHappyHour2 = async (formData) => {
    console.log('create happy hour 2 called')
    const res = await axios.post(`${BASE_URL}/happyhours/all`, formData)
    console.log(res)
    this.updateState()
    // console.log(this.props)
    // this.props.history.push('/allhappyhours')
    // this.setState({happyhours: [...happyhours, res.data]})
  }

  createHappyHour = async () => {
    console.log('create happy hour called')
    const res = await axios.post(`${BASE_URL}/happyhours/all`)
    console.log(res)
    this.updateState()
    // this.setState({happyhours: [...happyhours, res.data]})
  }
  // async createHappyHourDeal() {
  //   const res = await axios.post(`${BASE_URL}/happyhours/deals`)
  //   // console.log(res)
  // }

  createHappyHourDealHelper = async (id, formData) => {
    console.log(`create happy hour deal by id called on`, id, formData)
    const res = await axios.post(`${BASE_URL}/happyhours/add/${id}`, formData)
    console.log(res)
    this.updateState()
  }

  updateState = async () => {
    const res = await axios.get(`${BASE_URL}/happyhours/all`)
    console.log(res)
    this.setState({ happyhours: res.data.happyhours })
    const res2 = await axios.get(`${BASE_URL}/deals/all`)
    this.setState({ happyhourdeals: res2.data.happyhourdeals })
    console.log(this.state)
  }

  async componentDidMount() {
    // console.log(this.state)
    console.log('App.js component did mount called')
    const res = await axios.get(`${BASE_URL}/happyhours/all`)
    console.log(res)
    this.setState({ happyhours: res.data.happyhours })
    const res2 = await axios.get(`${BASE_URL}/deals/all`)
    // console.log(res.data)
    // console.log(res2.data)
    // console.log('changing state to res.data.happyhours')
    // console.log(this.state)
    // console.log('changing state to hapyphourdeals')
    // console.log(`res2 is`)
    // console.log(res2.data)
    this.setState({ happyhourdeals: res2.data.happyhourdeals })
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/allhappyhours"
              component={(props) => (
                <AllHappyHours
                  {...props}
                  happyhours={this.state.happyhours}
                  happyhourdeals={this.state.happyhourdeals}
                  deleteHappyHourHelper={this.deleteHappyHourHelper}
                  deleteHappyHourDealHelper={this.deleteHappyHourDealHelper}
                  createHappyHourDealHelper={this.createHappyHourDealHelper}
                />
              )}
            />
            <Route
              path="/addhappyhour"
              component={(props) => (
                <AddHappyHour
                  {...props}
                  createHappyHour={this.createHappyHour}
                  createHappyHour2={this.createHappyHour2}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    )
  }
}
