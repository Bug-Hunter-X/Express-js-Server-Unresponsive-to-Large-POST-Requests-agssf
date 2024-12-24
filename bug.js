const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Processing data, this might be time-consuming
  // ...
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));