// const https = require('http');

// const handleAllRequest = () => {
//     console.log('HI');
// }
//     const server = https.createServer(handleAllRequest);

// server.listen(3000, '127.0.0.1');

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.listen(3090, () => {
  console.log("Server listening on port 3090");
});
