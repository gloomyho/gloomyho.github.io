'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9d/80548cf330fdf0df214a40902dee77285ceced": "e9d5f19d67546065b2be43e077fa1337",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/950369731837c50d5975161360c59108eeb384": "5a01f3693639842db2ac2eee51fd7d24",
"assets/AssetManifest.json": "63308850d924b209c3dd12dc3f893695",
"assets/assets/animations/Adobe_XD_export.aep": "2c96503903f682e38a6bde8f78ba2aa1",
"assets/assets/animations/HM_Left_down.json": "83c08fae8b84e06d59c46ce2c01fd5b3",
"assets/assets/animations/HM_Left_Grow.json": "0c8f82d82970a388d43986b0fa9207d8",
"assets/assets/animations/HM_Middle_down.json": "2977e0aa6956c19b76e1d02d5cb57d98",
"assets/assets/animations/HM_Middle_grow.json": "f69a02e074cb2e732b12a3eafc46e1aa",
"assets/assets/animations/HM_Right_down.json": "3d6a92adb46cac555a1ed57b28efab54",
"assets/assets/animations/HM_Right_grow.json": "55b1293356382f1865d6c4740ab24f17",
"assets/assets/animations/Result_highrisk.json": "9d3a23112bb8b425e52e3f5e3315f4aa",
"assets/assets/animations/result_low_risk.json": "89746e895586122d9a175fc28aefc9ba",
"assets/assets/animations/Result_mediumrisk.json": "f86e833434301cb2f053f92677e85d16",
"assets/assets/animations/result_veryhigh.json": "a7e23ca584b1dde53e91ce787f07e996",
"assets/assets/fonts/openSans/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/openSans/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/assets/images/doctor_2.svg": "4f2fb3272b5a5924c7017219df7d095a",
"assets/assets/images/freckel_girl.svg": "573d6ef03db40c44e68eb3c6555eacc3",
"assets/assets/images/haut.doppel.svg": "0960e1267e2233789c565782badc018c",
"assets/assets/images/Hautfleck.svg": "a9046c992e3926a0a104a6a2d9e0f544",
"assets/assets/images/hautprobe_kurz.svg": "4f89a0f7ca8beeaefd7af4e802a446b0",
"assets/assets/images/header/exit.svg": "54a58ade7c8d97abe0be5f38a2f9c449",
"assets/assets/images/header/home.svg": "5bc623d8ed213e361d4169d95111cc8b",
"assets/assets/images/home/infoIcon.svg": "f5aeb393c9725ed5be20565d79ced5a3",
"assets/assets/images/home/logo_deutsche-krebshilfe.svg": "3df7a643467e486c530fdfe6622576e2",
"assets/assets/images/home/logo_hochschule-trier.svg": "107ac86c897cb3a07cb010ea75722d4c",
"assets/assets/images/home/logo_tabiri.svg": "bb756e5f71c7c22797b50fd7de750efa",
"assets/assets/images/home/logo_uni-luebeck.svg": "8abab81fb030113ba1600422d53929c6",
"assets/assets/images/home/protectionIcon.svg": "150cb47e834080de8c854b8f4f64b49f",
"assets/assets/images/home/riskIcon.svg": "cdd4e2308ab7411b10373d742b824d6b",
"assets/assets/images/information/hautprobe_lang.svg": "10902d4f0fc69ca26295c31d63545f90",
"assets/assets/images/krankenhaus.svg": "5fd3b72cc77bdaf4894362f8cdde3d6a",
"assets/assets/images/microscope.svg": "49ae435c4acf3937592f0ea89fc2a3f5",
"assets/assets/images/protection/doctor.svg": "ad155163435e198c6b09f58d7ccee094",
"assets/assets/images/r%25C3%25BCckenmelanom.svg": "19ae1d579010adebe06c749b7d329b92",
"assets/assets/images/Sonnencreme.svg": "57846d4b1e89da55790c2b9914a5eff9",
"assets/FontManifest.json": "e3b040e2818e271105eba0ad979bd7f6",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "ee2552c8f40a262dffc0f0f0e8599376",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "3a394083077f0985e95a4d629fe4f2e2",
"/": "3a394083077f0985e95a4d629fe4f2e2",
"main.dart.js": "58d3c2d1ac55e60105705209e7b1b11a",
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
