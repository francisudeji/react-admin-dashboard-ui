import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Balances from './pages/balances'
import Transfers from './pages/transfers'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Balances} />
        <Route exact path='/transfers' component={Transfers} />
      </Switch>
    </Router>
  )
}

export default App
