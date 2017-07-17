import React, { Component } from 'react';

class UserStats extends Component {
  constructor(props) {
      super(props);

      this.state = {
        userStatus: props.userStatus
      };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            userStatus: nextProps.userStatus
        });
    }

  render() {
    var userLine = this.state.userStatus.map((data, index) => {
      return (
          <tr key={data.username}>
            <td>{index + 1}</td>
            <td>{data.username}</td>
            <td>{data.recent}</td>
            <td>{data.alltime}</td>
          </tr>
        );
    });

    return (
      <tbody>
        {userLine}
      </tbody>
    );
  }
}

export default UserStats;
