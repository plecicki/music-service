export const select = {
  templateOf: {
    songsList: '#template-songs-list',
    song: '#template-song',
  },
  containerOf: {
    pages: '#pages',
    songsList: '.songs-list',
    randomSong: '.random-song',
  },
  nav: {
    links: '.main-nav a',
  },
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
};