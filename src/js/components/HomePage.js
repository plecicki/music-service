import {templates} from "../settings.js";

class HomePage {

  generateAndPutHTML(allPagesObject) {
    const songsListGenHTML = templates.songsList(
      {
        songs: allPagesObject.songs,
      }
    );
    allPagesObject.dom.wrapper.innerHTML = songsListGenHTML;
  }
}

export default HomePage;