/* eslint-disable no-restricted-globals */
const CACHE = 'news-app-cache';

self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');
    evt.waitUntil(precache());
});


addEventListener('fetch', (evt) => {
    console.log('The service worker is serving the asset.');
    evt.respondWith(
      caches.match(evt.request)
        .then(function(response) {
          if (response) {
            return response;     // if valid response is found in cache return it
          } else {
            return fetch(evt.request)     //fetch from internet
              .then(function(res) {
                return caches.open(CACHE)
                  .then(function(cache) {
                    cache.put(evt.request.url, res.clone());    //save the response for future
                    return res;   // return the fetched data
                  })
              })
              .catch(function(err) {       // fallback mechanism
                console.log(err);
              });
          }
        })
    );
});

function fromCache(request) {
  console.log("From cache");
  return caches.open(CACHE).then(function(cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

function update(request) {
  console.log("Updating cache");
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}
  
function precache() {
  return caches.open(CACHE).then(function(cache) {
    return cache.addAll([
      `/`,
      `/index.html`,
      `/manifest.json`
    ])
  });
}