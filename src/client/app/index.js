

//client/app/index.js
//浏览器端页面结构渲染入口

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../router/index';
import routeList from '../router/routes-config';
//渲染index 组件1
ReactDom.hydrate(
    <BrowserRouter>
        <App routeList={routeList} />
    </BrowserRouter>, document.getElementById('root'))
