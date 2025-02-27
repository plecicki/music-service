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

    const urlSongs = settings.db.url + '/' + settings.db.songs;
    const urlAuthors = settings.db.url + '/' + settings.db.authors;

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
            thisSongsList.songs = parsedSongsResponse;
            for (let song of thisSongsList.songs) {
              song.author =
                (parsedAuthorsResponse[song.author - 1].name + ' ' +
                parsedAuthorsResponse[song.author - 1].lastname).toUpperCase();
            }

            console.log('thisSongsList.songs', thisSongsList.songs);
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
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default SongsList;