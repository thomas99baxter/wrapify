// Get the authenticated user
const getCurrentUser = async (spotifyApi) => {
    try {
        let currentUser = await spotifyApi.getMe();

        let filteredInformation = {
            display_name: currentUser.body.display_name,
            user_id: currentUser.body.id,
            profile_image: currentUser.body.images[0].url,
        }
        return filteredInformation;
    } catch (err) {
        Promise.reject(err)
    }
}

module.exports = {
    getCurrentUser,
}