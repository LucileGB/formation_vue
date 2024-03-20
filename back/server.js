var express = require("express");
var serveIndex = require("serve-index");
var api = require("./api");
var app = express();
var port = 3000;
app.use(function (req, res, netx) {
    console.log("req:", req.method, req.url);
    netx();
});
app.use("/api", api);
app.use(express.static("."));
app.use(serveIndex(".", { icons: true }));
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
console.log("Ceci arrivera avant");
