import {settings} from '../settings.js';
import SongsPlayer from '../config/SongsPlayer.js';
import SongAdvice from './SongAdvice.js';
import HomePage from './HomePage.js';
import DiscoverPage from './DiscoverPage.js';

class AllPages {

  constructor(songsListContainer, randomSongContainer) {
    const thisAllPages = this;
    thisAllPages.dom = [];
    thisAllPages.dom.songsList = songsListContainer;
    thisAllPages.dom.randomSong = randomSongContainer;
    thisAllPages.renderPages();
  }

  renderPages() {
    const thisAllPages = this;

    const urlSongs = settings.db.url + '/' + settings.db.songs;
    const urlAuthors = settings.db.url + '/' + settings.db.authors;

    const songAdvice = new SongAdvice();

    const homePage = new HomePage();
    const discoverPage = new DiscoverPage();

    fetch(urlSongs)
      .then(function (rawResponse) {
        if (rawResponse.ok) {
          return rawResponse.json();
        }
        throw new Error('API with songs didnt respond');
      })
      .then(function (parsedSongsResponse) {
        fetch(urlAuthors)
          .then(function (rawResponse) {
            if (rawResponse.ok) {
              return rawResponse.json();
            }
            throw new Error('API with authors didnt respond');
          })
          .then(function (parsedAuthorsResponse) {
            /* HOME PAGE */
            thisAllPages.songs = parsedSongsResponse;
            songAdvice.prepareSongTiles(parsedSongsResponse, parsedAuthorsResponse);
            homePage.generateAndPutHTML(thisAllPages);

            /* DISCOVER PAGE */
            thisAllPages.randomSong = songAdvice.chooseRandomSong(parsedSongsResponse);
            discoverPage.generateAndPutHTML(thisAllPages);
            console.log('thisSongsList.songs', thisAllPages.songs);

            SongsPlayer.initSongsPlayer();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default AllPages;