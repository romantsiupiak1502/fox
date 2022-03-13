if (typeof window === 'undefined') {
  const { mswServer } = require('./server/mswServer');
  mswServer.listen();
} else {
  const { mswWorker } = require('./browser/mswBrowser');
  mswWorker.start();
}

export {};
