const authorizedUserResponse = [
    {
        country: 'GB',
        display_name: 'wrapifiy_user',
        email: 'foobar@email.com',
        explicit_content: { filter_enabled: false, filter_locked: false },
        external_urls: { spotify: 'https://open.spotify.com/user/username' },
        followers: { href: null, total: 8 },
        href: 'https://api.spotify.com/v1/users/username',
        id: 'user_name',
        images: [
            {
                height: null,
                url: 'url',
                width: null
            }
        ],
        product: 'premium',
        type: 'user',
        uri: 'spotify:user:user_name'
    }
]

module.exports = {
    authorizedUserResponseMock: authorizedUserResponse,
}