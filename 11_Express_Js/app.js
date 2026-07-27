const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello World</h1>");
});

app.get("/about", function(req, res) {
    res.send("<h1>About Page</h1>");
});

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});