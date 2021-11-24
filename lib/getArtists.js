
const getTopArtists = async (spotifyApi, timeRange) => {
    try {
        let filteredInformation = []
        let userTopArtists = await spotifyApi.getMyTopArtists({
          time_range: timeRange,
          limit: "5",
        });
        userTopArtists.body.items.map((artist) => {
         filteredInformation.push({
           artist_name: artist.name,
           artist_cover: artist.images[0]
         })
        })
        return filteredInformation;
        
    } catch (err) {
        Promise.reject(err)
    }
}
module.exports = {
    getTopArtists,
  }