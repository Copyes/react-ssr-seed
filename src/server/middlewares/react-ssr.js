// /src/server/middlewares/react-ssr.js

//完成 react ssr 工作的中间件
//引入Index 组件
import React from 'react';
import { renderToString} from 'react-dom/server';
import { StaticRouter, Route, matchPath} from 'react-router';
import App from '../../client/router/index';
import routeList from '../../client/router/routes-config';

export default  (ctx,next)=>{

    console.log('ctx.request.path', ctx.request.path);
    console.log('ctx.request.url', ctx.request.url);
    const path = ctx.request.path;

    const html = renderToString(<StaticRouter location={path}>
        <App routeList={routeList}></App>
  </StaticRouter>);

    ctx.body=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>my react ssr</title>
</head>
<body>
    <div id="root">
       ${html} <span>测试内容</span>
    </div>
</body>
</html>
<script type="text/javascript"  src="index.js"></script>
`;

    return next();
}