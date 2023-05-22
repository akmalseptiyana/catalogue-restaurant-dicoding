import "regenerator-runtime";

import { precacheAndRoute } from "workbox-precaching";
import { clientsClaim } from "workbox-core";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate, NetworkFirst } from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";
import CONFIG from "./globals/config";

clientsClaim();

self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ url }) =>
    url.origin === "https://fonts.googleapis.com" ||
    url.origin === "https://fonts.gstatic.com",
  new NetworkFirst({
    cacheName: "fonts",
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);

registerRoute(
  ({ url, request }) =>
    url.origin.includes(CONFIG.BASE_URL) && request.destination !== "image",
  new NetworkFirst({
    cacheName: "api-data",
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 360,
        maxEntries: 30,
      }),
    ],
  })
);

registerRoute(
  ({ url, request }) =>
    url.origin.includes(CONFIG.BASE_URL) && request.destination === "image",
  new StaleWhileRevalidate({
    cacheName: "api-image",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 30,
      }),
    ],
  })
);

self.addEventListener("install", () => {
  console.log("Service Worker: Installed");
});

self.addEventListener("activate", () => {
  console.log("Service Worker: Activated");
});
