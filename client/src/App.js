import './App.css'
import { Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <header>Testing Testing Testing</header>
      <main>
        <Route path="/" component={Home} />
      </main>
    </div>
  )
}

export default App
