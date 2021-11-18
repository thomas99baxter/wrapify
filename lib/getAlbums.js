const filterTopTracksToAlbum = (data) => {
  let albumNames = [];
  const counts = {};

  // console.log(data.body.items[0].album.artists[0].name)

  data.body.items.forEach((track) => {
    albumNames.push(track.album.name)
  });
  // This counts the duplicates in the album array
  // If the album already exists in the counts array
  // It increments the value otherwise it creates an object key
  // with count 1
  albumNames.forEach(function (album) { counts[album] = (counts[album] || 0) + 1; });
  
  // Returns the album with the highest listen count
  // It converts the object i.e {life of pablo: 3}
  // into an array i.e ["life of pablo", 3]
  // It then finds the highst value and returns this as an object
  // i.e {life of pablo: 3}
  result = Object.fromEntries(Object.entries(counts).filter(([key, val]) => val === Math.max(...Object.values(counts))));
  
  let mostListenedToTrack = data.body.items.find((song) => song.album.name === Object.keys(result)[0])

  let filteredResult = {
    albumName: mostListenedToTrack.album.name,
    albumCover: mostListenedToTrack.album.images[0],
    songsFromAlbum: Object.values(result)[0],
    albumArtist: mostListenedToTrack.album.artists[0].name,
  }
  return filteredResult
}

// Brings back an array of 50 tracks from the spotify api
// Top 50 tracks of all time
const getMostListenedToAlbum = async (spotifyApi) => {
  try {
    let userTopTracks = await spotifyApi.getMyTopTracks({
      time_range: "long_term",
      limit: "50",
    });
    return filterTopTracksToAlbum(userTopTracks)
  } catch (err) {
    Promise.reject(err)
  }
}

module.exports = { getMostListenedToAlbum }