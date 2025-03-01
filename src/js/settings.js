export const select = {
  templateOf: {
    songsList: '#template-songs-list',
    song: '#template-song',
    searchSongs: '#template-search-songs'
  },
  containerOf: {
    pages: '#pages',
    songsList: '.songs-list',
    randomSong: '.random-song',
    search: '.search',
    searchSongs: '.search-songs'
  },
  nav: {
    links: '.main-nav a',
  },
  elements: {
    searchInput: '.search-song-input',
    searchButton: '.search-song-button',
  }
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  }
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    songs: 'songs',
    authors: 'authors',
  }
};

export const templates = {
  songsList: Handlebars.compile(document.querySelector(select.templateOf.songsList).innerHTML),
  song: Handlebars.compile(document.querySelector(select.templateOf.song).innerHTML),
  searchSongs: Handlebars.compile(document.querySelector(select.templateOf.searchSongs).innerHTML),
};