const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process data asynchronously and handle errors
  process.nextTick(() => {
    if (data.hasOwnProperty('someProperty') && data.someProperty === 'someValue') {
      res.status(200).send('Success');
    } else {
      res.status(400).send('Bad Request');
    }
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));