const filterTopTracksToAlbum = (data) => {
  let albumNames = [];
  const counts = {};

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
  return result;
}

// Brings back an array of 50 tracks from the spotify api
const getMostListenedToAlbum = async (spotifyApi) => {
  try {
    let userTopTracks = await spotifyApi.getMyTopTracks({
      time_range: "long_term",
      limit: "50",
    });

    return filterTopTracksToAlbum(userTopTracks)
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getMostListenedToAlbum }