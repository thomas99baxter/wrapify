const express = require("express");
const SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config()
const app = express();
const { getMostListenedToAlbum } = require('./lib/getAlbums');
const { getTopArtists } = require('./lib/getArtists');
const { getTopTracks } = require('./lib/getSongs');
const { getTopGenres } = require('./lib/getGenres');
const { getCurrentUser } = require("./lib/getCurrentUser");

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

let spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: `${process.env.REDIRECT_URI}`
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}

let TIME_RANGE = 'long_term';

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

app.get('/', (req, res) => {

    res.render("welcome.ejs")
});

app.get('/login', (req, res) => {
    var scopes = ['user-read-private', 'user-read-email', 'user-read-playback-position', 'user-read-recently-played', 'user-top-read'];
    var state = 'some-state-of-my-choice';
    var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

    res.redirect(authorizeURL)
})

app.get('/test/', (req, res) => {
    spotifyApi.authorizationCodeGrant(req.query.code).then(
        function (data) {
            console.log('The token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);
            console.log('The refresh token is ' + data.body['refresh_token']);

            // Set the access token on the API object to use it in later calls
            spotifyApi.setAccessToken(data.body['access_token']);
            spotifyApi.setRefreshToken(data.body['refresh_token']);
            res.redirect('/view')
        },
        function (err) {
            console.log('Something went wrong!', err);
        }
    );

});

app.get('/view', async (req, res) => {
    let topAlbum = await getMostListenedToAlbum(spotifyApi, TIME_RANGE);
    let songResult = await getTopTracks(spotifyApi, TIME_RANGE);
    let artistResult = await getTopArtists(spotifyApi, TIME_RANGE);
    let genresResult = await getTopGenres(spotifyApi, TIME_RANGE);
    let currentUser = await getCurrentUser(spotifyApi, TIME_RANGE);

    let timeRangeContent = '';

    if (TIME_RANGE === 'long_term') {
        timeRangeContent = "of all time";
    } else if (TIME_RANGE === 'medium_term'){
        timeRangeContent = "of the last 6 months";
    } else {
        timeRangeContent = "of the last 4 weeks";
    };

    res.render("index.ejs", {
        // favourite song info
        time_range: TIME_RANGE,
        timeRangeContent: timeRangeContent,
        topSongName: songResult[0].song_name,
        topSongCover: songResult[0].song_cover,
        topSongs: songResult,

        // favourite artist info
        topArtistName: artistResult[0].artist_name,
        topArtistCover: artistResult[0].artist_cover,
        topArtists: artistResult,

        //favourite album information
        albumName: topAlbum.albumName,
        albumCover: topAlbum.albumCover,
        songsFromAlbum: topAlbum.songsFromAlbum,
        albumArtist: topAlbum.albumArtist,
        albumID: topAlbum.albumID,

        // favourite genre information
        mostListenedGenre: genresResult[0],
        topTenGenres: genresResult,

        // currentUser name, id and profile image
        display_name: currentUser.display_name,
        user_id: currentUser.user_id,
        profile_image: currentUser.profile_image,

    })
});

app.get('/view/short-term', (req, res) => {
    TIME_RANGE = 'short_term';
    res.redirect('/view')
})

app.get('/view/medium-term', (req, res) => {
    TIME_RANGE = 'medium_term';
    res.redirect('/view')
})

app.get('/view/long-term', (req, res) => {
    TIME_RANGE = 'long_term';
    res.redirect('/view')
})