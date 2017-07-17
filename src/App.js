import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        userArray: ''
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
        console.log(that.state.userArray)
      });
    }

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
