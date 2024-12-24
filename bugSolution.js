const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' })); // Adjust limit as needed
app.post('/data', (req, res) => {
  const data = req.body;
  // Processing data
  // ...
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));