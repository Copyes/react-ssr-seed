import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, matchPath } from 'react-router';
import { renderRoutes } from 'react-router-config';
import Config from '../../share/config';
import Index from '../../client/pages/index';

export default async (ctx, next) => {
  const path = ctx.request.path;


  // the root
  if(path.indexOf('.') > -1) {
    ctx.body = null;
    return next();
  }

  console.log(`ctx.request.path: ${ctx.request.path}`);

  // let html = '';
  // let fetchResult = {};
  // let tdk = {
  //   title: '默认标题',
  //   keywords: '默认关键词',
  //   description: '默认描述'
  // };



  // if(Config._IS_SSR_) {

  // }

  // const assetsMap = getAssets();

  let html = renderToString(<Index />);
  ctx.body = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <div id='root'>
      ${html}
    </div>
  </body>
  </html>
  `
}