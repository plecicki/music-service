import { select, classNames } from './settings.js';
import { appAdvice } from './appAdvice.js';
import AllPages from './components/AllPages.js';

const app = {
  initAllPages: function () {
    const thisApp = this;

    thisApp.songsListContainer = document.querySelector(select.containerOf.songsList);
    thisApp.randomSongContainer = document.querySelector(select.containerOf.randomSong);

    new AllPages(thisApp.songsListContainer, thisApp.randomSongContainer);
  },
  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if(page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }
    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      appAdvice.configureNavLink(thisApp, link);
    }
  },
  activatePage: function (pageId) {
    const thisApp = this;

    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },
  init: function () {
    const thisApp = this;
    console.log('*** App starting ***');
    thisApp.initAllPages();

    thisApp.initPages();
  },
};

app.init();