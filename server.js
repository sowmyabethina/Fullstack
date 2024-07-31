1)
/** HTTP **/

var http=require('http');

http.createServer((req,res)=>{
    res.write(req.url);
    res.end();
    console.log('server running..')
}).listen(8080)

2)
    /** FILE SYSTEM **/

        var http=require('http');
        var fs=require('fs');
        http.createServer((req,res)=>{
            fs.readFile('test.txt',(err,data)=>{
                res.write(data);
                res.end();
            })
        }).listen(8080)
::OUTPUT:: Hello 
::NOTE:: using read file method it can diplay the information in the file

3)
    /** USING APPEND **/

        var http=require('http');
        var fs=require('fs');
        http.createServer((req,res)=>{
            fs.appendFile('test.txt',welcome,(err,data)=>{
                res.write(data);
                res.end();
            })
        }).listen(8080)

::OUTPUT:: Hello welcome
::NOTE::
Using append method we can add text directly to the information in the text file 

4)
    /** WRITE **/
        var http=require('http');
        var fs=require('fs');
        http.createServer((req,res)=>{
            fs.writeFile('test.txt',sasi engg college,(err,data)=>{
                res.write(data);
                res.end();
            })
        }).listen(8080)

OUTPUT: sasi engg college
::NOTE::using write we can replace the information in the file


