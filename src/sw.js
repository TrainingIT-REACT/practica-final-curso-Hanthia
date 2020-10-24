/* eslint-disable no-undef, no-restricted-globals */
import {precacheAndRoute} from 'workbox-precaching';

// Wait for the "install" event to confirm that the service-worker has been installed.
self.addEventListener('install', (event) => {
    console.log("El service worker ha sido instalado!");
  });

// Don't need to Intercept the requests. Instead we call the workbox method
precacheAndRoute(self.__WB_MANIFEST);
  
  // Activate event
  self.addEventListener('activate', (e) => {
    console.log('activado');
    return self.clients.claim();
  });
  

