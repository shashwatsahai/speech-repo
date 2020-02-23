var mysql      = require('mysql');
var express = require('express');
var cors = require('cors');
var app = express();
var config = require('../../server/config.json')
var Connection = mysql.createConnection(config.mysql);
const port = process.env.PORT || 8080;

app.use(cors())

Connection.connect((error)=>{
    if(!!error) console.log("error");
    else console.log("connected");
});

app.get('/Users',function (req,res) {
    console.log("At Root");
    var k=[];
    Connection.query("SELECT * FROM Users",function(error, rows, fields) {
        if(!!error){
            console.log("error");
        }
        else {
            var k=[];
            rows.forEach(element => {
                k.push({'id':element.id,'pass':element.pass});
            });
            res.send(k);
           
        }
    });
});

app.listen(8080,(error)=>{console.log(error)});
//export default Connection;