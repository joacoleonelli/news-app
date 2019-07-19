/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'news-app-cache';
var FILES_TO_CACHE = [
    'index.html',
    'static/js/bundle.js'
];

self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
          console.log('[ServiceWorker] Pre-caching offline page');
          return cache.addAll(FILES_TO_CACHE);
        })
    );
  
    self.skipWaiting();
  });
  
  self.addEventListener('activate', (evt) => {
    console.log('[ServiceWorker] Activate');
    // CODELAB: Remove previous cached data from disk.
    evt.waitUntil(
        caches.keys().then((keyList) => {
          return Promise.all(keyList.map((key) => {
            if (key !== CACHE_NAME) {
              console.log('[ServiceWorker] Removing old cache', key);
              return caches.delete(key);
            }
          }));
        })
    );
  
    self.clients.claim();
  });
  
  self.addEventListener('fetch', (evt) => {
    console.log('[ServiceWorker] Fetch', evt.request.url);
    evt.respondWith(
        caches.match(evt.request)
            .then(function(response){
                if (response) {
                    return response;
                }

                const fetchRequest = evt.request.clone();

                return fetch(fetchRequest).then(
                    function(response) {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        
                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(evt.request, responseToCache);
                            });
                        
                        return response;
                    }
                );
            })
    );
  });