const http = require('http');
const port = process.env.PORT || 5000;

// http://localhost:5000/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5000/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5000/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5000/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// http://localhost:5000/check-cookies should return 'yes' / 'no' in plain text depending on whether the browser has the 'hello' cookie

// For other routes, such as http://localhost:5000/other, this exercise should return a status code 404 with '404 - page not found' in html format

const server = http.createServer((req, res) => {
  const routes = [
    'welcome',
    'redirect',
    'redirected',
    'cache',
    'cookie',
    'check-cookies',
    'other',
  ];

  let getRoutes = () => {
    let result = '';

    routes.forEach(
      (elem) => (result += `<li><a href="/${elem}">${elem}</a></li>`)
    );

    return result;
  };

  if (req.url === '/') {
    let routeResults = getRoutes();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Exercise 01</h1>`);
    res.write(`<ul> ${routeResults} </ul>`);
    res.end();
  } 
  else if (req.url === '/welcome') {
    let routeResults = getRoutes();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Hey There!</h1>`);
    res.write(`<h1>Welcome...</h1>`);
    res.end();
  } 
  else if (req.url === '/redirect') {
    let routeResults = getRoutes();

    res.writeHead(302, { 'location':'/redirected','Content-Type': 'text/html' });
    res.end();
  } 
  else if (req.url === '/redirected') {
    let routeResults = getRoutes();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>You've successfully redirected to the "/redirected" page :)</h1>`);
    res.end();
  } 
  else if (req.url === '/cache') {
    let routeResults = getRoutes();

    res.writeHead(200, { 'Content-Type': 'text/html', 'Cache-control':'max-age = 86400' });
    res.write(`<h1>This resource was cached.</h1>`);
    res.end();
  } 
  else if (req.url === '/cookie') {
    let routeResults = getRoutes();

    res.writeHead(200, { 'Content-Type': 'text/html', 'Set-Cookie': 'hello=world' });
    res.write(`<h1>Cookies...yummm</h1>`);
    res.end();
  }
  else if (req.url === '/check-cookies') {
    let routeResults = getRoutes();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    if(req.headers.cookie === 'hello=world'){
      res.write(`<h1>YES</h1>`);
    }
    else{
      res.write(`<h1>NO</h1>`);
    }
    res.end();
  }
  else{
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write(`<h1>Page is not available</h1>`);
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
