class SongAdvice {

  prepareSongTiles(songsResponse, authorsResponse) {
    for (let song of songsResponse) {
      song.author =
        (authorsResponse[song.author - 1].name + ' ' +
          authorsResponse[song.author - 1].lastname).toUpperCase();
    }
  }

  chooseRandomSong(songsResponse) {
    const randomIndex = Math.floor(Math.random() * songsResponse.length);
    return songsResponse[randomIndex];
  }

  searchSongs(songs, searchValue) {
    const thisSongAdvice = this;

    const convertedSongsData = thisSongAdvice.connectAuthorsAndTitles(songs);
    const searchedSongs = [];
    for (let songData of convertedSongsData) {
      if (songData.preparedSong.includes(searchValue.toUpperCase())) {
        searchedSongs.push(songs[songData.id - 1]);
      }
    }
    return searchedSongs;
  }

  connectAuthorsAndTitles(songs) {
    const convertedSongsData = [];
    for (let song of songs) {
      const preparedSong = song.author + ' ' + song.title;
      const preparedSongObject = {
        id: song.id,
        preparedSong: preparedSong.toUpperCase(),
      };
      convertedSongsData.push(preparedSongObject);
    }
    return convertedSongsData;
  }
}

export default SongAdvice;