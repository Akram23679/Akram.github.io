// ---------- Project filter ----------
const buttons = document.querySelectorAll('.filter button');
const cards = document.querySelectorAll('.card');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.setAttribute('aria-pressed', 'false'));
    btn.setAttribute('aria-pressed', 'true');

    const filter = btn.dataset.f;
    cards.forEach(card => {
      const show = filter === 'all' || card.dataset.cat === filter;
      card.classList.toggle('hide', !show);
    });
  });
});

// ---------- Scroll reveal ----------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = Math.min(i * 60, 300) + 'ms';
  observer.observe(el);
});