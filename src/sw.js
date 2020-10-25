/* eslint-disable no-undef, no-restricted-globals*/

// Wait for the "install" event to confirm that the service-worker has been installed.
self.addEventListener('install', (event) => {
    console.log("El service worker ha sido instalado!");
  });

// Don't need to Intercept the requests. Instead we call the workbox method
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
  
  // Activate event
  self.addEventListener('activate', (e) => {
    console.log('activado');
    return self.clients.claim();
  });

  self.addEventListener('message' ,(e) => {
    if(e.data.action == 'skipWaiting'){
      self.skipWaiting();
    }
  })
  

