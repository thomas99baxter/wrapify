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

    const counts = {};
    topTracks.forEach(function (album) { counts[album] = (counts[album] || 0) + 1; });
    // console.log(Object.values(counts))
    console.log(Math.max(...Object.values(counts)))
    function filterObject(obj) {
      return Object.fromEntries(Object.entries(obj).
        filter(([key, val]) => val === Math.max(...Object.values(counts))));
    }
    console.log(filterObject(counts))

  }, function(err) {
    console.log('Something went wrong!', err);
  });
}

module.exports = { getMostListenedToAlbum }