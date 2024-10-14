const express = require("express");
const app = express();
const port = 7555;

app.use(express.json());

// GET request
app.get("/api", (req, res) => {
  res.send("GET request received!");
});

// POST request
app.post("/api", (req, res) => {
  res.send("POST request received!");
});

// PUT request
app.put("/api", (req, res) => {
  res.send("PUT request received!");
});

// DELETE request
app.delete("/api", (req, res) => {
  res.send("DELETE request received!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
