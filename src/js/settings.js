export const select = {
  templateOf: {
    songsList: '#template-songs-list'
  },
  containerOf: {
    pages: '#pages',
    songsList: '.songs-list',
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
  }
};

export const templates = {
  songsList: Handlebars.compile(document.querySelector(select.templateOf.songsList).innerHTML),
};