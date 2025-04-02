
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/PortfolioApp/browser/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/PortfolioApp/browser"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7268, hash: '441e22d7031e8403b884c55ecac24fefa5a665cc499b324238e3a5f0562bd8b5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1175, hash: 'cbdac80c163bfe7e9deef807fff66c67d2932bd4a4a055b38d41e36849c4927c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 41500, hash: '666e91b1b1789035b75d4ef09391b25aaa368e3f6daf7225acf18b558e89ac9c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NPO52JHG.css': {size: 394516, hash: '9EyFOYEP9x8', text: () => import('./assets-chunks/styles-NPO52JHG_css.mjs').then(m => m.default)}
  },
};
