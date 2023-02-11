const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Express Js");
});

app.listen(5000);

module.exports = app;
