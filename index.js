const http = require('http');

http.createServer((req,res)=>{
  res.write("<h1>hello,ites my first browser server test</h1>");
  res.end();
}).listen(4500);