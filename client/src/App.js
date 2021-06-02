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

  clearAllHappyHours() {
    // console.log('calling clear all happy horus')
    this.setState({ happyhours: [] })
  }

  clearHappyHourCards(e) {
    // console.log('Deleting all happy hour deals on a happy hour card')
    this.props.happyhour.deals = []
    this.setState({
      happyhourdealsArray: []
    })
  }

  async createHappyHour() {
    const res = await axios.post(`${BASE_URL}/happyhours`)
    // console.log(res)
    this.setState({})
  }

  async createHappyHourDeal() {
    const res = await axios.post(`${BASE_URL}/happyhours/deals`)
    // console.log(res)
  }

  async componentDidMount() {
    // console.log(this.state)
    // console.log('component did mount called')
    const res = await axios.get(`${BASE_URL}/happyhours/all`)
    console.log(res.data)
    // console.log('changing state to res.data.happyhours')
    this.setState({ happyhours: res.data.happyhours })
    // console.log(this.state)
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
                  clearAllHappyHours={this.clearAllHappyHours}
                  clearHappyHourCards={this.clearHappyHourCards}
                />
              )}
            />
            <Route path="/addhappyhour" component={AddHappyHour} />
          </Switch>
        </main>
      </div>
    )
  }
}
