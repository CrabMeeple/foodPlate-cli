const port = 3005;
const data_file_path = 'food-short.json';
const json_spaces = 2;

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(data_file_path);
const middlewares = jsonServer.defaults();

server.set('json spaces', json_spaces);


router.render = (req, res) => {
  let headersToExpose = ['X-Content-Length'];
  let currentExposedHeaders = res.getHeader('Access-Control-Expose-Headers');

  if (currentExposedHeaders) {
    res.header('Access-Control-Expose-Headers', headersToExpose.concat(currentExposedHeaders.split(',')).join(','));
  } else {
    res.header('Access-Control-Expose-Headers', headersToExpose.join(','));
  }

  res.send(res.locals.data);
}

//default json-server middlewares
server.use(middlewares);

server.use((req, res, next) => {
  // res.header('X-Content-Length', '53370429');

  let path = req.path.split("/")[1];
  let data = router.db.get(path).value();

  if (data !== undefined) {
    let replacer = null;
    let escape = null;
    let content = JSON.stringify(data, replacer, json_spaces, escape);

    let contentLength = content.length;
    console.log(contentLength);
    res.header('X-Content-Length', contentLength);
  }

  next();
});

server.use(router);

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});