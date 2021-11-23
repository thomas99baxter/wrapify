const {expect} = require('chai');
const sinon = require('sinon');
// Mock responses from spotify api
const SpotifyWebApi = require('spotify-web-api-node');
const { getMostListenedToDecade } = require('../lib/getDecades');
const { topDecadeMockResponse } = require('./helpers/mocks/getDecadesMock');

describe('getDecade', () => {
    // Initialise stub variable so it can be accessed in the tests
    let spotifyApiStub;

    // Create a fresh stub for each test
    beforeEach(() => {
        // Mock out the spotify api library
        // In this case we only use getMyTopTracks method
        spotifyApiStub = sinon.createStubInstance(SpotifyWebApi, {
            getMyTopTracks: sinon.stub().withArgs({
                time_range: "long_term",
                limit: "10",
                // API returns a promise so we have to return a promise after out stub
            }).resolves({
                body: {
                    // Pass in our mocked response
                    items: topDecadeMockResponse,
                }
            }),
        });
    });

    afterEach(() => {
        // Refresh all stubs
        sinon.restore();
    });

    it('Should call topSong method once', () => {
        getMostListenedToDecade(spotifyApiStub);
        // Expect spotifyApiStub to have been called once
        sinon.assert.calledOnce(spotifyApiStub.getMyTopTracks)
    });

    it('should return an object', async () => {
        let result = await getMostListenedToDecade(spotifyApiStub);
        expect(result).to.be.an.instanceOf(Object)
    });

    it('should return a pretty object', async () => {
      let result = await getMostListenedToDecade(spotifyApiStub);
      expect(result).to.be.an.instanceOf(Object)
    });


    it('should fail', async () => {
        spotifyApiStub = sinon.createStubInstance(SpotifyWebApi, {
            getMyTopTracks: sinon.stub().withArgs({
                time_range: "long_term",
                limit: "10",
                // API returns a promise so we have to return a promise after out stub
            }).rejects(),
        });

        expect(getMostListenedToDecade(spotifyApiStub)).to.be.rejectedWith(Error)
    });
});