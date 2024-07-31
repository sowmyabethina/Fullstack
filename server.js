/** server.js **/

var http=require('http');

http.createServer((req,res)=>{
    res.write(req.url);
    res.end();
    console.log('server running..')
}).listen(8080)

/** FILE SYSTEM **/

var http=require('http');
var fs=require('fs');
http.createServer((req,res)=>{
    fs.readFile('test.txt',(err,data)=>{
        res.write(data);
        res.end();
    })
}).listen(8080)

::NOTE:: using read file method it can diplay the information in the file

/** USING APPEND **/

var http=require('http');
var fs=require('fs');
http.createServer((req,res)=>{
    fs.appendFile('test.txt',welcome,(err,data)=>{
        res.write(data);
        res.end();
    })
}).listen(8080)

::NOTE::
using append method we can add text directly to the information in the text file 
