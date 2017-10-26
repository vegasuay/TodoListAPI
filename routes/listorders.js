var express = require('express');
var url = require('url');
var dataservice = require('./../modules/listorderdataservice');
var ListOrder = require('./../bd/models/listorder');
var router = express.Router();

/* GET mi lista*/
router.get('/mylist', 
    function(req, res, next) {
        //var get_params = url.parse(req.url, true).query;
        console.log(process.env.MONGODB_USER);
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
