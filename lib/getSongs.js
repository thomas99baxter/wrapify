// Call a api method to get songs back
// have a look at what we get back
const getTopTracks = async (spotifyApi, timeRange) => {
  try {
    let filteredInformation = []
    let userTopTracks = await spotifyApi.getMyTopTracks({
      time_range: timeRange,
      limit: "5",
    });

    userTopTracks.body.items.map((track) => {
     filteredInformation.push({
       song_name: track.name,
       song_cover: track.album.images[0]
     })
    })
    return filteredInformation;
  } catch (err) {
    Promise.reject(err)
  }
}
// map into a pretty object that can be used on frontend

module.exports = {
  getTopTracks,
}