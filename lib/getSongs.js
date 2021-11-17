// Call a api method to get songs back
// have a look at what we get back
const getTopTracks = (spotifyApi) => {
  spotifyApi.getMyTopTracks()
  .then(function(data) {
    let topTracks = data.body.items;
    let filteredTopTracks = topTracks[8]
    console.log(filteredTopTracks);
  }, function(err) {
    console.log('Something went wrong!', err);
  });
}
// map into a pretty object that can be used on frontend

module.exports = {
  getTopTracks,
}