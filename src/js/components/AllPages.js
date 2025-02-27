import {settings} from '../settings.js';
import SongsPlayer from '../config/SongsPlayer.js';
import SongAdvice from './SongAdvice.js';
import HomePage from './HomePage.js';

class AllPages {

  constructor(element) {
    const thisAllPages = this;
    thisAllPages.dom = [];
    thisAllPages.dom.wrapper = element;
    thisAllPages.renderPages();
  }

  renderPages() {
    const thisAllPages = this;

    const urlSongs = settings.db.url + '/' + settings.db.songs;
    const urlAuthors = settings.db.url + '/' + settings.db.authors;

    const songAdvice = new SongAdvice();

    const homePage = new HomePage();

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
            thisAllPages.songs = parsedSongsResponse;

            songAdvice.prepareSongTile(parsedSongsResponse, parsedAuthorsResponse);

            homePage.generateAndPutHTML(thisAllPages);
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