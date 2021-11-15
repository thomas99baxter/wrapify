const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.listen(8080, ()=>{
  console.log("listening on post 8080")
});

app.get('/', (req, res) => {
  let artists = [ 
    {name: 'Deadmau5', song: 'Ghosts n stuff'},
     {name: 'Delta sleep', song: 'Camp adventure'}, 
     {name: 'Camelphat' , song:'Breathe'}, 
     {name: 'Disclosure', song: 'white noise'}, 
     {name: 'Bicep', song: 'Glue'}
  ]
  let slogan = 'Spotify wrapped whenever'
  res.render("index.ejs", {artists:artists})
});
