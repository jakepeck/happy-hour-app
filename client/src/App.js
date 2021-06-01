import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import React, {Component} from 'react'
import Nav from './components/Nav'
import AllHappyHours from './pages/AllHappyHours'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      happyhours: [],
      happyhourdeals: [],
      newhappyhour: '',
      newhappyhourdeal: ''
    }
  }

  render(){
    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/allhappyhours" component={AllHappyHours}/>
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
