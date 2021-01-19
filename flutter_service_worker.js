'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1375f87af1d3d6e7a60a69ff6598341c",
"assets/assets/animations/Adobe_XD_export.aep": "2c96503903f682e38a6bde8f78ba2aa1",
"assets/assets/animations/HM_Left_down.json": "83c08fae8b84e06d59c46ce2c01fd5b3",
"assets/assets/animations/HM_Left_Grow.json": "0c8f82d82970a388d43986b0fa9207d8",
"assets/assets/animations/HM_Middle_down.json": "2977e0aa6956c19b76e1d02d5cb57d98",
"assets/assets/animations/HM_Middle_grow.json": "f69a02e074cb2e732b12a3eafc46e1aa",
"assets/assets/animations/HM_Right_down.json": "3d6a92adb46cac555a1ed57b28efab54",
"assets/assets/animations/HM_Right_grow.json": "55b1293356382f1865d6c4740ab24f17",
"assets/assets/animations/Result_highrisk.json": "9d3a23112bb8b425e52e3f5e3315f4aa",
"assets/assets/animations/result_low_risk.json": "89746e895586122d9a175fc28aefc9ba",
"assets/assets/animations/Result_mediumrisk.json": "cb2a41c6c8ea6cd46edc04931c0f28c6",
"assets/assets/animations/result_veryhigh.json": "a7e23ca584b1dde53e91ce787f07e996",
"assets/assets/fonts/openSans/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/assets/fonts/openSans/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/openSans/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/assets/images/freckel_girl.png": "4e2472ab01af1c95a3c2c59d93e83678",
"assets/assets/images/Gene.png": "bc5a79400962cf4e93d135e367ab1125",
"assets/assets/images/haut.doppel.png": "93c4ede83ee75e64cdb13fa3965b30ff",
"assets/assets/images/Hautfleck.png": "def0433236c69438d10d2cd4d487a5b2",
"assets/assets/images/hautprobe_kurz.png": "7006f1abfde6eedc13ff8d80df54691e",
"assets/assets/images/header/Beenden.png": "863209a5e029feeb88d9e46afb21bce0",
"assets/assets/images/header/StartMenu.png": "b46f58f1d453522b04b0cae964cdaced",
"assets/assets/images/home/avatar.png": "9afae2c0c418d49076ddab3a02277bfc",
"assets/assets/images/home/information.png": "ee6336e5137e457be2982065b643b4c9",
"assets/assets/images/home/protection.png": "ca96ea56a138d6ddcd628652b4e86f97",
"assets/assets/images/logos/HS_Trier_Logo.jpg": "2112df209631254370e45e7fd848aae2",
"assets/assets/images/logos/logo_deutsche-krebshilfe.png": "3e215d95fe01350a0e618958e5faceab",
"assets/assets/images/logos/Logo_Deutsche_Krebshilfe_.svg": "3df7a643467e486c530fdfe6622576e2",
"assets/assets/images/logos/Logo_Hochschule_Trier.svg": "107ac86c897cb3a07cb010ea75722d4c",
"assets/assets/images/logos/Logo_TabiRi.svg": "bb756e5f71c7c22797b50fd7de750efa",
"assets/assets/images/logos/Logo_Uni_Luebeck_.png": "8a650f5c69d539d4e24aa7dd69c5f6a6",
"assets/assets/images/logos/Logo_Uni_Luebeck_.svg": "14596b8870c55c80c9779abd4caa681e",
"assets/assets/images/logos/TabiRi_logo.png": "69c0f6034bd3859ac0b8457f49c53851",
"assets/assets/images/logos/TabiRi_logo.svg": "bb756e5f71c7c22797b50fd7de750efa",
"assets/assets/images/MeinRisiko.png": "9afae2c0c418d49076ddab3a02277bfc",
"assets/assets/images/placeholder.png": "deeb21bc40011d3e3b289f8aa927ca1a",
"assets/assets/images/prevention/Prevention_1.png": "26f370ad26ddebb3b3b1401409c376be",
"assets/assets/images/prevention/Prevention_2.png": "3be53c1340fab65d85ac2d7ea9cfe0aa",
"assets/assets/images/protection/doctor2.png": "17b1ba28e15a0af19999a6fb8acd8386",
"assets/assets/images/Schatten_basic.png": "9ec8b08adb72a00067e650a33838132a",
"assets/assets/images/Schatten_prevention.png": "8d3a2400debba9e7e756610bdb187dcc",
"assets/assets/images/screening/doctor_1.png": "9f366167649249aa63d13164defe1126",
"assets/assets/images/screening/krankenhaus.png": "74c286cc2955b25f49f81d201995ad26",
"assets/assets/images/screening/Lichtlupe.png": "79f2fad2185f9a31902d08ef7664a9cb",
"assets/assets/images/screening/microscope.png": "85a9ecb6c8ffa0c273d83950e1677605",
"assets/assets/images/screening/r%25C3%25BCckenmelanom.png": "c2ce363fd1824c89cfdfaaf334afcb17",
"assets/assets/images/screening/termin.png": "6128f8be6436cfce5ab8abd8a51f2a74",
"assets/assets/images/ueberHautkrebs.png": "ee6336e5137e457be2982065b643b4c9",
"assets/assets/images/wiesch%25C3%25BCtzen.png": "ca96ea56a138d6ddcd628652b4e86f97",
"assets/FontManifest.json": "d19df30ab9d3c31d201e8e4ae604f24e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "9959b69881d6797a57b821cd912db45a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d96e2cb4dbdb1c86d89b4283abccdbda",
"/": "d96e2cb4dbdb1c86d89b4283abccdbda",
"main.dart.js": "ea1670849d3b676e40a99d49fb6a2363",
"manifest.json": "91e72da65f6388b49414b2954c96ebbf",
"version.json": "8e8523cb6db05a785a32c83588b439e7"
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
