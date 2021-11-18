
const getTopArtists = async (spotifyApi) => {
    try {
        let filteredInformation = []
        let userTopArtists = await spotifyApi.getMyTopArtists({
          time_range: "long_term",
          limit: "1",
        });
    
        userTopArtists.body.items.map((artist) => {
         filteredInformation.push({
           artist_name: artist.name,
           artist_cover: artist.images[0]
         })
        })
        return filteredInformation[0];
        
    } catch (err) {
        console.log(err)
    }
}
module.exports = {
    getTopArtists,
  }