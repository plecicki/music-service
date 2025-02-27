import {settings, templates} from '../settings.js';
import SongsPlayer from '../config/SongsPlayer.js';

class SongsList {

  constructor(element) {
    const thisSongsList = this;
    thisSongsList.dom = [];
    thisSongsList.dom.wrapper = element;
    thisSongsList.render();
  }

  render() {
    const thisSongsList = this;

    const url = settings.db.url + '/' + settings.db.songs;

    fetch(url)
      .then(function (rawResponse) {
        if (rawResponse.ok) {
          return rawResponse.json();
        }
        throw new Error('API didnt respond');
      })
      .then(function (parsedResponse) {
        thisSongsList.songs = parsedResponse;
        const songsListGenHTML = templates.songsList(
          {
            songs: thisSongsList.songs,
          }
        );
        thisSongsList.dom.wrapper.innerHTML = songsListGenHTML;
        SongsPlayer.initSongsPlayer();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default SongsList;