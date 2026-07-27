const express = require("express");

const app = express();

const PORT = 3000;

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  
}),

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});