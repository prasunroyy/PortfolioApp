
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/PortfolioApp/docs/browser/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/PortfolioApp/docs/browser"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7273, hash: '6932f4436c20bb4f5af99d8807c68b929f1e17211d6c7446424d938e4401e991', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1180, hash: '775593b6a001cdc46623a5d8bcb1efc43c4a6be8ef6d467bed700e57b9088748', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 41505, hash: 'f73fb20d6a2824cc59d0df79f668d63dce6a3cffd2b6a69380edfdf541972403', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NPO52JHG.css': {size: 394516, hash: '9EyFOYEP9x8', text: () => import('./assets-chunks/styles-NPO52JHG_css.mjs').then(m => m.default)}
  },
};
