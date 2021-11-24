// Returns top 10 most listened to genres
// param genre = Array of Object [{albumName: numTimesListened}]
const getGenreCount = (genres) => {

  let counts = {}
  /* 
    Loops through Array of String genre names
    genres = ['rock', 'rock', 'rock', 'house', 'house', 'funk']

    if counts[genrename] does not exist, initialises with value 1
    counts = { 'rock': 1 }

    if counts [genrename] does exist, increments value
    counts = { 'rock': 1 } => counts = { 'rock': 2 } => counts = { 'rock': 3 }

    counts = { 'rock': 3, 'house': 1 } => counts = { 'rock': 3, 'house': 2 }, 
  
    final result with example genres array
    counts = { 'rock': 3, 'house': 2, 'funk': 1 }
  */
  genres.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

  /*
    Transforms counts e.g { 'rock': 3, 'house': 2, 'funk': 1 }
    into key value pair array e.g [['rock', 3], ['house', 2], ['funk', 1]]
    which is then ordered with highest numeric value first
    [['house', 2], ['rock', 3], ['funk', 1]] => [['rock', 3], ['house', 2], ['funk', 1]]
    e.g 
  */ 
    let results = Object.entries(counts).sort(function(a, b) {
      return b[1] - a[1];
    });
  
  // Returns only the top 10 most listened to genres
  return results.slice(0, 10)
}

// param spotifyApi = instance of spotifyApi class
const getTopGenres = async (spotifyApi, timeRange) => {
  try {
      let genres = []
      // get top 50 artists of all time
      let userTopArtists = await spotifyApi.getMyTopArtists({
        time_range: timeRange,
        limit: "50",
      });
      // parse response and return genres
      userTopArtists.body.items.forEach((artist) => {
        genres.push(artist.genres);
      });

      // artist.genres is an array of arrays, 
      // .flat() makes it one dimensional
      return getGenreCount(genres.flat());
  } catch (err) {
      Promise.reject(err)
  }
}
module.exports = {
  getTopGenres,
}