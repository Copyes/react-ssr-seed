import Koa from 'koa2';
import KoaStatic from 'koa-static';
// import path from 'path';
import config from '../share/config';
import ReactSsr from './middlewares/react-ssr.js';

const port = config.nsPort || process.env.PORT;
const app = new Koa();

app.use(KoaStatic('./dist/static'));
app.use(ReactSsr);

app.listen(port, () => console.log(`server started, the port is ${port}`))