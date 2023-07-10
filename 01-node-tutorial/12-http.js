const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to our home page");
    res.end();
  } else if (req.url === "/about") {
    res.end("Welcome to about page");
  } else {
    res.write(`<h1>Oops</h1>
        <p>The the page you are looking for is not found</p>
        <a href='/'>Home</a>`);
    res.end();
  }
});

server.listen(5000);
