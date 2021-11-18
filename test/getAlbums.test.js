const chai = require('chai');
const {expect} = require('chai');
chai.use(require('chai-as-promised'))
const sinon = require('sinon');
// Mock responses from spotify api
const { threeUniqueAlbumsMock, twoUniqueTwoDuplicateAlbumsMock} = require('./helpers/mocks/getAlbumsMocks');
const { getMostListenedToAlbum } = require('../lib/getAlbums');
const SpotifyWebApi = require('spotify-web-api-node');

describe('getMostListenedToAlbum', () => {
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
          items: twoUniqueTwoDuplicateAlbumsMock,
        }
      }),
    });  
  });

  afterEach(() => {
    // Refresh all stubs
    sinon.restore();
  });

  it('should call getMyTopTracks method once', () => {
    getMostListenedToAlbum(spotifyApiStub);
    // Expect spotifyApiStub to have been called once
    sinon.assert.calledOnce(spotifyApiStub.getMyTopTracks)
  });

  it('should return an object', async () => {
    result = await getMostListenedToAlbum(spotifyApiStub);
    expect(result).to.be.an.instanceOf(Object)
  });

  it('should return an object with correct album value', async () => {
    result = await getMostListenedToAlbum(spotifyApiStub);
    // Use deep equal here top stop javascript messing up object equality
    expect(result).to.deep.equal({
      albumName: "Techno Disco Tool",
      albumArtist: "Mella Dee",
      albumCover: {
        width: 100,
        height: 100,
        href: "www.foobar.com"
      },
      songsFromAlbum: 2,
    })
  });
  
  it('should fail', async() => {
    spotifyApiStub = sinon.createStubInstance(SpotifyWebApi, {
      getMyTopTracks: sinon.stub().withArgs({
        time_range: "long_term",
        limit: "10",
        // API returns a promise so we have to return a promise after out stub
      }).rejects(),
    });  

    expect(getMostListenedToAlbum(spotifyApiStub)).to.be.rejectedWith(Error)
    
  });
});