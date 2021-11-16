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

app.get('/login', (req, res) => {
    var scopes = ['user-read-private', 'user-read-email', 'user-read-playback-position', 'user-read-recently-played', 'user-top-read'];
    var state = 'some-state-of-my-choice';
    var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

    res.redirect(authorizeURL)
});

app.listen(8080, () => {
    console.log("listening on post 8080")
});

app.get('/test', (req, res) => {

    spotifyApi.authorizationCodeGrant(req.query.code).then(
        function (data) {
            console.log('The token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);
            console.log('The refresh token is ' + data.body['refresh_token']);

            // Set the access token on the API object to use it in later calls
            spotifyApi.setAccessToken(data.body['access_token']);
            spotifyApi.setRefreshToken(data.body['refresh_token']);
        },
        function (err) {
            console.log('Something went wrong!', err);
        }
    );

    res.send("hello!")
});


app.get('/', (req, res) => {
    let artists = [
        {name: 'Deadmau5', song: 'Ghosts n stuff'},
        {name: 'Delta sleep', song: 'Camp adventure'},
        {name: 'Camelphat', song: 'Breathe'},
        {name: 'Disclosure', song: 'white noise'},
        {name: 'Bicep', song: 'Glue'}
    ]
    let slogan = 'Spotify wrapped whenever'
    res.render("index.ejs", {artists: artists})
});

app.get('/albums', (req, res) => {
  spotifyApi.getAlbum('5U4W9E5WsYb2jUQWePT8Xm')
  .then(function(data) {
    console.log('Album information', data.body);
  }, function(err) {
    console.error(err);
  });
})

app.get('/top-tracks', async (req, res) => {

  spotifyApi.getMyRecentlyPlayedTracks({
    limit : 1
  }).then(function(data) {
      // Output items
      console.log("Your 20 most recently played tracks are:");
      data.body.items.forEach(item => console.log(item.track));
    }, function(err) {
      console.log('Something went wrong!', err);
    });  

});
