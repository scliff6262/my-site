import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Face, Group } from '@material-ui/icons'
import './App.css'

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <div id="about-container">
          <div id="icon-container">
            <h2 className="section-title">ABOUT</h2>
            <div className="trait-container">
              <Face/>
            <p><b>Code</b></p>
            </div>
            <div className="trait-container">
              <Group/>
              <p><b>Teamwork</b></p>
            </div>
            <div className="trait-container">Well-Rounded</div>
            <div className="trait-container">Fun</div>
          </div>
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
