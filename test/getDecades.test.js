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
      expect(result).to.deep.equal({
        '1980': [
          {
            releaseDate: '1984-11-29',
            releaseDecade: '1980',
            songName: 'Techno Funk Tool',
            image: {
              height: 640,
              url: 'https://i.scdn.co/image/ab6761610000e5ebef86feb3e2b9c57897ddc453',
              width: 640
            },
            link: 'spotify:track:4dGWqeULKD767yx9NIMcEv'
          }
        ],
        '1990': [
          {
            releaseDate: '1993-11-29',
            releaseDecade: '1990',
            songName: 'Techno Soul Tool',
            image: {
              height: 640,
              url: 'https://i.scdn.co/image/ab6761610000e5ebef86feb3e2b9c57897ddc453',
              width: 640
            },
            link: 'spotify:track:4dGWqeULKD767yx9NIMcEv'
          }
        ],
        '2010': [
          {
            releaseDate: '2017-11-29',
            releaseDecade: '2010',
            songName: 'Techno Disco Tool',
            image: {
              height: 640,
              url: 'https://i.scdn.co/image/ab6761610000e5ebef86feb3e2b9c57897ddc453',
              width: 640
            },
            link: 'spotify:track:4dGWqeULKD767yx9NIMcEv'
          }
        ],
        '2020': [
          {
            releaseDate: '2020-11-29',
            releaseDecade: '2020',
            songName: 'Techno Jazz Tool',
            image: {
              height: 640,
              url: 'https://i.scdn.co/image/ab6761610000e5ebef86feb3e2b9c57897ddc453',
              width: 640
            },
            link: 'spotify:track:4dGWqeULKD767yx9NIMcEv'
          }
        ]}
      )
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