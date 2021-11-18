const express = require("express");
const SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config()
const app = express();
const { getMostListenedToAlbum } = require('./lib/getAlbums');
const { getTopTracks } = require('./lib/getSongs');

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

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

    res.send('<a href="/">Hello!</a>')
});


app.get('/', async (req, res) => {
    let topTracks = await getTopTracks(spotifyApi)
    let topAlbum = await getMostListenedToAlbum(spotifyApi)

    res.render("index.ejs", {
        //favourite song information
        songName: topTracks.song_name,
        songCover: topTracks.song_cover,

        //favourite album information
        albumName: topAlbum.albumName,
        albumCover: topAlbum.albumCover,
        songsFromAlbum: topAlbum.songsFromAlbum,
        albumArtist: topAlbum.albumArtist,
    })
});