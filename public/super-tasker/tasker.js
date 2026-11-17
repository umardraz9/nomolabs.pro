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
