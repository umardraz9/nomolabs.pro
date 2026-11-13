const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-nav');
if(toggle&&nav){
  const close=()=>{toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open')};
  toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open)});
  nav.addEventListener('click',event=>{if(event.target.closest('a'))close()});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('is-open')){close();toggle.focus()}});
}
const dialog=document.querySelector('#gallery-dialog');
if(dialog){
  let opener;
  document.querySelectorAll('[data-gallery]').forEach(button=>button.addEventListener('click',()=>{
    opener=button;const image=dialog.querySelector('img');image.src=button.dataset.gallery;image.alt=button.dataset.caption;
    dialog.querySelector('.lightbox-caption').textContent=button.dataset.caption;dialog.showModal();
  }));
  dialog.querySelector('button').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)dialog.close()}});
  dialog.addEventListener('close',()=>opener?.focus());
}
const chapters=[...document.querySelectorAll('[data-chapter]')];
const chapterImage=document.querySelector('#chapter-art');
chapters.forEach(chapter=>chapter.addEventListener('toggle',()=>{
 if(!chapter.open||!chapterImage)return;
 chapterImage.src=`/games/the-last-caravan/assets/chapter-${chapter.dataset.chapter}.webp`;
 chapterImage.alt=`Chapter ${chapter.dataset.roman} artwork for ${chapter.dataset.title}`;
 document.querySelector('#chapter-art-number').textContent=`CHAPTER ${chapter.dataset.roman}`;
 document.querySelector('#chapter-art-line').textContent=chapter.dataset.line;
}));
