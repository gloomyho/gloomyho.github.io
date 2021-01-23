'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6bf572b4de84f451a759a3b9150c815d",
"assets/assets/fonts/openSans/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/assets/fonts/openSans/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/openSans/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/assets/images/freckel_girl.png": "4e2472ab01af1c95a3c2c59d93e83678",
"assets/assets/images/Gene.png": "bc5a79400962cf4e93d135e367ab1125",
"assets/assets/images/haut.doppel.png": "93c4ede83ee75e64cdb13fa3965b30ff",
"assets/assets/images/Hautfleck.png": "def0433236c69438d10d2cd4d487a5b2",
"assets/assets/images/hautprobe_kurz.png": "7006f1abfde6eedc13ff8d80df54691e",
"assets/assets/images/header/exit.png": "863209a5e029feeb88d9e46afb21bce0",
"assets/assets/images/header/menu.png": "b46f58f1d453522b04b0cae964cdaced",
"assets/assets/images/home/avatar.png": "9afae2c0c418d49076ddab3a02277bfc",
"assets/assets/images/home/information.png": "ee6336e5137e457be2982065b643b4c9",
"assets/assets/images/home/protection.png": "ca96ea56a138d6ddcd628652b4e86f97",
"assets/assets/images/logos/logo_deutsche-krebshilfe.png": "3e215d95fe01350a0e618958e5faceab",
"assets/assets/images/logos/logo_hochschule-trier.png": "446021e96d90f200777e89449834771a",
"assets/assets/images/logos/logo_tabiri.png": "69c0f6034bd3859ac0b8457f49c53851",
"assets/assets/images/logos/logo_uni-luebeck.png": "8a650f5c69d539d4e24aa7dd69c5f6a6",
"assets/assets/images/MeinRisiko.png": "9afae2c0c418d49076ddab3a02277bfc",
"assets/assets/images/placeholder.png": "deeb21bc40011d3e3b289f8aa927ca1a",
"assets/assets/images/prevention/prevention_1.png": "26f370ad26ddebb3b3b1401409c376be",
"assets/assets/images/prevention/prevention_2.png": "3be53c1340fab65d85ac2d7ea9cfe0aa",
"assets/assets/images/protection/doctor_2.png": "17b1ba28e15a0af19999a6fb8acd8386",
"assets/assets/images/Schatten_basic.png": "9ec8b08adb72a00067e650a33838132a",
"assets/assets/images/Schatten_prevention.png": "8d3a2400debba9e7e756610bdb187dcc",
"assets/assets/images/screening/doctor_1.png": "9f366167649249aa63d13164defe1126",
"assets/assets/images/screening/krankenhaus.png": "74c286cc2955b25f49f81d201995ad26",
"assets/assets/images/screening/lichtlupe.png": "79f2fad2185f9a31902d08ef7664a9cb",
"assets/assets/images/screening/microscope.png": "85a9ecb6c8ffa0c273d83950e1677605",
"assets/assets/images/screening/r%25C3%25BCckenmelanom.png": "c2ce363fd1824c89cfdfaaf334afcb17",
"assets/assets/images/screening/termin.png": "6128f8be6436cfce5ab8abd8a51f2a74",
"assets/assets/images/ueberHautkrebs.png": "ee6336e5137e457be2982065b643b4c9",
"assets/assets/images/wiesch%25C3%25BCtzen.png": "ca96ea56a138d6ddcd628652b4e86f97",
"assets/FontManifest.json": "d19df30ab9d3c31d201e8e4ae604f24e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "3f30b74dc2cc05bf36cd6bb3d48e6545",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f71472c0007fc87400ced646189629dd",
"/": "f71472c0007fc87400ced646189629dd",
"main.dart.js": "9c1ecbdb6e37426af2b1ddb56b66f901",
"manifest.json": "0bf404ba6fb5df0d9e8c3fcb4e15594d",
"version.json": "ef8aba205d5d76752eef0cb37fb7c8b0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
