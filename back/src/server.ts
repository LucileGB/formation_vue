import express from "express";
import serveIndex from "serve-index";

import api from "./api";

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("req:", req.method, req.url);
  next();
});

app.use("/api", api);

app.use(express.static("."));
app.use(serveIndex(".", { icons: true }));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log("Ceci arrivera avant");
