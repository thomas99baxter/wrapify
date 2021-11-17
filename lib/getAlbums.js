const SpotifyWebApi = require('spotify-web-api-node');

let spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: 'http://localhost:8080/test/'
});

const getMostListenedToAlbum = (spotifyApi) => {
  let topTracks = [];
  spotifyApi.getMyTopTracks({
    time_range: "long_term",
    limit: "100",
  })
  .then(function(data) {
    returnedStuff = data.body.items;
    
    returnedStuff.forEach((track) => {
      topTracks.push(track.album.name)
    });

    console.log(topTracks);

  }, function(err) {
    console.log('Something went wrong!', err);
  });
}

module.exports = { getMostListenedToAlbum }