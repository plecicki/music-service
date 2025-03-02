import {select, templates} from '../settings.js';
import SongsPlayer from '../config/SongsPlayer.js';

class SearchPage {

  addListenerToSearchSongsAndGenHTML(allPagesObject, songAdvice) {
    const thisSearchPage = this;
    allPagesObject.dom.searchButton = allPagesObject.dom.search.querySelector(select.elements.searchButton);
    allPagesObject.dom.searchInput = allPagesObject.dom.search.querySelector(select.elements.searchInput);
    allPagesObject.dom.searchButton.addEventListener('click', function () {
      if (allPagesObject.dom.searchInput.value != null && allPagesObject.dom.searchInput.value !== '') {
        const searchedSongs = songAdvice.searchSongs(allPagesObject.songs, allPagesObject.dom.searchInput.value);
        thisSearchPage.generateAndPutHTML(allPagesObject, searchedSongs);
        SongsPlayer.initSongsPlayerSearch();
      }
    });
  }

  generateAndPutHTML(allPagesObject, searchedSongs) {
    const searchSongsGenHTML = templates.searchSongs(
      {
        songs: searchedSongs,
      }
    );
    allPagesObject.dom.searchSongs.innerHTML = searchSongsGenHTML;
  }
}

export default SearchPage;