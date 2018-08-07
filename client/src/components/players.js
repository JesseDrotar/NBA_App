import React, { Component } from 'react';
import '../App.css';


class Players extends Component {
  constructor(props) {
    super(props);
    this.playerclick = this.playerclick.bind(this);
    /*this.playerclick = this.playerclick.bind(this);

    this.state = {
      players: [],
      value: 'default'
    };*/
  }

  /*componentDidMount() {
    fetch('../players')
      .then(response => response.json())
      .then(data => this.setState({ players: data }));
    }*/

  playerclick(event) {
    this.props.valueChange(event.target.value);
  }

  render() {

    const players = this.props.players;
    const value = this.props.value;
    return (
      <div>
        <h1>Players</h1>
        <select id = 'playerSelect' onChange={this.playerclick}>
        {players.map(player =>
          <option value = {player.personID}>{player.firstName} {player.lastName}</option>
        )}
        </select>
      </div>
    );
  }
}


export default Players;
