const dialog=document.querySelector('#lightbox');
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{
 const image=dialog.querySelector('img');
 image.src=button.dataset.image;
 image.alt=button.dataset.title;
 dialog.querySelector('p').textContent=button.dataset.title;
 dialog.showModal();
}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});

// Mobile showcase carousel
const showcase = document.querySelector('.phone-showcase');
const stage = showcase.querySelector('.carousel-stage');
const phones = [...showcase.querySelectorAll('.phone')];
const dots = [...showcase.querySelectorAll('[data-slide]')];
const caption = showcase.querySelector('.carousel-caption');
const pauseButton = showcase.querySelector('.pause-button');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
let active = 0;
let paused = motion.matches;
let pointerStart = null;
let timer;
function schedule() {
  window.clearTimeout(timer);
  if (!paused && !document.hidden && !showcase.matches(':focus-within')) {
    timer = window.setTimeout(() => show(active + 1), 2000);
  }
}
function show(index) {
  active = (index + phones.length) % phones.length;
  phones.forEach((phone, i) => {
    const offset = (i - active + phones.length) % phones.length;
    const position = offset === 0 ? 'active' : offset === 1 ? 'right' : offset === phones.length - 1 ? 'left' : 'far';
    phone.className = 'phone ' + position;
    phone.setAttribute('aria-hidden', String(i !== active));
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('selected', i === active);
    if (i === active) dot.setAttribute('aria-current', 'true');
    else dot.removeAttribute('aria-current');
  });
  caption.textContent = phones[active].getAttribute('aria-label');
  showcase.querySelector('.dots').setAttribute('aria-label', 'Slide ' + (active + 1) + ' of ' + phones.length);
  schedule();
}
function updatePause() {
  pauseButton.setAttribute('aria-label', paused ? 'Resume automatic rotation' : 'Pause automatic rotation');
  pauseButton.firstElementChild.textContent = paused ? '▶' : 'Ⅱ';
  schedule();
}
showcase.querySelectorAll('[data-move]').forEach(button => button.addEventListener('click', () => show(active + Number(button.dataset.move))));
dots.forEach(dot => dot.addEventListener('click', () => show(Number(dot.dataset.slide))));
pauseButton.addEventListener('click', () => { paused = !paused; updatePause(); });
stage.addEventListener('pointerdown', event => {
  pointerStart = event.clientX;
  stage.setPointerCapture(event.pointerId);
});
stage.addEventListener('pointerup', event => {
  if (pointerStart === null) return;
  const distance = event.clientX - pointerStart;
  pointerStart = null;
  if (Math.abs(distance) > 35) show(active + (distance < 0 ? 1 : -1));
});
stage.addEventListener('pointercancel', () => { pointerStart = null; });
stage.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    show(active + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
showcase.addEventListener('focusin', () => window.clearTimeout(timer));
showcase.addEventListener('focusout', () => window.setTimeout(schedule, 0));
document.addEventListener('visibilitychange', schedule);
motion.addEventListener('change', event => { if (event.matches) { paused = true; updatePause(); } });
updatePause();
