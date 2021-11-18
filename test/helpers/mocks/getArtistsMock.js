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

module.exports ={
  topArtistsResponse
}