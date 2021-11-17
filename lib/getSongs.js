// Call a api method to get songs back
// have a look at what we get back
const getTopTracks = async (spotifyApi) => {
  try {
    let userTopTracks = await spotifyApi.getMyTopTracks({
      time_range: "long_term",
      limit: "1",
    });
    console.log(userTopTracks.body.items)
  } catch (err) {
    console.log(err)
  }
}
// map into a pretty object that can be used on frontend

module.exports = {
  getTopTracks,
}