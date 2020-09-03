const ParcelProxyServer = require('parcel-proxy-server');

const DEFAULT_HMR_PORT = 8080;
const DEFAULT_PROXY_PORT = 3000;

const server = new ParcelProxyServer({
  entryPoint: './index.html',
  parcelOptions: {
    hmrPort: process.env.HOT_MODULE_RELOAD_PORT || DEFAULT_HMR_PORT,
    noAutoinstall: true,
  },
});

server.listen(process.env.PROXY_PORT || DEFAULT_PROXY_PORT, () => {});
