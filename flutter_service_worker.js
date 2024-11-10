'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8317bb03bcf5526128b7cbdf6692b6e8",
"assets/AssetManifest.bin.json": "ce90202d179dae9b1d80fcaafe4f73d6",
"assets/AssetManifest.json": "6a271d14bcec467fe1ec7e21c0e1a75a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "29a7704469b6dc8f6298a154c9bb8623",
"assets/images/bookLogos/betmgmlogo.png": "ca7c844d49639ede49e3e1047f7a1ed9",
"assets/images/bookLogos/betriverslogo.png": "86dd12e47f15d40dbc6a0a91ba7b19a7",
"assets/images/bookLogos/caesarslogo.png": "a68488b5c8e0d4bcd020c6a825599388",
"assets/images/bookLogos/draftkingslogo.png": "297e3c9e8922fe25c316d93163c1a8c9",
"assets/images/bookLogos/espnbetlogo.png": "ba0706d607190185f72e8066f4776cd8",
"assets/images/bookLogos/fanduellogo.png": "eef1d8b2bf40a59395bf1f56d170a88c",
"assets/images/bookLogos/hardrockbetlogo.png": "6f1c0c56169f77f71863bc10ded5dcab",
"assets/images/bookLogos/noImageFound.png": "7c2534d3bbb3d166fd0d6a6a5e1ed051",
"assets/images/bookLogos/pointsbetlogo.png": "424c14d821b360fd1f22c865622ceb7f",
"assets/images/conferences/acc.png": "41a96e69418664983a1b76b6a70fd98e",
"assets/images/conferences/american.png": "3173f3a829ea9238b05d7de5f14fb2b0",
"assets/images/conferences/big12.png": "c8bbcb84c24bd15750bb44821c447bdd",
"assets/images/conferences/bigten.png": "074ee4c443163b9cd5af21102c6d9cc3",
"assets/images/conferences/midac.png": "952f8ea84c6c4e1f0359a95ec2634427",
"assets/images/conferences/mountainwest.png": "da470e4bbcab94e6de2f8355b6828f97",
"assets/images/conferences/pac12.png": "1022bc37966d2fdab60bbb301d24e233",
"assets/images/conferences/sec.png": "9201cc026d59b2bf0f4df551c942b1f9",
"assets/images/conferences/sunbelt.png": "67e9536ab4cee8359542b61d824287e2",
"assets/images/icons/Bicon.png": "5fa54749f7cc5dc4a38c80b03492730a",
"assets/images/icons/BumpIcon.png": "ddd92473f02f4b154f7e50466d14f077",
"assets/images/icons/BumpIconLarge.png": "2be2281a22a24ccb332ca717820dee61",
"assets/images/leagues/MLB.png": "42c7e5d6bf4c90c19337fa412f508279",
"assets/images/leagues/NBA.png": "e69a6812dc00537ac204b0e47e507f01",
"assets/images/leagues/NFL.png": "4dd492509d90bf82dc601fe9ac460ea6",
"assets/images/leagues/NHL.png": "cbc956403de488007b65a234d5c2f90e",
"assets/images/NewLogos/android-chrome-192x192.png": "0cca237fe8475873b7e16a3617039059",
"assets/images/NewLogos/android-chrome-512x512.png": "9baf813ecd077f6e06cc5ea1c5555ed8",
"assets/images/NewLogos/apple-touch-icon.png": "c65be562a8350ed88baed52dce57cffa",
"assets/images/NewLogos/browserconfig.xml": "68c9044fa4a08749efb85bb2a4edaede",
"assets/images/NewLogos/Bump_transparent.png": "35dc64efd02bca08bf16108ffa3c01c2",
"assets/images/NewLogos/favicon-16x16.png": "0dc791d001a33fd01d4d758a7dce1ac1",
"assets/images/NewLogos/favicon-32x32.png": "600c1421c5beaea90d6408738ee7ef87",
"assets/images/NewLogos/favicon.ico": "0a0225f155d3bc5454d11dcd2c217341",
"assets/images/NewLogos/mstile-150x150.png": "57ae02aa5e8cded4c27d258ce7bd63b3",
"assets/images/NewLogos/safari-pinned-tab.svg": "839ddb0b08156650650daf39cf18c7af",
"assets/images/NewLogos/site.webmanifest": "22a36b7df2717d75493d9174d28391be",
"assets/images/Profile_Avatar/White_B.png": "add9cec9d329c1a2fec957d4207d6572",
"assets/json/FalconsTester.json": "11d1270b4eb872ba5fd851de6dd3be26",
"assets/json/newTileTesting.json": "40eb85cafe9979862a03e651e86361b2",
"assets/json/oldtest.json": "d58bde979f2bdbec09eac1e67ee23011",
"assets/json/spoof.json": "e78bbb5107a24e48186d2b877fdc0936",
"assets/json/SS.json": "e4ffab92f1c4d37f0b92b1a7f44c01a5",
"assets/json/test.json": "dc7f855b59dfa85536bf780123725e3d",
"assets/NOTICES": "83e9835184c715d1bf2133e673bbf8b0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "7edad357c945d58533c5a5a650feeb71",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "b52a8a834a104f48031f02683505baa9",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "8f9c8bcec347628302acc514ed88e1aa",
"icons/Icon-192.png": "133f93cdb6a31d440108421f06e64441",
"icons/Icon-512.png": "2c870205b306d7cbf55ae01ca7938d23",
"icons/Icon-maskable-192.png": "133f93cdb6a31d440108421f06e64441",
"icons/Icon-maskable-512.png": "2c870205b306d7cbf55ae01ca7938d23",
"index.html": "2b4d66d07842fa9858dcc3959c2c2f7d",
"/": "2b4d66d07842fa9858dcc3959c2c2f7d",
"main.dart.js": "b3be9051a5419c162f203661ec14f925",
"manifest.json": "b5c21a7b72ea200b004fd47ba4979e38",
"splash/img/dark-1x.png": "f4ef53c509a56328370301a2b18407ca",
"splash/img/dark-2x.png": "3696ef25c40e9293946dd0955a087339",
"splash/img/dark-3x.png": "1acdf8c7699e2460b16e6f2e3ff1b67a",
"splash/img/dark-4x.png": "2c870205b306d7cbf55ae01ca7938d23",
"splash/img/light-1x.png": "f4ef53c509a56328370301a2b18407ca",
"splash/img/light-2x.png": "3696ef25c40e9293946dd0955a087339",
"splash/img/light-3x.png": "1acdf8c7699e2460b16e6f2e3ff1b67a",
"splash/img/light-4x.png": "2c870205b306d7cbf55ae01ca7938d23",
"version.json": "788fab5c8a1d15a0a3f0cdef68d22d6c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
