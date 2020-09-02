const ParcelProxyServer = require('parcel-proxy-server');

const DEFAULT_API_PORT = 3000;
const DEFAULT_PROXY_PORT = 3000;
const DEFAULT_API_HOST = 'localhost';

const server = new ParcelProxyServer({
  entryPoint: './index.html',
  parcelOptions: {
    noAutoinstall: true,
  },
  proxies: {
    '/api': {
      target: `http://${process.env.API_HOST || DEFAULT_API_HOST}:${process.env.API_PORT || DEFAULT_API_PORT}`,
    },
  },
});

server.listen(process.env.PROXY_PORT || DEFAULT_PROXY_PORT, () => {});
