/* ===================================

	SW cache handle

======================================*/


// sets the cache name
var staticCacheName = 'wa-static-v2.8';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
      './',
      './src/style/bootstrap.min.css',
      './src/style/font-awesome.min.css',
      './src/style/mdb.min.css',
      './src/style/style.css',
      './src/img/clouds-192.png',
      './src/img/clouds.png',
      './src/img/gears.gif',
      './src/img/clouds-favicon.png',
      './src/img/up-arrow.png',
      './manifest.json',
      './bundle.js'
      ]);
    }).then(function(){
      return self.skipWaiting();
    })
  );
});

// adds cleanup for old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('wa-') &&
                 cacheName != staticCacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    }).then(function(){
      return self.clients.claim();
    })
  );
});


self.addEventListener('fetch', function(event) {
  
 // TODO: respond to requests for the root page with
  // the page skeleton from the cache
  // parses the request URL form the cache
  var requestURL = new URL(event.request.url);

  // checks to see if the request URL is the same as the current origin
  if (requestURL.origin === location.origin) {
    //after the first request is true, checks if the user's request URL is the root
    if (requestURL.pathname ==='/') {
      // and if so, responds with the /skeleton URL instead
      // grabs the /skeleton URL straight, from the cache
      event.respondWith(caches.match('/'));
      // no need to go the network as a fallback if this fails, as /skeleton is cached no matter what during the sw install
      return;
    }
  } 

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

// skips waiting to update SW
self.addEventListener('message', function(event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});
