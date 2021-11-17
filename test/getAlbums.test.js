const {expect} = require('chai');
const sinon = require('sinon');
const { threeUniqueAlbumsMock, twoUniqueTwoDuplicateAlbumsMock} = require('./helpers/mocks/getAlbumsMocks');
const { getMostListenedToAlbum } = require('../lib/getAlbums');
const SpotifyWebApi = require('spotify-web-api-node');

describe('getMostListenedToAlbum', () => {
  let spotifyApiStub;

  beforeEach(() => {
    spotifyApiStub = sinon.createStubInstance(SpotifyWebApi, {
      getMyTopTracks: sinon.stub().withArgs({
        time_range: "long_term",
        limit: "10",
      }).resolves({
        body: {
          items: twoUniqueTwoDuplicateAlbumsMock,
        }
      }),
    });  
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should call getMyTopTracks method once', () => {
    getMostListenedToAlbum(spotifyApiStub);
    sinon.assert.calledOnce(spotifyApiStub.getMyTopTracks)
  });

  it.only('should return an object', async () => {
    result = await getMostListenedToAlbum(spotifyApiStub);
    console.log(result);
  });
});