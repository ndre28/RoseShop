'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bbf8fe4bb68cc7383cdd93039a2a5ba7",
"assets/AssetManifest.json": "268c6413f8404449a40a857e62cb2913",
"assets/assets/icons/angle-left.svg": "a881ffe2cdd1b443b4fef82f8e4cf323",
"assets/assets/icons/cart-fill.svg": "57fae4ff8d6216b7136cee8c950c6994",
"assets/assets/icons/cart-outlined.svg": "fc964a135cc22e71b29a3f9eeb1fec7f",
"assets/assets/icons/check-circle.svg": "48781ed366ade143e3063172238159a3",
"assets/assets/icons/circle-null.svg": "e08c24582c165a034c3f4ed49a742da7",
"assets/assets/icons/circle-user.svg": "a732894525b018756e25d2e6b62b52d5",
"assets/assets/icons/Email%25201.svg": "bd349ab04637dde2202cf6309e43390e",
"assets/assets/icons/Email.svg": "fb63455cec01f39e749f4fc137c19331",
"assets/assets/icons/envelopes.svg": "617d3e3109ebef8f3ec0272fcefc316f",
"assets/assets/icons/Eye%2520Off.svg": "4a3db736e54b663c4b9f9e20a85ce73c",
"assets/assets/icons/Eye.svg": "fa6f5fba14e634232a43ee0a3e4cd16f",
"assets/assets/icons/facebook.svg": "f70ee8651ac8bc0ff12268c0bb555d11",
"assets/assets/icons/filter-outlined.svg": "83ae298ed914397164f4e03f71e94fd5",
"assets/assets/icons/google.svg": "aad5f33a68ea920929d322e774d3b409",
"assets/assets/icons/heart-fill.svg": "21761daecd599d19e8af9d81c18fc9ef",
"assets/assets/icons/heart-outlined.svg": "a473329680cf2be5c19a4722b6d76730",
"assets/assets/icons/home-fill.svg": "8b731bfe41d659794fee328db489aee0",
"assets/assets/icons/home-outlined.svg": "3bfca529c8c66442930d5a755e3e3f6a",
"assets/assets/icons/Lock.svg": "c0a914c7bafa318d152db05740bc6b2d",
"assets/assets/icons/notify-fill.svg": "6897fed9c469b9e4da4f7ddf6a80af98",
"assets/assets/icons/notify-outlined.svg": "220d307467180629feecfde0f7368514",
"assets/assets/icons/refresh.svg": "765bb05559a0d9bb6931e81b1efa9bd5",
"assets/assets/icons/search.svg": "2501f01c2cc13d2aa8eb3cf9b9b67ea3",
"assets/assets/icons/user-lock.svg": "e97535641480db1a991d03ebdb839b62",
"assets/assets/images/forgot.svg": "d5ef553b391b8ec7b436553d910a9e57",
"assets/assets/images/img-girl-1.jpg": "c8aa81082978c4c670da381293d7cdf5",
"assets/assets/images/img-girl-2.jpg": "e9ba5269a8f3efa1967b76439fe14e27",
"assets/assets/images/img-men-1.jpg": "0da984d94748436a331abe74f5dcba1a",
"assets/assets/images/logo-black.png": "dff0942922e6cf8d3e56f2487444f209",
"assets/assets/images/logo-white.png": "4f652cf2bce8745aa527313dc6b56819",
"assets/assets/images/logo-yellow.png": "050daaa69d908c368c6c05d8b513effe",
"assets/assets/images/verify.svg": "d7a80025bec35629467cf33eb7ae21f1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "774a2c79d9109e00a9655c6126ed5df8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c2f655e212f188a7b2e6aa8a9755be50",
"/": "c2f655e212f188a7b2e6aa8a9755be50",
"main.dart.js": "76fcb53bb2ce421e5a2beb35f45f8c79",
"manifest.json": "2f556b2b53744ef1f45cebfe136d76bd",
"version.json": "74304678c8267b7bea98a6dd43779a8f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
