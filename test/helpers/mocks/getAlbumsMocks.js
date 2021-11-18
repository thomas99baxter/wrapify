const threeUniqueAlbumsMock = [
  {
    album: {
      album_type: 'SINGLE',
      artists: [{name: "Mella Dee"}],
      href: 'https://api.spotify.com/v1/albums/2lp65IrqbdOdbygnaXzMqv',
      id: '2lp65IrqbdOdbygnaXzMqv',
      images: [Array],
      name: 'Techno Disco Tool',
      release_date: '2017-11-29',
      type: 'album',
      uri: 'spotify:album:2lp65IrqbdOdbygnaXzMqv'
    },
    artists: [ [Object] ],
    external_urls: {
      spotify: 'https://open.spotify.com/track/4dGWqeULKD767yx9NIMcEv'
    },
    href: 'https://api.spotify.com/v1/tracks/4dGWqeULKD767yx9NIMcEv',
    id: '4dGWqeULKD767yx9NIMcEv',
    is_local: false,
    name: 'Techno Disco Tool',
    popularity: 43,
    preview_url: 'https://p.scdn.co/mp3-preview/7da26edea6e078e23d638c494b3770cba0e4bcaf?cid=e913603211e2465ebc852a64adaff635',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:4dGWqeULKD767yx9NIMcEv'
  },
  {
    album: {
      album_type: 'SINGLE',
      artists: [{name: "Mella Dee"}],
      href: 'https://api.spotify.com/v1/albums/2lp65IrqbdOdbygnaXzMqv',
      id: '2lp65IrqbdOdbygnaXzMqv',
      images: [Array],
      name: 'Techno Jazz Tool',
      release_date: '2017-11-29',
      type: 'album',
      uri: 'spotify:album:2lp65IrqbdOdbygnaXzMqv'
    },
    artists: [ [Object] ],
    external_urls: {
      spotify: 'https://open.spotify.com/track/4dGWqeULKD767yx9NIMcEv'
    },
    href: 'https://api.spotify.com/v1/tracks/4dGWqeULKD767yx9NIMcEv',
    id: '4dGWqeULKD767yx9NIMcEv',
    is_local: false,
    name: 'Techno Jazz Tool',
    popularity: 43,
    preview_url: 'https://p.scdn.co/mp3-preview/7da26edea6e078e23d638c494b3770cba0e4bcaf?cid=e913603211e2465ebc852a64adaff635',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:4dGWqeULKD767yx9NIMcEv'
  },
  {
    album: {
      album_type: 'SINGLE',
      artists: [{name: "Mella Dee"}],
      href: 'https://api.spotify.com/v1/albums/2lp65IrqbdOdbygnaXzMqv',
      id: '2lp65IrqbdOdbygnaXzMqv',
      images: [Array],
      name: 'Techno Funk Tool',
      release_date: '2017-11-29',
      type: 'album',
      uri: 'spotify:album:2lp65IrqbdOdbygnaXzMqv'
    },
    artists: [ [Object] ],
    external_urls: {
      spotify: 'https://open.spotify.com/track/4dGWqeULKD767yx9NIMcEv'
    },
    href: 'https://api.spotify.com/v1/tracks/4dGWqeULKD767yx9NIMcEv',
    id: '4dGWqeULKD767yx9NIMcEv',
    is_local: false,
    name: 'Techno Funk Tool',
    popularity: 43,
    preview_url: 'https://p.scdn.co/mp3-preview/7da26edea6e078e23d638c494b3770cba0e4bcaf?cid=e913603211e2465ebc852a64adaff635',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:4dGWqeULKD767yx9NIMcEv'
  },
  {
    album: {
      album_type: 'SINGLE',
      artists: [{name: "Mella Dee"}],
      href: 'https://api.spotify.com/v1/albums/2lp65IrqbdOdbygnaXzMqv',
      id: '2lp65IrqbdOdbygnaXzMqv',
      images: [Array],
      name: 'Techno Soul Tool',
      release_date: '2017-11-29',
      type: 'album',
      uri: 'spotify:album:2lp65IrqbdOdbygnaXzMqv'
    },
    artists: [ [Object] ],
    external_urls: {
      spotify: 'https://open.spotify.com/track/4dGWqeULKD767yx9NIMcEv'
    },
    href: 'https://api.spotify.com/v1/tracks/4dGWqeULKD767yx9NIMcEv',
    id: '4dGWqeULKD767yx9NIMcEv',
    is_local: false,
    name: 'Techno Soul Tool',
    popularity: 43,
    preview_url: 'https://p.scdn.co/mp3-preview/7da26edea6e078e23d638c494b3770cba0e4bcaf?cid=e913603211e2465ebc852a64adaff635',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:4dGWqeULKD767yx9NIMcEv'
  },
]

const twoUniqueTwoDuplicateAlbumsMock = [
  {
    album: {
      album_type: 'SINGLE',
      artists: [{name: "Mella Dee"}],
      href: 'https://api.spotify.com/v1/albums/2lp65IrqbdOdbygnaXzMqv',
      id: '2lp65IrqbdOdbygnaXzMqv',
      images: [{
        width: 100,
        height: 100,
        href: "www.foobar.com"
      }],
      name: 'Techno Disco Tool',
      release_date: '2017-11-29',
      type: 'album',
      uri: 'spotify:album:2lp65IrqbdOdbygnaXzMqv'
    },
    artists: [ [Object] ],
    external_urls: {
      spotify: 'https://open.spotify.com/track/4dGWqeULKD767yx9NIMcEv'
    },
    href: 'https://api.spotify.com/v1/tracks/4dGWqeULKD767yx9NIMcEv',
    id: '4dGWqeULKD767yx9NIMcEv',
    is_local: false,
    name: 'Techno Disco Tool',
    popularity: 43,
    preview_url: 'https://p.scdn.co/mp3-preview/7da26edea6e078e23d638c494b3770cba0e4bcaf?cid=e913603211e2465ebc852a64adaff635',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:4dGWqeULKD767yx9NIMcEv'
  },
  {
    album: {
      album_type: 'SINGLE',
      artists: [{name: "Mella Dee"}],
      href: 'https://api.spotify.com/v1/albums/2lp65IrqbdOdbygnaXzMqv',
      id: '2lp65IrqbdOdbygnaXzMqv',
      images: [{
        width: 100,
        height: 100,
        href: "www.foobar.com"
      }],
      name: 'Techno Disco Tool',
      release_date: '2017-11-29',
      type: 'album',
      uri: 'spotify:album:2lp65IrqbdOdbygnaXzMqv'
    },
    artists: [ [Object] ],
    external_urls: {
      spotify: 'https://open.spotify.com/track/4dGWqeULKD767yx9NIMcEv'
    },
    href: 'https://api.spotify.com/v1/tracks/4dGWqeULKD767yx9NIMcEv',
    id: '4dGWqeULKD767yx9NIMcEv',
    is_local: false,
    name: 'Techno Disco Tool',
    popularity: 43,
    preview_url: 'https://p.scdn.co/mp3-preview/7da26edea6e078e23d638c494b3770cba0e4bcaf?cid=e913603211e2465ebc852a64adaff635',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:4dGWqeULKD767yx9NIMcEv'
  },
  {
    album: {
      album_type: 'SINGLE',
      artists: [{name: "Mella Dee"}],
      href: 'https://api.spotify.com/v1/albums/2lp65IrqbdOdbygnaXzMqv',
      id: '2lp65IrqbdOdbygnaXzMqv',
      images: [{
        width: 100,
        height: 100,
        href: "www.foobar.com"
      }],
      name: 'Techno Funk Tool',
      release_date: '2017-11-29',
      type: 'album',
      uri: 'spotify:album:2lp65IrqbdOdbygnaXzMqv'
    },
    artists: [ [Object] ],
    external_urls: {
      spotify: 'https://open.spotify.com/track/4dGWqeULKD767yx9NIMcEv'
    },
    href: 'https://api.spotify.com/v1/tracks/4dGWqeULKD767yx9NIMcEv',
    id: '4dGWqeULKD767yx9NIMcEv',
    is_local: false,
    name: 'Techno Funk Tool',
    popularity: 43,
    preview_url: 'https://p.scdn.co/mp3-preview/7da26edea6e078e23d638c494b3770cba0e4bcaf?cid=e913603211e2465ebc852a64adaff635',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:4dGWqeULKD767yx9NIMcEv'
  },
  {
    album: {
      album_type: 'SINGLE',
      artists: [{name: "Mella Dee"}],
      href: 'https://api.spotify.com/v1/albums/2lp65IrqbdOdbygnaXzMqv',
      id: '2lp65IrqbdOdbygnaXzMqv',
      images: [{
        width: 100,
        height: 100,
        href: "www.foobar.com"
      }],
      name: 'Techno Soul Tool',
      release_date: '2017-11-29',
      type: 'album',
      uri: 'spotify:album:2lp65IrqbdOdbygnaXzMqv'
    },
    artists: [ [Object] ],
    external_urls: {
      spotify: 'https://open.spotify.com/track/4dGWqeULKD767yx9NIMcEv'
    },
    href: 'https://api.spotify.com/v1/tracks/4dGWqeULKD767yx9NIMcEv',
    id: '4dGWqeULKD767yx9NIMcEv',
    is_local: false,
    name: 'Techno Soul Tool',
    popularity: 43,
    preview_url: 'https://p.scdn.co/mp3-preview/7da26edea6e078e23d638c494b3770cba0e4bcaf?cid=e913603211e2465ebc852a64adaff635',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:4dGWqeULKD767yx9NIMcEv'
  },
]

module.exports = { threeUniqueAlbumsMock, twoUniqueTwoDuplicateAlbumsMock }