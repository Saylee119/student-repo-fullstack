const http = require("http");
const port = process.env.PORT || 5000;
const staticServe = require("node-static");
const querystring = require("querystring");

const file = new staticServe.Server("./");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(302, { Location: "/form" });
    res.end();
  } else if (req.method === "GET" && req.url === "/form") {
    file.serveFile("03-form.html", 200, {}, req, res);
  } else if (req.method === "POST" && req.url === "/submit") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const info = querystring.parse(body);
      res.setHeader("Content-Type", "text/html");
      res.write(`Name: ${info.name}<br>`);
      res.write(`Email: ${info.email}<br>`);
      res.write(
        `Comments: ${
          info.feedback ? info.feedback : "N/A"
        }<br>`
      );
      res.write(
        `Newsletter: ${
          info.newsletter
            ? "Yes, I would like to receive newsletters"
            : "No, thank you."
        }<br>`
      );
      res.end();
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(404);
    res.write(`<h1>Please go back and fill the information.</h1>`);
    res.end();
  }
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
