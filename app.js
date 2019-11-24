const ejs = require('ejs');
const http = require('http');

http.createServer((req, res) => {
  if(req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    ejs.renderFile('./views/index.html', {
      title: 'test ssr',
      data: '测试'},
      (err, data) => {
        if(err) {
          console.log(err);
        } else {
          res.end(data);
        }
      });
  }
}).listen(8080);