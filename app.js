const express = require("express");
const app = express();
const SpotifyWebApi = require('spotify-web-api-node');

app.set("view engine", "ejs");

let spotifyApi = new SpotifyWebApi({
  clientId: '55fcc051d87741109912921021e65440',
  clientSecret: '1da6e67941dc4cd8b5a7aabfe72404a2',
  redirectUri: 'http://www.example.com/callback'
});

spotifyApi.setAccessToken('<your_access_token>');

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