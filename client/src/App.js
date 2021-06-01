import './styles/App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import React, { Component } from 'react'
import Nav from './components/Nav'
import AllHappyHours from './pages/AllHappyHours'
import axios from 'axios'
import { BASE_URL } from './globals'

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

  async componentDidMount() {
    console.log(this.state)
    console.log('component did mount called')
    const res = await axios.get(`${BASE_URL}/happyhours`)
    console.log(res.data)
    console.log('changing state to res.data.happyhours')
    this.setState({ happyhours: res.data.happyhours })
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
                <AllHappyHours {...props} happyhours={this.state.happyhours} />
              )}
            />
          </Switch>
        </main>
      </div>
    )
  }
}
