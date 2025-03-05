import {templates} from '../settings.js';

class HomePage {

  generateAndPutHTML(allPagesObject) {
    const songsListGenHTML = templates.songsList(
      {
        songs: allPagesObject.songs,
      }
    );
    allPagesObject.dom.songsList.innerHTML = songsListGenHTML;
  }
}

export default HomePage;