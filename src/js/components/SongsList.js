import APIClient from './APIClient.js';

class SongsList {
  constructor(APIClient) {
    const thisSongsList = this;
    APIClient.getSongsFromAPI(thisSongsList);
    console.log('thisSongsList.songs', thisSongsList.songs);
  }
}

export default SongsList;