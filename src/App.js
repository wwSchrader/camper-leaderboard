import React, { Component } from 'react';
import './App.css';
import UserStats from './UserStats.js';
import { Table } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        userArray: [],
        recentPointsArray: [],
        alltimePointsArray: []
      };

      this.onFilterClick = this.onFilterClick.bind(this);
    }

    componentDidMount() {
      this.fetchData();
    }

    fetchData() {
      var that = this;
      var recentUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
      var alltimeUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

      fetch(recentUrl)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        that.setState({
          userArray: data,
          recentPointsArray: data});
      });


      fetch(alltimeUrl)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        that.setState({ alltimePointsArray: data});
      });
    }

    onFilterClick(filter) {
      if ('recent' === filter){
        this.setState({
          userArray: this.state.recentPointsArray
        });
      } else {
        this.setState({
          userArray: this.state.alltimePointsArray
        });
      }
    }

  render() {
    return (
      <div className="App">
        <h1>freeCodeCamp Leader Board</h1>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Camper Name</th>
              <th onClick={() => this.onFilterClick('recent')}>Points in the past 30 days</th>
              <th onClick={() => this.onFilterClick('alltime')}>All time points</th>
            </tr>
          </thead>
          <UserStats userStatus={this.state.userArray} />
        </Table>
      </div>
    );
  }
}

export default App;
