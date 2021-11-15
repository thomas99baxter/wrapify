const express = require("express");
const app = express();

app.listen(8080, ()=>{
  console.log("listening on post 8080")
});

app.get('/', (req, res) => {
  res.send("hi")
});