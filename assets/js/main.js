(function () {
  'use strict';

  var root = document.documentElement;

  /* Translations. Russian is the default markup; keys must match data-i18n in index.html. */
  var T = {
    ru: {
      title: 'Muhammad — Fullstack-разработчик, Душанбе',
      skip: 'Перейти к содержимому',
      navProjects: 'Проекты',
      navAbout: 'Обо мне',
      navSkills: 'Навыки',
      navContact: 'Контакты',
      navWrite: 'Написать',
      newTab: '(откроется в новой вкладке)',
      ariaTheme: 'Переключить тему',
      ariaMenuOpen: 'Открыть меню',
      ariaMenuClose: 'Закрыть меню',
      heroStatus: 'Открыт к вакансиям и заказам',
      heroRole: 'Fullstack-разработчик',
      heroLead: 'Делаю веб-сервисы и Telegram-ботов: бэкенд на Python, интерфейсы на Next.js. Отдельно занимаюсь безопасностью приложений.',
      ctaProjects: 'Смотреть проекты',
      factLocationK: 'Локация',
      factLocationV: 'Душанбе, Таджикистан (UTC+5)',
      factStackK: 'Основной стек',
      factNowK: 'Сейчас',
      factNowV: 'Развиваю TAJSEL, цифровой маркетплейс',
      projectsTitle: 'Проекты',
      statusDev: 'В разработке',
      statusLive: 'Запущен',
      statusPrivate: 'Приватный репозиторий',
      tajselDesc: 'Цифровой маркетплейс для Таджикистана: каталог по категориям, кабинет продавца, безопасная оплата.',
      veyrixDesc: 'Telegram-workspace для Business-аккаунта: архив новых, изменённых и удалённых сообщений, медиа, поиск и Mini App. Только официальные Business Bot updates.',
      otherTitle: 'Другие проекты · открытый код',
      kindWeb: 'Веб',
      kindBot: 'Бот',
      kindSec: 'Безопасность',
      kindNotes: 'Заметки',
      zooDesc: 'Маркетплейс животных: 18 категорий, VIP-объявления, личные кабинеты, верификация продавцов, PWA.',
      merixDesc: 'Telegram-бот IT-агентства: каталог услуг, оформление заказа через FSM, уведомления администратору.',
      mcodeDesc: 'Telegram-бот с inline-меню для MCode Academy: доставка учебного контента.',
      ghostDesc: 'TCP-сканер портов без зависимостей, только стандартная библиотека Python. Проверяет популярные порты: SSH, HTTP, MySQL, RDP.',
      terminalDesc: 'Аутентификация по PIN-коду с ограничением попыток и блокировкой при переборе.',
      learnDesc: 'Открытый конспект пути в кибербезопасность: Linux, Python для security-скриптов, OWASP Top 10, инструменты.',
      aboutTitle: 'Обо мне',
      aboutP1: 'Я fullstack-разработчик из Душанбе и студент программной инженерии. Пишу бэкенд на <strong>Python</strong> (FastAPI, Django), интерфейсы на <strong>Next.js</strong>, данные храню в <strong>PostgreSQL</strong>.',
      aboutP2: 'Делаю маркетплейсы, Telegram-ботов и инструменты автоматизации. Безопасность закладываю с самого начала: валидация входных данных, аутентификация, секреты в переменных окружения, защита от перебора.',
      aboutP3: 'Вне проектов разбираю CTF-задания на TryHackMe и Hack The Box и изучаю, как устроены Linux и сети.',
      nowTitle: 'Чем занят сейчас',
      now1: 'TAJSEL: развиваю маркетплейс для Таджикистана.',
      now2: 'Безопасность приложений: OWASP Top 10, практика на CTF.',
      now3: 'Ищу работу или проекты в веб-разработке.',
      skillsTitle: 'Навыки',
      skLang: 'Языки',
      skData: 'Данные',
      skSec: 'Безопасность',
      skScan: 'Сетевое сканирование',
      skTools: 'Инструменты',
      contactTitle: 'Контакты',
      contactLead: 'Есть задача или вакансия? Напишите мне.',
      contactSub: 'Удобнее всего в Telegram. Код моих проектов лежит на GitHub.',
      copy: 'Копировать',
      copied: 'Скопировано',
      open: 'Открыть',
      footerLoc: 'Душанбе, Таджикистан',
      toTop: 'Наверх'
    },
    en: {
      title: 'Muhammad — Fullstack Developer, Dushanbe',
      skip: 'Skip to content',
      navProjects: 'Projects',
      navAbout: 'About',
      navSkills: 'Skills',
      navContact: 'Contact',
      navWrite: 'Message me',
      newTab: '(opens in a new tab)',
      ariaTheme: 'Toggle theme',
      ariaMenuOpen: 'Open menu',
      ariaMenuClose: 'Close menu',
      heroStatus: 'Open to jobs and freelance',
      heroRole: 'Fullstack Developer',
      heroLead: 'I build web services and Telegram bots: Python backends, Next.js interfaces. I also work on application security.',
      ctaProjects: 'View projects',
      factLocationK: 'Location',
      factLocationV: 'Dushanbe, Tajikistan (UTC+5)',
      factStackK: 'Core stack',
      factNowK: 'Now',
      factNowV: 'Building TAJSEL, a digital marketplace',
      projectsTitle: 'Projects',
      statusDev: 'In development',
      statusLive: 'Live',
      statusPrivate: 'Private repository',
      tajselDesc: 'A digital marketplace for Tajikistan: category catalog, seller dashboard, secure payments.',
      veyrixDesc: 'A Telegram workspace for Business accounts: archive of new, edited and deleted messages, media, search and a Mini App. Official Business Bot updates only.',
      otherTitle: 'More projects · open source',
      kindWeb: 'Web',
      kindBot: 'Bot',
      kindSec: 'Security',
      kindNotes: 'Notes',
      zooDesc: 'Animal marketplace: 18 categories, VIP listings, user dashboards, seller verification, PWA.',
      merixDesc: 'Telegram bot for an IT agency: service catalog, FSM-based order flow, admin notifications.',
      mcodeDesc: 'Telegram bot with inline menus for MCode Academy: learning content delivery.',
      ghostDesc: 'Dependency-free TCP port scanner built on the Python standard library. Checks common ports: SSH, HTTP, MySQL, RDP.',
      terminalDesc: 'PIN authentication with attempt limits and a lockout on brute-force attempts.',
      learnDesc: 'Public notes on my path into cybersecurity: Linux, Python for security scripting, OWASP Top 10, tools.',
      aboutTitle: 'About',
      aboutP1: 'I am a fullstack developer from Dushanbe and a software engineering student. I write backends in <strong>Python</strong> (FastAPI, Django), interfaces in <strong>Next.js</strong>, and keep data in <strong>PostgreSQL</strong>.',
      aboutP2: 'I build marketplaces, Telegram bots and automation tools. Security goes in from the start: input validation, authentication, secrets in environment variables, brute-force protection.',
      aboutP3: 'Outside of projects I work through CTF challenges on TryHackMe and Hack The Box, and study how Linux and networks work.',
      nowTitle: 'Currently',
      now1: 'TAJSEL: building a marketplace for Tajikistan.',
      now2: 'Application security: OWASP Top 10, CTF practice.',
      now3: 'Looking for a job or projects in web development.',
      skillsTitle: 'Skills',
      skLang: 'Languages',
      skData: 'Data',
      skSec: 'Security',
      skScan: 'Network scanning',
      skTools: 'Tools',
      contactTitle: 'Contact',
      contactLead: 'Have a task or a vacancy? Message me.',
      contactSub: 'Telegram is the fastest way. The code for my projects is on GitHub.',
      copy: 'Copy',
      copied: 'Copied',
      open: 'Open',
      footerLoc: 'Dushanbe, Tajikistan',
      toTop: 'Back to top'
    }
  };

  function dict() { return T[root.getAttribute('lang')] || T.ru; }

  function applyLang(lang) {
    var d = T[lang] || T.ru;
    root.setAttribute('lang', lang);
    document.title = d.title;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n')];
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n-html')];
      if (v !== undefined) el.innerHTML = v; /* strings above are static and trusted */
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n-aria')];
      if (v !== undefined) el.setAttribute('aria-label', v);
    });
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    syncBurger();
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  /* Theme */
  var themeColor = { light: '#ffffff', dark: '#0b0b0d' };
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    document.querySelectorAll('meta[name="theme-color"]').forEach(function (m) {
      m.setAttribute('content', themeColor[theme]);
      m.removeAttribute('media');
    });
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }

  document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  });
  document.querySelectorAll('[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () { applyLang(btn.getAttribute('data-lang')); });
  });

  /* Mobile menu */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');

  function syncBurger() {
    var open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-label', open ? dict().ariaMenuClose : dict().ariaMenuOpen);
    burger.setAttribute('data-i18n-aria', open ? 'ariaMenuClose' : 'ariaMenuOpen');
  }

  function setMenu(open) {
    menu.hidden = !open;
    menu.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
    syncBurger();
  }

  burger.addEventListener('click', function () {
    setMenu(burger.getAttribute('aria-expanded') !== 'true');
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) { setMenu(false); burger.focus(); }
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', function (e) {
    if (e.matches) setMenu(false);
  });

  /* Nav border + active section */
  var nav = document.getElementById('nav');
  function onScroll() { nav.classList.toggle('is-stuck', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var links = document.querySelectorAll('.nav-link');
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          if (a.getAttribute('href') === '#' + entry.target.id) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { spy.observe(s); });

    /* Reveal on scroll */
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          reveal.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('[data-reveal]').forEach(function (el) { reveal.observe(el); });
  } else {
    document.querySelectorAll('[data-reveal]').forEach(function (el) { el.classList.add('is-in'); });
  }

  /* Copy Telegram handle */
  var copyBtn = document.getElementById('copyTg');
  var copyLabel = document.getElementById('copyLabel');
  var copyTimer;
  copyBtn.addEventListener('click', function () {
    var text = '@vvewrix';
    var done = function () {
      copyBtn.setAttribute('data-state', 'copied');
      copyLabel.textContent = dict().copied;
      clearTimeout(copyTimer);
      copyTimer = setTimeout(function () {
        copyBtn.setAttribute('data-state', 'idle');
        copyLabel.textContent = dict().copy;
      }, 2000);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else {
      fallback();
    }
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.className = 'sr-only';
      document.body.appendChild(ta);
      ta.select();
      try { if (document.execCommand('copy')) done(); } catch (e) {}
      document.body.removeChild(ta);
    }
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  applyTheme(root.getAttribute('data-theme'));
  applyLang(root.getAttribute('lang'));
})();
