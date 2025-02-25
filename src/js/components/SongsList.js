class SongsList {
  constructor(apiClient) {
    const thisSongsList = this;
    apiClient.getSongsFromAPI(thisSongsList);
    console.log('thisSongsList.songs', thisSongsList.songs);
  }
}

export default SongsList;