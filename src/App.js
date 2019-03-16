import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/Home'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path='/home' component={Home}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
