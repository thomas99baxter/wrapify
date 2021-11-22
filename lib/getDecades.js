const filterTopTracksToDecade = (tracks) => {
  let decades = []
  let counts = {};

  console.log(tracks);

  // tracks.forEach((track) => {
    
  //   let releaseDate = track.album.release_date
  //   decades.push(Math.floor(Number(releaseDate.substring(0,4))/10)*10);
    
  //   console.log(decades);
  //   // albumNames.forEach(function (album) { counts[album] = (counts[album] || 0) + 1; });

  // })

  // decades object { 2010: 2000: 1990:}
  // push into that (full track without the nasty stuff) dependent on release date (switch statement)
  // count number of entries after that

}

const getMostListenedToDecade = async (spotifyApi) => {
  try {
    let userTopTracks = await spotifyApi.getMyTopTracks({
      time_range: "long_term",
      limit: "50",
    });
    return filterTopTracksToDecade(userTopTracks.body.items)
  } catch (err) {
    Promise.reject(err)
  }
}

module.exports = { 
  getMostListenedToDecade
}