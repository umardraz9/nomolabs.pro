import {readFile,writeFile} from 'node:fs/promises';
const file='public/index.html';let html=await readFile(file,'utf8');
const start=html.indexOf('<section class="hero">');const end=html.indexOf('<section class="collection',start);
if(start<0){console.log('Refinement already applied.');process.exit(0);}
html=html.slice(0,start)+`<section class="hero immersive-hero">
<div class="floating-worlds" aria-hidden="true">
<div class="world-tile tile-castle"><img src="/games/the-last-caravan/assets/hero.png" alt="" width="1536" height="1024"><span>THE LAST CARAVAN</span></div>
<div class="world-tile tile-flood"><img src="/games/the-last-caravan/assets/flood.png" alt="" width="1280" height="720"></div>
<div class="world-tile tile-trade"><img src="/games/the-last-caravan/assets/trader.png" alt="" width="1280" height="720"></div>
<div class="world-tile tile-run"><span class="tile-category">FIND YOUR RHYTHM</span><strong>nomo<br><i>runner.</i></strong><div class="mini-island"></div><b>✦</b></div>
<div class="world-tile tile-abc"><b>A</b><b>B</b><b>C</b><span>ALPHABET BEACH</span></div>
<div class="world-tile tile-dodge"><span>STAY ONE STEP AHEAD</span><b>➤</b><strong>MISSILE DODGE</strong></div>
<div class="world-tile tile-draw"><span>Color Draw</span><i></i><i></i></div>
</div>
<div class="hero-copy"><p class="eyebrow"><span class="dot"></span> A SMALL STUDIO. A WORLD OF POSSIBILITIES.</p><h1>Good things happen<br>when you <em>get curious.</em></h1><p class="intro">Lose yourself in a story. Discover a new challenge.<br>Find your next favorite game or app, made by NomoLabs.</p><a class="button dark" href="#collection">Explore our collection <span aria-hidden="true">↗</span></a></div>
<a class="scroll-cue" href="#collection"><span>SCROLL TO DISCOVER</span><b aria-hidden="true">↓</b></a>
</section>
<div class="collection-intro"><span>PLAY A LITTLE.</span><span>DISCOVER SOMETHING.</span><span>MAKE IT YOURS.</span></div>
`+html.slice(end);
html=html.replace('Pick your kind<br>of <em>curiosity.</em>','A world for<br><em>every kind of you.</em>');
html=html.replace('Different worlds.<br>The same <em>curious spirit.</em>','Small studio.<br><em>Endless curiosity.</em>');
html=html.replace('<link rel="stylesheet" href="/styles.css">','<link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/refined.css">');
html=html.replace('content="#f6f5ef"','content="#f1f1ed"');
html=html.replace('<div><a href="#collection">Collection</a>','<div><a href="#collection">Collection</a>');
html=html.replace('</footer>','<div class="footer-wordmark" aria-hidden="true">nomolabs<span>®</span></div></footer>');
await writeFile(file,html);
