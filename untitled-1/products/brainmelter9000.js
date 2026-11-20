 /* Place your JavaScript in this file */
 alert('rwd broke the font size needs to be fixed but i dont have access to my tools at the moment, tldr: fix later');

console.log('before you even THINK about asking to change the site pathing, remember that everything her can break at a moments notice');
const cardbox = document.getElementById('beanz');
const thxbox = document.getElementById('beans');
var jssux = 0;
console.log(jssux);
function buy1() {
    cardbox.style.display = "block";
    jssux = 1;
    console.log(jssux);
}
function unbuy1()
{
    if (jssux === 1){
    cardbox.style.display = "none";
    thxbox.style.display = "block";
    jssux = 0
    } else{
        cancel1();
    }
    console.log(jssux);
}
function cancel1(){
    cardbox.style.display = "none";
    thxbox.style.display = "none";
    jssux = 0;
    console.log(jssux);
}
 /* Place your JavaScript in this file */

console.log('rwd by Jackson and is not fully bugtested, report bugs to Owen');
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
