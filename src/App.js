import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Icons from './views/Home/Icons'
import Bio from './views/Home/Bio'
import './App.css'

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <div id="about-container">
          <Icons />
          <Bio />
        </div>
      </div>
    )
  }
}

export default App;

// <div>
//   <Router>
//     <Switch>
//       <Route path='/' component={Home}/>
//     </Switch>
//   </Router>
// </div>
