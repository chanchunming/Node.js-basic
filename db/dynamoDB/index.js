var express = require('express');
var router = express.Router();
router.use(express.json())

var app = express();

const AWS = require('aws-sdk');
const AWSdynamoDBconfig = require('./config/config.js');

router.get('/:table', function(req, res){

    AWS.config.update(AWSdynamoDBconfig.aws_remote_config);
    let docClient = new AWS.DynamoDB.DocumentClient();
    let params = {
        TableName: req.params.table
    };

    docClient.scan(params, function (err, data) {
        if (err) {
            console.log(err)
            res.send({
                success: false,
                message: err
            });
        } else {
            res.send({
                success: true,
                result: data
            });
        }
    });

})

router.post('/:table', function(req, res){

    AWS.config.update(AWSdynamoDBconfig.aws_remote_config);
    let docClient = new AWS.DynamoDB.DocumentClient();
    let params = {
        TableName: req.params.table,
        Item: req.body.item
    };

    docClient.put(params, function (err, data) {
        if (err) {
            console.log(err)
            res.send({
                success: false,
                message: err
            });
        } else {
            res.send({
                success: true,
                result: data
            });
        }
    });

})



router.delete('/:table', function(req, res){

    AWS.config.update(AWSdynamoDBconfig.aws_remote_config);
    let docClient = new AWS.DynamoDB.DocumentClient();
    let params = {
        TableName: req.params.table,
        Key: req.body.key
    };

    docClient.delete(params, function (err, data) {
        if (err) {
            console.log(err)
            res.send({
                success: false,
                message: err
            });
        } else {
            res.send({
                success: true,
                result: data
            });
        }
    });

})

module.exports = router;