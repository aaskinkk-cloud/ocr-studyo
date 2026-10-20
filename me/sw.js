/* Milli Emlak açılış sayfası — yalnız bu klasörü kapsar (üst klasördeki OCR Stüdyo önbelleği bu sayfaları görmez).
   Önbellek tutmaz; her şey ağdan gelir. */
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){if(e.request.method!=='GET')return;e.respondWith(fetch(e.request))});
