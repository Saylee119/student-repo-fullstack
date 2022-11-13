const express = require("express");
const session = require("express-session");
const app = express();
const port = process.env.PORT || 5001;

app.use(
  session({
    store: new session.MemoryStore(),
    secret: "full-stack",
    resave: false,
    saveUninitialized: true
  })
);

app.get("/favicon.ico", (req, res) => res.status(204));

app.use((req, res, next) => {
  res.setHeader("content-type", "text/html");
  res.write(`<p>Currently on route: ${req.url}</p>`);
  res.write(`<p>Peviously Visited:</p>`);
  if (req.session.previouslyVisited) {
    req.session.previouslyVisited.push(`${req.url}`);
  } else {
    req.session.previouslyVisited = [];
    req.session.previouslyVisited.push(`${req.url}`);
  }
  req.session.previouslyVisited.forEach(url => {
    res.write(`<p>${url}</p>`);
  });
  next();
});

app.get("/*", (req, res) => {
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});