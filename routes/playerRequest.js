var express = require('express');
var router = express.Router();
var request = require('request');

/* GET player listing. */
router.get('/:value', function(req, res, next) {
  request({
    url: 'http://data.nba.net/data/10s/prod/v1/2017/players/' + req.params.value + '_profile.json', json:true}, function(err, response, body) {

    res.send(body);

    });

});


module.exports = router;
