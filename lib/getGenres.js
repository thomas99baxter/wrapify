const getGenreCount = (genres) => {
  let counts = {}
  genres.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

    let results = Object.entries(counts).sort(function(a, b) {
      return b[1] - a[1];
    });
    
  return results.slice(0, 10)
}

const getTopGenres = async (spotifyApi) => {
  try {
      let filteredInformation = []
      let userTopArtists = await spotifyApi.getMyTopArtists({
        time_range: "long_term",
        limit: "50",
      });
      userTopArtists.body.items.forEach((artist) => {
        filteredInformation.push(artist.genres);
      });

      return getGenreCount(filteredInformation.flat());
  } catch (err) {
      Promise.reject(err)
  }
}
module.exports = {
  getTopGenres,
}