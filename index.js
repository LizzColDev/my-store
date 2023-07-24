const express = require('express');
const routerApi = require('./src/routes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, my server in express')
});

routerApi(app);




app.listen(port, () =>{
  console.log('My port' + port)
});

