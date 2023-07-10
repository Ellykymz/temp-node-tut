const http = require("http");
const { readFileSync } = require("fs");
const homePage = readFileSync("./navbar-app/index.html", "utf-8");
const homeStyle = readFileSync("./navbar-app/styles.css", "utf-8");
const homeImage = readFileSync("./navbar-app/logo.svg", "utf-8");
const homeLogic = readFileSync("./navbar-app/browser-app.js", "utf-8");

const server = http.createServer((req, res) => {
  console.log(req.url);
  //   Home page
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(homePage);
  }
  //   About Page
  else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>About page</h1>");
  }
  // Styles
  else if (req.url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.end(homeStyle);
  }
  // Styles
  else if (req.url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.end(homeImage);
  }
  // Styles
  else if (req.url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.end(homeLogic);
  }
  //   404 Not Found
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>Oops Page not found</h1>");
  }
});

server.listen(5000);
