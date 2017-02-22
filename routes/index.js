var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/:time' ,function(req,res){
    // res.render('index',{ time: req.params.time });
    // var data = { time: req.params.time };
    // res.json(data);
    function addLeadZero(date){
    	if(date<10){
    		return '0'+date;
    	}
    	else{
    		return date;
    	}
    }
    function unixToNatural(unixVal){
    	var date = new Date( unixVal * 1000);
    	var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    	var month = months[date.getMonth()];
    	var day = addLeadZero(date.getDate());
    	var year = date.getFullYear();

    	return month + ' ' +  day + ', ' + year;
    }

    function naturalToUnix(natVal){
    	var date = new Date();
    }

    var input = req.params.time;
    if(!isNaN(input)){
    	var result = unixToNatural(input);
    	var data = {unix: input, natural: result};
    	res.json(data);
    }
    else{
    	var natural = new Date(input);
    	if(!isNaN(natural)){
    		var unix = natural/1000;
    		var data = {unix:unix,natural:input};
    		res.json(data);
    	}
    	else{
    		res.json({unix: null, natural: null});
    	}
    }
});

module.exports = router;
