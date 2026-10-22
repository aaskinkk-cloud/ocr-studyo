/* OCR Stüdyo çevrimdışı önbelleği. Yalnızca kendi önbelleğini siler. */
const P='ocr-studyo-',V=P+'1.15';
const SHELL=['./','index.html','manifest.webmanifest','icon.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.indexOf(P)===0&&k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
  if(r.mode==='navigate'){const net=fetch(r.url,{cache:'no-cache'}).then(res=>{if(res&&res.ok){const c=res.clone();caches.open(V).then(x=>x.put('index.html',c))}return res});
    e.respondWith(Promise.race([net,new Promise((_,rej)=>setTimeout(rej,3000))]).catch(()=>caches.match('index.html',{cacheName:V}).then(h=>h||net)));return}
  e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{if(res&&res.ok){const c=res.clone();caches.open(V).then(x=>x.put(r,c))}return res})))});
