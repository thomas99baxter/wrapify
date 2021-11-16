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


let code = 'AQBp4aKQqa91z3Ws7zSQQGDOEHnCbVXI_lLrYmzrVtTomgJANczUxpW2NbCGbpXC-JDLZm0xSjaNVBAoch7Ej1VGnoqi4SOJIxxTHh0bEI4neQIVilhIulR44smA24-AgPAkNhhOaJIGVOkDrmjd-ij-3-i7ikSZNqm5RYbcH5YPTZyYupgXcHx4uOeVkp4ZSy4-O3fgXzjOESEwNN5U2ykNnA'


app.get('/login', (req, res) => {
  var scopes = ['user-read-private', 'user-read-email'];
  var state = 'some-state-of-my-choice';
  var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

  res.redirect(authorizeURL)
});

app.listen(8080, ()=>{
  console.log("listening on post 8080")
});

app.get('/test', (req, res) => {

  spotifyApi.authorizationCodeGrant(req.query.code).then(
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
  res.send("hello!")
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
