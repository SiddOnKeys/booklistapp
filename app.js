const express = require("express");
const app = express();

const jsonServer = require("json-server");
const dbserver = jsonServer.create();
const router = jsonServer.router("./src/database/db.json");
const path = require("path");

const port = process.env.PORT || 5000;

// if (process.env.NODE_ENV === "production") {
app.use(express.static("build"));
app.use("/api", router);
app.get("*", (req, res) => {
  req.sendFile(path.resolve(__dirname, "build", "index.html"));
});
// }

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("server running on port:", port);
});
