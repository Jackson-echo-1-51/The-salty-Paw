/* Place your JavaScript in this file */

console.log('before you even THINK about asking to change the site pathing, remember that everything her can break at a moments notice');

/* carousel code */

const track = document.querySelector('.track');

if (track && track.children.length > 0) {

  track.appendChild(track.children[0].cloneNode(true));

  const total = track.children.length - 1;
  let index = 0;

  function next() {

    index++;

    const reduceMotion = document.documentElement.classList.contains('reduce-motion');

    track.style.transition = reduceMotion
      ? 'none'
      : 'transform 0.5s ease';

    track.style.transform = `translateX(-${index * 100}%)`;

    if (reduceMotion && index === total) {
      index = 0;
      track.style.transform = 'translateX(0)';
    }
  }

  track.addEventListener('transitionend', () => {

    if (index === total) {
      track.style.transition = 'none';
      index = 0;
      track.style.transform = 'translateX(0)';
    }

  });

  setInterval(next, 2000);

}

/* carousel code end */

/* carousel code end */
// accesibility button stuff
const root = document.documentElement;
const KEY = 'prefs';
const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
const save = (p) => { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch {} };

let prefs = load();

const classMap = {
  contrast: 'high-contrast',
  reduceMotion: 'reduce-motion',
  dyslexia: 'dyslexia-font',
};

function apply() {
  root.style.setProperty('--font-scale', prefs.fontScale || 1);
  for (const [key, cls] of Object.entries(classMap)) {
    root.classList.toggle(cls, !!prefs[key]);
    const btn = document.querySelector(`[data-action="${key}"]`);
    if (btn) btn.setAttribute('aria-pressed', String(!!prefs[key]));
  }
}

const toggle = document.getElementById('toggle');
const panel = document.getElementById('panel');

if (toggle && panel) {

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    panel.hidden = open;
  });

  panel.addEventListener('click', (e) => {
    const action = e.target.dataset.action;
    if (!action) return;

    if (action === 'font-up') prefs.fontScale = Math.min((prefs.fontScale || 1) + 0.1, 1.5);
    else if (action === 'font-down') prefs.fontScale = Math.max((prefs.fontScale || 1) - 0.1, 0.8);
    else if (action === 'reset') prefs = {};
    else prefs[action] = !prefs[action];

    save(prefs);
    apply();
  });

  panel.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggle.click();
      toggle.focus();
    }
  });

}

apply();
//thing end
// hamburger
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');

function poof() {

    const isOpen = navbar.classList.toggle('open');

    hamburger.classList.toggle('active');

    hamburger.setAttribute('aria-expanded', String(isOpen));

}