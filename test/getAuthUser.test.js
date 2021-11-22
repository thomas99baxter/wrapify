const {expect} = require('chai');
const sinon = require('sinon');
// Mock responses from spotify api
const {currentUserResponseMock} = require('./helpers/mocks/getAuthUserMocks');
const {getCurrentUser} = require('../lib/getCurrentUser');
const SpotifyWebApi = require('spotify-web-api-node');

describe('GetAuthorizedUser', () => {
    // Initialise stub variable so it can be accessed in the tests
    let spotifyApiStub;

    // Create a fresh stub for each test
    beforeEach(() => {
        // Mock out the spotify api library
        // In this case we only use getMe method
        spotifyApiStub = sinon.createStubInstance(SpotifyWebApi, {
            getMe: sinon.stub().resolves({
                body: currentUserResponseMock,
            }),
        });
    });

    afterEach(() => {
        // Refresh all stubs
        sinon.restore();
    });

    it('Should call getCurrentUser method once', () => {
        getCurrentUser(spotifyApiStub);
        // Expect spotifyApiStub to have been called once
        sinon.assert.calledOnce(spotifyApiStub.getMe)
    });

    it('should return an object', async () => {
        let result = await getCurrentUser(spotifyApiStub);
        expect(result).to.be.an.instanceOf(Object)
    });

    it('should return an object with correct username', async () => {
        result = await getCurrentUser(spotifyApiStub);
        // Use deep equal here top stop javascript messing up object equality
        expect(result).to.deep.equal(
            {
                "display_name": "wrapify_user",
                "profile_image": "user_url",
                "user_id": "user_name"
            }
        )
    });

    it('should fail', async () => {
        spotifyApiStub = sinon.createStubInstance(SpotifyWebApi, {
            getMyTopTracks: sinon.stub().withArgs().rejects(),
        });

        expect(getCurrentUser(spotifyApiStub)).to.be.rejectedWith(Error)
    });
});