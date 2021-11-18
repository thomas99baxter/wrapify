const {expect} = require('chai');
const sinon = require('sinon');
// Mock responses from spotify api
const { topArtistsResponse} = require('./helpers/mocks/getArtistsMock');
const { getTopArtists } = require('../lib/getArtists');
const SpotifyWebApi = require('spotify-web-api-node');

describe('getMostListenedToArtist', () => {
    // Initialise stub variable so it can be accessed in the tests
  let spotifyApiStub;

  // Create a fresh stub for each test
  beforeEach(() => {
    // Mock out the spotify api library
    // In this case we only use getMyTopTracks method
    spotifyApiStub = sinon.createStubInstance(SpotifyWebApi, {
      getMyTopArtists: sinon.stub().withArgs({
        time_range: "long_term",
        limit: "1",
        // API returns a promise so we have to return a promise after out stub
      }).resolves({
        body: {
          // Pass in our mocked response
          items: topArtistsResponse,
        }
      }),
    });  
  });

  afterEach(() => {
    // Refresh all stubs
    sinon.restore();
  });

  it('should call getTopArtists method once', () => {
    getTopArtists(spotifyApiStub);
    // Expect spotifyApiStub to have been called once
    sinon.assert.calledOnce(spotifyApiStub.getMyTopArtists)
  });

  it('should return an object', async () => {
    let result = await getTopArtists(spotifyApiStub);
    expect(result).to.be.an.instanceOf(Object)
  });

  it('should return an object with correct artist value', async () => {
    result = await getTopArtists(spotifyApiStub);
    // Use deep equal here top stop javascript messing up object equality
    expect(result).to.deep.equal(
    {
      "artist_cover": {
        "height": 100,
        "href": "myHref",
        "width": 100,
      },
      "artist_name": "deadmau5"
    })
  });
});