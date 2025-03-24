
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/PortfolioApp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/PortfolioApp"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 508, hash: '92e59d84f67d31be9e376f67950820bef1bfc791f69c92ec6bafcbd8c5dfe43d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1021, hash: '5af426af7cbd3727fbfac939549e73b21e8cef7b236c84286150b1e0c4184b23', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20852, hash: '43a442403527c7e2b0414b434266ef8bc88c793753fb01eab52a6ec4acbbdd23', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
