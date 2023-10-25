const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Tugas Dockerized SISTER Node.js App Punya Firda!');
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
