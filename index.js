const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({ msg: 'this is msg value' });
});

app.listen(port, () => {
  console.log(`running at http://localhost:${port}`);
});
