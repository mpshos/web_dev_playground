const http = require('http');
const dt = require('./date_module')
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  var q = url.parse(req.url, true).query;

//   if( (typeof q.month !== 'undefined') && (typeof q.year !== 'undefined')){
  if( ('month' in q) && ('year' in q)){
    var txt = q.year + " " + q.month;
  }
  else{
    var txt = 'Parameters not supplied.';
  }
  
//   res.write("The date and time are currently: " + dt.myDateTime());
  res.write(txt);
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});