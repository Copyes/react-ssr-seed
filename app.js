const ejs = require('ejs');
const React = require('react');
const {renderToString} = require('react-dom/server');
const http = require('http');

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>
      {this.props.data.title}
    </h1>
  }
}

const data = {
  title: '测试'
}

http.createServer((req, res) => {
  if(req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    const html = renderToString(<Index data={data}/>);
    res.end(html);
  }
}).listen(8080);