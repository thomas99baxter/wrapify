const {expect} = require('chai');
const sinon = require('sinon');
// Mock responses from spotify api
const { topGenresResponse} = require('./helpers/mocks/getGenresMock');
const { getTopGenres } = require('../lib/getGenres');
const SpotifyWebApi = require('spotify-web-api-node');

describe('getMostListenedToGenres', () => {

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
          items: topGenresResponse,
        }
      }),
    });  
  });

  afterEach(() => {
    // Refresh all stubs
    sinon.restore();
  });

  it('should call getMyTopArtists once', () => {
    getTopGenres(spotifyApiStub);
    // Expect spotifyApiStub to have been called once
    sinon.assert.calledOnce(spotifyApiStub.getMyTopArtists)
  });

  it('should return an array', async () => {
    let result = await getTopGenres(spotifyApiStub);
    expect(result).to.be.an.instanceOf(Array)
  });

  it('should return an array with correct object value', async () => {
    result = await getTopGenres(spotifyApiStub);
    // Use deep equal here top stop javascript messing up object equality
    expect(result).to.deep.equal([
        [ 'rap', 5 ],
        [ 'hip hop', 3 ],
        [ 'uk hip hop', 3 ],
        [ 'canadian pop', 2 ],
        [ 'canadian hip hop', 1 ],
        [ 'toronto rap', 1 ],
        [ 'chicago rap', 1 ],
        [ 'canadian contemporary r&b', 1 ],
        [ 'pop', 1 ],
        [ 'slap house', 1 ]
    ])
  });

  it('should fail', async() => {
    spotifyApiStub = sinon.createStubInstance(SpotifyWebApi, {
      getMyTopArtists: sinon.stub().withArgs({
        time_range: "long_term",
        limit: "10",
        // API returns a promise so we have to return a promise after out stub
      }).rejects(),
    });  

    expect(getTopGenres(spotifyApiStub)).to.be.rejectedWith(Error)
  });
    
});