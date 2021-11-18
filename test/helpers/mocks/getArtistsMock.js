const topArtistsResponse = [
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/2CIMQHirSU0MQqyYHq0eOx'
    },
    followers: { href: null, total: 2659787 },
    genres: [
      'canadian electronic',
      'edm',
      'electro house',
      'pop dance',
      'progressive house'
    ],
    href: 'https://api.spotify.com/v1/artists/2CIMQHirSU0MQqyYHq0eOx',
    id: '2CIMQHirSU0MQqyYHq0eOx',
    images: [{width: 100, height: 100, href: "myHref"}],
    name: 'deadmau5',
    popularity: 70,
    type: 'artist',
    uri: 'spotify:artist:2CIMQHirSU0MQqyYHq0eOx'
  }
]

const topFiveArtistsResponse = [
  {
    artist_name: 'deadmau5',
    artist_cover: {
      height: 640,
      url: 'https://i.scdn.co/image/ab6761610000e5ebc5ceb05f152103b2b70d3b07',
      width: 640
    }
  },
  {
    artist_name: 'Delta Sleep',
    artist_cover: {
      height: 640,
      url: 'https://i.scdn.co/image/ab6761610000e5ebef86feb3e2b9c57897ddc453',
      width: 640
    }
  },
  {
    artist_name: 'Above & Beyond',
    artist_cover: {
      height: 640,
      url: 'https://i.scdn.co/image/ab6761610000e5eb2a538d1a36a271885510d98a',
      width: 640
    }
  },
  {
    artist_name: 'Disclosure',
    artist_cover: {
      height: 640,
      url: 'https://i.scdn.co/image/ab6761610000e5eb784a17787904570df53ae9a2',
      width: 640
    }
  },
  {
    artist_name: 'The Wombats',
    artist_cover: {
      height: 640,
      url: 'https://i.scdn.co/image/ab6761610000e5ebf4b91dc8e4dda18b5adca9f9',
      width: 640
    }
  }
]

module.exports = {
  topArtistsResponse,
  topFiveArtistsResponse
}