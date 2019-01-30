 const http = require('http');
 const express = require('express');

 const app = express();
 app.use(express.json());

 app.get('/test', (req, res) => {
   console.log('New request /test');
   res.status(200).send();
 });

app.post('/dectobin', (req, res) => {
  console.log('New request /dectobin');
  let dec = req.body.value;
  if (dec==undefined) {
    res.status(400);
  }
  if (dec<0) {
    res.status(400);
  }
  console.log(dec);

  let bin;
  res.status(200).send();
});

 app.listen(3000);
