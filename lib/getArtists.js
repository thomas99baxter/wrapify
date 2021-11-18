
const getTopArtists = async (spotifyApi) => {
    try {
        let filteredInformation = []
        let userTopArtists = await spotifyApi.getMyTopArtists({
          time_range: "long_term",
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