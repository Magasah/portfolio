/* Runs before first paint: applies saved theme/language so the page never flashes. */
(function () {
  var root = document.documentElement;
  var theme = null;
  var lang = null;
  try {
    theme = localStorage.getItem('theme');
    lang = localStorage.getItem('lang');
  } catch (e) {}

  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  if (lang !== 'ru' && lang !== 'en') {
    var nav = (navigator.language || 'ru').toLowerCase();
    lang = nav.indexOf('ru') === 0 || nav.indexOf('tg') === 0 ? 'ru' : 'en';
  }

  root.setAttribute('data-theme', theme);
  root.setAttribute('lang', lang);
  root.classList.add('js');
})();
