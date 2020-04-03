import Config from '../../share/config';

export default function() {
  const host = `//${global.__LOCAL_IP__}:${Config.wdsPort}`;

  const jsFiles = ['libs.js', 'main.js', 'styles.js'];
  const cssFiles = ['styles.css'];

  const assets = {
    css: [],
    js: []
  }

  if(!__IS_PROD__) {
    assets.js.push(`<script type="text/javascript" src="${host}/libs.js"></script>`);
    assets.js.push(`<script type="text/javascript" src="${host}/main.js"></script>`);
    assets.js.push(`<script type="text/javascript" src="${host}/styles.js"></script>`);

    assets.css.push(`<link rel="stylesheet" type="text/css" href="${hist}/styles.css" />`);
  } else {

  }

  return assets;
}