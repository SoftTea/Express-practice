const express = require('express');

const app = express();

app.get('/greeting', (req,res) => {
  res.send('Hello, stranger');
})
//Greetings App
app.get('/greeting/:name', (req, res) => {
  console.log(req.params);
  res.send(`Hello ${req.params.name}, it is nice to see you today`);
});

app.listen(3000, ()=>{
  console.log('this')
})