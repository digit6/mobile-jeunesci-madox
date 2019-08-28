

const cacheName="__suffixJeuneCI"

var fileToCache=[
    '/',
]

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(req);
    return cachedResponse || networkFirst(req);
  }

  async function networkFirst(req) {
    const cache = await caches.open(cacheName);
    try { 
      const fresh = await fetch(req);
      cache.put(req, fresh.clone());
      return fresh;
    } catch (e) { 
      const cachedResponse = await cache.match(req);
      return cachedResponse;
    }
  }



self.addEventListener('install',e=>{
    
    e.waitUntil(
        caches.open(cacheName).then(cache=>{
            console.log("sw cache files")
            return cache.addAll(fileToCache)
        }).catch(err=>{
            console.log(err)
        })
    )

})

self.addEventListener('fetch', event => {

  
  const req = event.request;

  if(req.url.match(/(graphql)/)) return false
  if (/.*(css|html|json|js|png|jpeg|woff2)$/.test(req.url)) {
  //  console.log('Network first ',req)
    event.respondWith(networkFirst(req));
  } else {
     // console.log('Cache first ',req)
    event.respondWith(cacheFirst(req));
  }
});


self.addEventListener('activate', function(event) {
  console.log('sw activate');
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
         // console.log('sw removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});