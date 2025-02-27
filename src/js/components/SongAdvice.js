class SongAdvice {

  prepareSongTile(songsResponse, authorsResponse) {
    for (let song of songsResponse) {
      song.author =
        (authorsResponse[song.author - 1].name + ' ' +
          authorsResponse[song.author - 1].lastname).toUpperCase();
    }
  }
}

export default SongAdvice;