const filterTopTracksToAlbum = (data) => {
  let topTracks = [];
  const counts = {};

  data.body.items.forEach((track) => {
    console.log(track);
    topTracks.push(track.album.name)
  });
  topTracks.forEach(function (album) { counts[album] = (counts[album] || 0) + 1; });
  result = Object.fromEntries(Object.entries(counts).filter(([key, val]) => val === Math.max(...Object.values(counts))));
  return result;
}

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