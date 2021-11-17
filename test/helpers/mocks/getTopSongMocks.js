const topSongMockResponse = [
    {
      album: {
        album_type: 'ALBUM',
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: 'https://api.spotify.com/v1/albums/6UYZEYjpN1DYRW0kqFy9ZE',
        id: '6UYZEYjpN1DYRW0kqFy9ZE',
        images: [Array],
        name: 'Championships',
        release_date: '2018-11-30',
        release_date_precision: 'day',
        total_tracks: 19,
        type: 'album',
        uri: 'spotify:album:6UYZEYjpN1DYRW0kqFy9ZE'
      },
      artists: [ [Object], [Object] ],
      available_markets: [
        'AD', 'AE', 'AR', 'AT', 'AU', 'BE', 'BG', 'BH',
        'BO', 'BR', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY',
        'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG',
        'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN',
        'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO',
        'JP', 'KW', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA',
        'MC', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ',
        'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY',
        'QA', 'RO', 'SA', 'SE', 'SG', 'SK', 'SV', 'TH',
        'TN', 'TR', 'TW', 'US', 'UY', 'VN', 'ZA'
      ],
      disc_number: 1,
      duration_ms: 180522,
      explicit: true,
      external_ids: { isrc: 'USAT21812710' },
      external_urls: {
        spotify: 'https://open.spotify.com/track/2IRZnDFmlqMuOrYOLnZZyc'
      },
      href: 'https://api.spotify.com/v1/tracks/2IRZnDFmlqMuOrYOLnZZyc',
      id: '2IRZnDFmlqMuOrYOLnZZyc',
      is_local: false,
      name: 'Going Bad (feat. Drake)',
      popularity: 80,
      preview_url: 'https://p.scdn.co/mp3-preview/29e19c68dd853994221a90103db28427f1185e33?cid=75d4f2be9516435faf695fb7f859b2a3',
      track_number: 9,
      type: 'track',
      uri: 'spotify:track:2IRZnDFmlqMuOrYOLnZZyc'
    }
]

module.exports = { topSongMockResponse }