import {templates} from '../settings.js';

class DiscoverPage {
  generateAndPutHTML(allPagesObject) {
    const songGenHTML = templates.song(
      allPagesObject.randomSong
    );
    allPagesObject.dom.randomSong.innerHTML = songGenHTML;
  }
}

export default DiscoverPage;