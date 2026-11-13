import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('dist');
http.createServer(async(req,res)=>{try{let file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(file!==root&&!file.startsWith(root+path.sep))throw Error();if((await stat(file)).isDirectory())file=path.join(file,'index.html');const ext=path.extname(file);res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml'})[ext]||'text/plain');res.end(await readFile(file));}catch{res.writeHead(404);res.end('Page not found');}}).listen(4174,'127.0.0.1',()=>console.log('http://127.0.0.1:4174'));
