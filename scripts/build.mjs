import {mkdir,cp,writeFile} from 'node:fs/promises';
await import('./pages.mjs');
await mkdir('dist',{recursive:true});
await cp('public','dist',{recursive:true});
await cp('src/caravan','dist/games/the-last-caravan',{recursive:true});
console.log('Built NomoLabs homepage and The Last Caravan product page.');
