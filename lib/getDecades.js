const filterTopTracksToDecade = (tracks) => {
  let testArray = []
  let counts = {};

  tracks.forEach((track) => {
    console.log(track)
    testArray.push({
      releaseDate: track.album.release_date,
      songName: track.name
    })

  })

  console.log(testArray)

  // {2010: {songname: track.name}
  // 2020:
  // }

  //   console.log(decades);
  //   // albumNames.forEach(function (album) { counts[album] = (counts[album] || 0) + 1; });

  //   let releaseDate = track.album.release_date
  //   decades.push(Math.floor(Number(releaseDate.substring(0,4))/10)*10);

  // decades object { 2010: 2000: 1990:}
  // push into that (full track without the nasty stuff) dependent on release date (switch statement)
  // count number of entries after that

}

const getMostListenedToDecade = async (spotifyApi) => {
  try {
    let userTopTracks = await spotifyApi.getMyTopTracks({
      time_range: "long_term",
      limit: "10",
    });
    return filterTopTracksToDecade(userTopTracks.body.items)
  } catch (err) {
    Promise.reject(err)
  }
}

module.exports = { 
  getMostListenedToDecade
}