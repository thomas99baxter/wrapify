const getDecadeFromDate = (date) => {
    return (Math.floor(Number(date.substring(0,4))/10)*10).toString();
}

const groupTracksByDecade = (tracks) => {
  const groupedByDecade = {};

  tracks.forEach((track) => { 
    if (groupedByDecade[track.releaseDecade]) {
      groupedByDecade[track.releaseDecade].push(track)
    } else {
      groupedByDecade[track.releaseDecade] = [track]
    }
  });
  return groupedByDecade;
}
const filterTopTracksToDecade = (tracks) => {
  let filteredTracks = []

  tracks.forEach((track) => {
    let releaseDate = track.album.release_date;

    filteredTracks.push({
      releaseDate: releaseDate,
      releaseDecade: getDecadeFromDate(releaseDate),
      songName: track.name,
      image: track.album.images[0],
      link: track.external_urls.spotify,
      artist: track.album.artists[0].name,
    });
  });

  console.log(filteredTracks)
  return groupTracksByDecade(filteredTracks);
}

const getMostListenedToDecade = async (spotifyApi, timeRange) => {
  try {
    let userTopTracks = await spotifyApi.getMyTopTracks({
      time_range: timeRange,
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