import './App.css'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import React, {Component} from 'react'

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
        <header>Testing Testing Testing</header>
        <main>
          <Route path="/" component={Home} />
        </main>
      </div>
    )
  }
}

export default App
