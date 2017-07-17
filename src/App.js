import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <table>
          <th>#</th>
          <th>Camper Name</th>
          <th>Points in the past 30 days</th>
          <th>All time points</th>
        </table>
      </div>
    );
  }
}

export default App;
