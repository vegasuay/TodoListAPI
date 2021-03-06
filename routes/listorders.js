var express = require('express');
var passport = require('passport');
var url = require('url');
var dataservice = require('./../dataservices/listorder');
var ListOrder = require('./../bd/models/listorder');
var router = express.Router();

/* GET mi lista*/
router.get('/mylist', passport.authenticate('bearer', { session: false }),
    function(req, res, next) {
        //var get_params = url.parse(req.url, true).query;
        res.setHeader('content-type','application/json');
        dataservice.list(ListOrder, res, 'vegasuay');
    }
);

router.get('/', 
    function(req, res, next) {
        res.setHeader('content-type','application/json');
        dataservice.list(ListOrder, res);
    }
);

/* PUT producto a lista */
router.put('/', function(req, res){
    dataservice.create(ListOrder, res, req.body);
});

router.delete('/', function(req,res){
    dataservice.delete(ListOrder, res, req.body);
});

module.exports = router;
