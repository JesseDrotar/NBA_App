import React, { Component } from 'react';
import '../App.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

//var ReactTable = require('react-table').default;

class SinglePlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: {},
    }
  }


componentWillReceiveProps(nextProps) {
  console.log(nextProps.value);
  if(nextProps.value === '')
  {
    console.log('Need to select a player');
  }
  else {
    fetch('../playerRequest/' + nextProps.value)
      .then(response => response.json())
      .then(data => this.setState({stats: data.league.standard.stats}));

  }
}



  render() {
    const stats = this.state.stats.regularSeason;
    //const table_headers = ["year", "ppg", "rpg", "apg", "mpg", "topg", "spg", "bpg", "tpp", "ftp", "fgp", "assists", "blocks", "steals", "turnovers", "offReb", "defReb", "totReb", "fgm", "fga", "tpm", "tpa", "ftm", "fta", "pFouls", "points", "gamesPlayed", "gamesStarted", "plusMinus", "min", "dd2", "td3"]

    //const columns = [{Header: 'Year', accessor: 'year'}, {Header: 'ppg', accessor: 'ppg'}, {Header: 'rpg', accessor: 'rpg'}, {Header: "apg", accessor: 'apg'}, {Header: 'mpg', accessor: "mpg"}, {Header: "topg", accessor: "topg"}, {Header: "spg", accessor: "spg"}, {Header: "bpg", accessor: "bpg"}, {Header: "tpp", accessor: "tpp"},{Header: "ftp", accessor: "ftp"}, {Header: "fpg", accessor: "fpg"}, {Header: "assists", accessor: "assists"}, {Header: "blocks", accessor: "blocks"}, {Header: "steals", accessor: "steals"}, {Header: "turnovers", accessor: "turnovers"}, {Header: "offReb", accessor: "offReb"}, {Header: "defReb", accessor: "defReb"}, {Header: "totReb", accessor: "totReb"}, {Header: "fgm", accessor: "fgm"}, {Header: "fga", accessor: "fga"}, {Header: "tpm", accessor: "tpm"}, {Header: "tpa", accessor: "tpa"}, {Header: "ftm", accessor: "ftm"}, {Header: "fta", accessor: "fta"}, {Header: "pFouls", accessor: "pFouls"}, {Header: "points", accessor: "points"}, {Header: "gamesPlayed", accessor: "gamesPlayed"}, {Header: "gamesStarted", accessor: "gamesStarted"}, {Header: "plusMinus", accessor: "plusMinus"}, {Header: "min", accessor: "min"}, {Header: "dd2", accessor: "dd2"}, {Header: "td3", accessor: "td3"}]


    const columns = [{
      Header: 'Year',
      accessor: 'seasonYear'},
      {Header: 'APG',
      accessor: 'total.apg'},
      {Header: 'Assists',
      accessor: 'total.assists'},
      {Header: 'Blocks',
      accessor: 'total.blocks'},
      {Header: 'BPG',
      accessor: 'total.bpg'},
      {Header: 'DD2',
      accessor: 'total.dd2'},
      {Header: 'defReb',
      accessor: 'total.defReb'},
      {Header: 'FGA',
      accessor: 'total.fga'},
      {Header: 'FGM',
      accessor: 'total.fgm'},
      {Header: 'FTP',
      accessor: 'total.ftp'},
      {Header: 'gamesPlayed',
      accessor: 'total.gamesPlayed'},
      {Header: 'gamesStarted',
      accessor: 'total.gamesStarted'},
      {Header: 'min',
      accessor: 'total.min'},
      {Header: 'MPG',
      accessor: 'total.mpg'},
      {Header: 'offReb',
      accessor: 'total.offReb'},
      {Header: 'pFouls',
      accessor: 'total.pFouls'},
      {Header: 'plusMinus',
      accessor: 'total.plusMinus'},
      {Header: 'points',
      accessor: 'total.points'},
      {Header: 'PPG',
      accessor: 'total.ppg'},
      {Header: 'RPG',
      accessor: 'total.rpg'},
      {Header: 'SPG',
      accessor: 'total.spg'},
      {Header: 'steals',
      accessor: 'total.steals'},
      {Header: 'TD3',
      accessor: 'total.td3'},
      {Header: 'TeamID',
      accessor: 'total.teamId'},
      {Header: 'TotReb',
      accessor: 'total.totReb'},
      {Header: 'TPA',
      accessor: 'total.tpa'},
      {Header: 'TPM',
      accessor: 'total.tpm'},
      {Header: 'TPP',
      accessor: 'total.tpp'},
      {Header: 'turnovers',
      accessor: 'total.turnovers'},
  ]

    console.log(stats);
    if(typeof(stats) !== 'object') {
      return (
      <div className="SinglePlayer">

      </div>
    )
    }
    else {
    return(
    <div className="SinglePlayer">

      <ReactTable
        data={stats.season}
        columns = {columns}
      />

    </div>
    )
  }
}
}



export default SinglePlayer;
