const express = require("express");
const serveIndex = require("serve-index");
const app = express();
const port = 3000;

app.use((req, res, netx) => {
  console.log("req:", req.method, req.url);
  netx();
});

app.use(express.static("."));
app.use(serveIndex(".", { icons: true }));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log("Ceci arrivera avant");
