var express = require('express');
var router = express.Router();
var request = require('request');

/* GET player listing. */
router.get('/', function(req, res, next) {
  request({
    url: 'http://data.nba.net/10s/prod/v1/2017/players.json', json:true}, function(err, response, body) {
    var list = []

  	//Creates a list of all players and their respective player ID's
  	for(var i in body.league.standard) {
  		var player = body.league.standard[i];

  		list.push({
  			"firstName" : player.firstName,
  			"lastName" : player.lastName,
  			"personID" : player.personId
  		});

  	};

    res.send(list);
});
});

module.exports = router;
