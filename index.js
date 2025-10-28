require('dotenv').config()
const express = require("express");

const app = express();
const port = 4000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/twitter',(req,res)=>{
  res.send('GURIII@3105')
})

app.get('/login',(req,res)=>{
  res.send('<h1>Login Page</h1>')
})

app.listen(process.env.PORT, () => {
  console.log( `Running on: ${port}`);
});
