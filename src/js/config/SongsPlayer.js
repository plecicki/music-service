class SongsPlayer {
  static initSongsPlayer() {
    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: '.player',
      stopOthersOnPlay: true
    });
  }
}

export default SongsPlayer;