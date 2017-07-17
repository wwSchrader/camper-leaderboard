import React, { Component } from 'react';
import './App.css';
import UserStats from './UserStats.js';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        userArray: []
      };
    }

    componentDidMount() {
      var url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
      var that = this;

      fetch(url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        that.setState({ userArray: data});
      });
    }

  render() {

    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Camper Name</th>
              <th>Points in the past 30 days</th>
              <th>All time points</th>
            </tr>
          </thead>
          <UserStats userStatus={this.state.userArray} />
        </table>
      </div>
    );
  }
}

export default App;
