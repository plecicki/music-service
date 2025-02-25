import {settings} from '../settings.js';

class APIClient {
  getSongsFromAPI(songsList) {
    const url = settings.db.url + '/' + settings.db.songs;

    fetch(url)
      .then(function (rawResponse) {
        if (rawResponse.ok) {
          return rawResponse.json();
        }
        throw new Error('API didnt respond');
      })
      .then(function (parsedResponse) {
        songsList.songs = parsedResponse;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default APIClient;