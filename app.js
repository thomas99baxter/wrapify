const express = require("express");
require('dotenv').config()
const app = express();
const SpotifyWebApi = require('spotify-web-api-node');

app.set("view engine", "ejs");

let spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: 'http://localhost:8080/test/'
});
console.log(spotifyApi)
var code = process.env.CLIENT_ID;

// Retrieve an access token and a refresh token
spotifyApi.authorizationCodeGrant(code).then(
  function(data) {
    console.log('The token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);
    console.log('The refresh token is ' + data.body['refresh_token']);

    // Set the access token on the API object to use it in later calls
    spotifyApi.setAccessToken(data.body['access_token']);
    spotifyApi.setRefreshToken(data.body['refresh_token']);
  },
  function(err) {
    console.log('Something went wrong!', err);
  }
);

app.listen(8080, ()=>{
  console.log("listening on post 8080")
});
app.get('/test', (req, res) => {
  res.send("hello!")
});

app.get('/login', (req, res) => {

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
