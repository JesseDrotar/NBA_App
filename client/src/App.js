import React, { Component } from 'react';
import './App.css';
import Players from './components/players.js'
import SinglePlayer from './components/SinglePlayer.js'

class App extends Component {

  constructor(props) {
    super(props);
    /*this.playerclick = this.playerclick.bind(this);*/
    this.valueChange = this.valueChange.bind(this);
    this.state = {
      players: [],
      value: ''
    };
  }

  valueChange(new_value) {
    this.setState({value: new_value});
  }

  componentDidMount() {
    fetch('../players')
      .then(response => response.json())
      .then(data => this.setState({ players: data }));
    }

  render() {
    const players = this.state.players;
    const value = this.state.value;
    return(
    <div className="App">
      <Players players={players} value = {value} valueChange={this.valueChange}/>
      <SinglePlayer value = {value} />
    </div>
  )
}
}



export default App;
