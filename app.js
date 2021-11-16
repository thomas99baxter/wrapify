const express = require("express");
require('dotenv').config()
const querystring = require("querystring")
const app = express();
const SpotifyWebApi = require('spotify-web-api-node');

app.set("view engine", "ejs");

let spotifyApi = new SpotifyWebApi({
  clientId: '55fcc051d87741109912921021e65440',
  clientSecret: '1da6e67941dc4cd8b5a7aabfe72404a2',
  redirectUri: 'http://www.example.com/callback'
});

function generateRandomString(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

spotifyApi.setAccessToken('<your_access_token>');

app.listen(8080, ()=>{
  console.log("listening on post 8080")
});
app.get('/test', (req, res) => {
  res.send("hello!")
});

var client_id = process.env.CLIENT_ID;
var redirect_uri = 'http://localhost:8080/test/';

app.get('/login', (req, res) => {

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
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
