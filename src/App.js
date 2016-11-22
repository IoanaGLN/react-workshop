import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { UsersListContainer } from './modules/users';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
    }
  }

  render() {
    // TODO  -  add CarsListContainer and TripsListContainer
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {
          this.state.activeTab === 0 ? 
            <UsersListContainer /> : null
        }
        
      </div>
    );
  }
}

export default App;
