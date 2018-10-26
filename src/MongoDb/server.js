var express = require('express');
var app = express();

app.get('/addcar',function(req,res){
    res.append("Access-Control-Allow-Origin", "*");
    var id = req.query.id*1;
    var color = req.query.color;
    var size = req.query.size;
    var num = req.query.num*1;
    var name = req.query.name;
    var price = req.query.price;
    var img = req.query.img;
    const MongoClient = require('mongodb').MongoClient;
    const assert = require('assert');
    
    // Connection URL
    const url = 'mongodb://localhost:27017';
    
    // Database Name
    const dbName = 'yoho';
    
    // Use connect method to connect to the server
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("连接成功！！");
        console.log(id)
        const db = client.db(dbName);
        db.collection('make').insertMany([
            {id:id, name:name, price:price, Color: color,Size: size,Num: num,Img:img}
        ], function (err, result) {
            // assert.equal(err, null);
            // assert.equal(3, result.result.n);
            // assert.equal(3, result.ops.length);
            console.log("插入成功");
            console.log(result);
            res.send(result)
        });
        client.close();
    });


        
})
app.get('/getcar',function(req,res){
    res.append("Access-Control-Allow-Origin", "*");

    const MongoClient = require('mongodb').MongoClient;
    const assert = require('assert');
    
    // Connection URL
    const url = 'mongodb://localhost:27017';
    
    // Database Name
    const dbName = 'yoho';
    
    // Use connect method to connect to the server
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("连接成功！！");
        
        const db = client.db(dbName);
        db.collection('make').find({}).toArray(function(err, result) {
            console.log("读取成功");
            console.log(result);
            res.send(result)
        });
        client.close();
    });


        
})

app.listen(9999);
