
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
    'index.csr.html': {size: 7256, hash: 'd3ad98a27f4c3b5d3c7d0760faf348007a080a71f3799274442bd43b3485058e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1163, hash: '6f12536aff9896f443bba3f0240c5546ee3493519a1c923977fb2833ba9dff71', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 41558, hash: 'ec492f5388b03d3ba77e5ba96de5237eb2ad46d2284ecca085e92457d8c39d8e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NPO52JHG.css': {size: 394516, hash: '9EyFOYEP9x8', text: () => import('./assets-chunks/styles-NPO52JHG_css.mjs').then(m => m.default)}
  },
};
