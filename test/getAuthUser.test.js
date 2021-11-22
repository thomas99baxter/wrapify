const { expect } = require('chai');
const sinon = require('sinon');
// Mock responses from spotify api
const {authorizedUserResponseMock} = require('./helpers/mocks/getAuthUserMocks');
const { getCurrentUser } = require('../lib/getAuthorisedUser');
const SpotifyWebApi = require('spotify-web-api-node');

describe('GetAuthorizedUser', () => {
    // Initialise stub variable so it can be accessed in the tests
    let spotifyApiStub;

    // Create a fresh stub for each test
    beforeEach(() => {
        // Mock out the spotify api library
        // In this case we only use getMe method
        spotifyApiStub = sinon.createStubInstance(SpotifyWebApi, {
            getMe: sinon.stub().withArgs({
                time_range: "long_term",
                limit: "1",
                // API returns a promise so we have to return a promise after out stub
            }).resolves({
                body: {
                    // Pass in our mocked response
                    items: authorizedUserResponseMock,
                }
            }),
        });
    });

    afterEach(() => {
        // Refresh all stubs
        sinon.restore();
    });

    it('Should call topSong method once', () => {
        getCurrentUser(spotifyApiStub);
        // Expect spotifyApiStub to have been called once
        sinon.assert.calledOnce(spotifyApiStub.getMe)
    });

    // it('should return an object', async () => {
    //     let result = await getCurrentUser(spotifyApiStub);
    //     expect(result).to.be.an.instanceOf(Object)
    // });
//
//     it('should return an object with correct username', async () => {
//         result = await getCurrentUser(spotifyApiStub);
//         // Use deep equal here top stop javascript messing up object equality
//         expect(result).to.deep.equal(
//             {
//                 "display_name": "wrapify_user",
//             })
//     });
//
//     it('should fail', async () => {
//         spotifyApiStub = sinon.createStubInstance(SpotifyWebApi, {
//             getMyTopTracks: sinon.stub().withArgs({
//                 time_range: "long_term",
//                 limit: "10",
//                 // API returns a promise so we have to return a promise after out stub
//             }).rejects(),
//         });
//
//         expect(getTopTracks(spotifyApiStub)).to.be.rejectedWith(Error)
//     });

});