import nodeStatic from 'node-static';
import { createServer } from 'http';

const PORT = '4002';

const fileServer = new nodeStatic.Server('./app');

const serveApp = () => {
  createServer((req, res) => {
    req
      .addListener('end', () => {
        fileServer.serve(req, res);
      })
      .resume();
  }).listen(PORT, () => {
    console.log(`App server available at http://localhost:${PORT}!`);
  });
};

export default serveApp;
