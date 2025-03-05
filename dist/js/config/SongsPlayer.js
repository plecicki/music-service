class SongsPlayer {
  static initSongsPlayer() {
    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: '.player',
      stopOthersOnPlay: true
    });
  }

  static initSongsPlayerSearch() {
    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: '.search-player',
      stopOthersOnPlay: true
    });
  }
}

export default SongsPlayer;