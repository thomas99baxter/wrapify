// Call a api method to get songs back
// have a look at what we get back
const getTopTracks = async (spotifyApi) => {
  try {
    let filteredInformation = []
    let userTopTracks = await spotifyApi.getMyTopTracks({
      time_range: "long_term",
      limit: "1",
    });

    userTopTracks.body.items.map((track) => {
     filteredInformation.push({
       song_name: track.name,
       song_cover: track.album.images[0]
     })
    })
    return filteredInformation[0];
  } catch (err) {
    console.log(err)
  }
}
// map into a pretty object that can be used on frontend

module.exports = {
  getTopTracks,
}