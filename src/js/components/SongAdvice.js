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
}

export default SongAdvice;