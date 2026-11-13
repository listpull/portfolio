(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
    }));
  }
  const buttons = [...document.querySelectorAll('.filter-btn')];
  const cards = [...document.querySelectorAll('.project-card')];
  const count = document.querySelector('#visible-count');
  const filterTo = (category) => {
    let visible = 0;
    buttons.forEach(b => {
      const on = b.dataset.filter === category;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    cards.forEach(card => {
      const show = category === 'all' || card.dataset.category === category;
      card.hidden = !show;
      if (show) visible++;
    });
    if (count) count.textContent = String(visible).padStart(2, '0');
  };
  buttons.forEach(button => button.addEventListener('click', () => filterTo(button.dataset.filter)));
  document.querySelectorAll('[data-copy-email]').forEach(button => button.addEventListener('click', async () => {
    const email = 'jeremiahmonga@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      const status = document.getElementById('copy-status');
      if (status) {
        status.textContent = 'Email copied: ' + email;
        status.hidden = false;
        clearTimeout(window.__copyTimer);
        window.__copyTimer = setTimeout(() => { status.hidden = true; }, 2600);
      }
    } catch {
      window.location.href = 'mailto:' + email;
    }
  }));
  // Deep-linked work remains discoverable even if a visitor previously filtered the grid.
  function showHashProject() {
    const target = document.querySelector(location.hash.startsWith('#piece-') ? location.hash : '#__not-found');
    if (target && target.classList.contains('project-card')) filterTo('all');
  }
  window.addEventListener('hashchange', showHashProject);
  showHashProject();
})();
