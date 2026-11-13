const buttons=[...document.querySelectorAll('[data-filter]')];
buttons.forEach(button=>button.addEventListener('click',()=>{buttons.forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button));});let count=0;document.querySelectorAll('[data-kind]').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.kind!==button.dataset.filter;if(!card.hidden)count++;});document.querySelector('#filter-status').textContent=`Showing ${count} ${button.dataset.filter==='all'?'products':button.dataset.filter+'s'}`;}));
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelectorAll('[data-copy-email]').forEach(button=>button.addEventListener('click',async()=>{
 const status=document.querySelector('.copy-status');
 try{await navigator.clipboard.writeText(button.dataset.copyEmail);status.textContent='Email address copied.';}
 catch{status.textContent='Copy this address: '+button.dataset.copyEmail;}
}));
