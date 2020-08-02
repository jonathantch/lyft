const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/test', (req, res) => {
  const input = req.body.string_to_cut;
  const outputArr = [];

  if (typeof input !== 'string') {
    res.status(422).send('The input is not valid.');
  } else {
    for (let i = 0; i < input.length; i++) {
      if ((i + 1) % 3 === 0) {
        outputArr.push(input[i]);
      }
    }
    res.status(200).send({return_string: outputArr.join('')});
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});