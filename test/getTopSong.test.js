const {expect} = require('chai');
const sinon = require('sinon');
// Mock responses from spotify api
const {topSongMockResponse } = require('./helpers/mocks/getTopSongMocks');
const { getTopTracks } = require('../lib/getSongs');
const SpotifyWebApi = require('spotify-web-api-node');

describe('GetTopSong', () => {
     // Initialise stub variable so it can be accessed in the tests
  let spotifyApiStub;

  // Create a fresh stub for each test
    beforeEach(() => {
        // Mock out the spotify api library
        // In this case we only use getMyTopTracks method
        spotifyApiStub = sinon.createStubInstance(SpotifyWebApi, {
        getMyTopTracks: sinon.stub().withArgs({
            time_range: "long_term",
            limit: "1",
            // API returns a promise so we have to return a promise after out stub
        }).resolves({
            body: {
            // Pass in our mocked response
            items: topSongMockResponse,
            }
        }),
        });  
    });

    afterEach(() => {
        // Refresh all stubs
        sinon.restore();
    });

    it('Should call topSong method once', () => {
        getTopTracks(spotifyApiStub);
        // Expect spotifyApiStub to have been called once
        sinon.assert.calledOnce(spotifyApiStub.getMyTopTracks)
    });
    it('should return an object', async () => {
        let result = await getTopTracks(spotifyApiStub);
        expect(result).to.be.an.instanceOf(Object)
    });
    it('should return an object with correct album value', async () => {
        result = await getTopTracks(spotifyApiStub);
        // Use deep equal here top stop javascript messing up object equality
        expect(result).to.deep.equal(topSongMockResponse)
    });
});