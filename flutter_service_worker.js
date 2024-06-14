'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f85dfe6def99fef0ff819be5e12ffb49",
"assets/AssetManifest.bin.json": "a61c90e0706d43c53eea684c6e65720d",
"assets/AssetManifest.json": "c4fb23af25019742ce918ace36692865",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f6912d2eca5ac2685282b41bf2552a28",
"assets/images/bookLogos/betmgmlogo.png": "ca7c844d49639ede49e3e1047f7a1ed9",
"assets/images/bookLogos/betonlinelogo.png": "4c4f6627bb9964b4c12617e6669a9a88",
"assets/images/bookLogos/betparxlogo.png": "5f8977d1ae080c4aca4c1edb2d5830aa",
"assets/images/bookLogos/betriverslogo.png": "eec3b9322a2901b487a4b21303e031a8",
"assets/images/bookLogos/betuslogo.png": "c16b5fdc46e391aecf3b8b60473dbe10",
"assets/images/bookLogos/bovadalogo.png": "5fae276d7d39e5256ed605ddcecb1beb",
"assets/images/bookLogos/ceasarslogo.jpg": "dc2187d352c1036c901a79cfcc10cd72",
"assets/images/bookLogos/draftkingslogo.png": "297e3c9e8922fe25c316d93163c1a8c9",
"assets/images/bookLogos/espnbetlogo.png": "ba0706d607190185f72e8066f4776cd8",
"assets/images/bookLogos/fanduellogo.png": "eef1d8b2bf40a59395bf1f56d170a88c",
"assets/images/bookLogos/flifflogo.png": "5ce217c4a21dcf249fbed47e1b393491",
"assets/images/bookLogos/hardrockbetlogo.png": "6f1c0c56169f77f71863bc10ded5dcab",
"assets/images/bookLogos/lowviglogo.png": "c34a9cd838642bd5487917e271e85fd8",
"assets/images/bookLogos/mybookielogo.png": "070ab511a6e42b5fedb23fad9bbb08a1",
"assets/images/bookLogos/pointsbetlogo.png": "424c14d821b360fd1f22c865622ceb7f",
"assets/images/bookLogos/sibooklogo.jpg": "932538b013eab60bf82890918ae7cfb5",
"assets/images/bookLogos/superbooklogo.png": "321dbf892c30b36cdeb97e86505196fe",
"assets/images/bookLogos/tipicologo.jpg": "d45640f23083622baf264a074f146ad5",
"assets/images/bookLogos/unibetlogo.png": "295dae7743a8f3f29634ce1df856df6f",
"assets/images/bookLogos/windcreeklogo.png": "0de1ace0542228bcefbe8a5f9175c935",
"assets/images/bookLogos/wynnbetlogo.png": "e53dec9994f4ab0080fe0e81838c27e6",
"assets/images/conferences/acc.png": "41a96e69418664983a1b76b6a70fd98e",
"assets/images/conferences/american.png": "3173f3a829ea9238b05d7de5f14fb2b0",
"assets/images/conferences/big12.png": "c8bbcb84c24bd15750bb44821c447bdd",
"assets/images/conferences/bigten.png": "074ee4c443163b9cd5af21102c6d9cc3",
"assets/images/conferences/midac.png": "952f8ea84c6c4e1f0359a95ec2634427",
"assets/images/conferences/mountainwest.png": "da470e4bbcab94e6de2f8355b6828f97",
"assets/images/conferences/pac12.png": "1022bc37966d2fdab60bbb301d24e233",
"assets/images/conferences/sec.png": "9201cc026d59b2bf0f4df551c942b1f9",
"assets/images/conferences/sunbelt.png": "67e9536ab4cee8359542b61d824287e2",
"assets/images/CSBLogo(temp).JPG": "c276900c13b0394a33f2388118096578",
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
"assets/images/NewLogos/browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"assets/images/NewLogos/Bump_transparent.png": "35dc64efd02bca08bf16108ffa3c01c2",
"assets/images/NewLogos/favicon-16x16.png": "0dc791d001a33fd01d4d758a7dce1ac1",
"assets/images/NewLogos/favicon-32x32.png": "600c1421c5beaea90d6408738ee7ef87",
"assets/images/NewLogos/favicon.ico": "0a0225f155d3bc5454d11dcd2c217341",
"assets/images/NewLogos/mstile-150x150.png": "57ae02aa5e8cded4c27d258ce7bd63b3",
"assets/images/NewLogos/safari-pinned-tab.svg": "fca1f920f402f00826430b48f3391eab",
"assets/images/NewLogos/site.webmanifest": "b9aa277fcfc34c31db6c7a7ea3469b8c",
"assets/images/noImageFound.png": "7c2534d3bbb3d166fd0d6a6a5e1ed051",
"assets/images/profilePics/White_B.png": "add9cec9d329c1a2fec957d4207d6572",
"assets/json/college.json": "f8ef752536b0eeb3235887a4e6b82840",
"assets/json/mlbTesting.json": "d64751a63fc229618ca67e8f23dd04eb",
"assets/json/nbaTesting.json": "24345f9af1179aff24d2b4bb644cb890",
"assets/json/ncaaAccTesting.json": "22bd333afad1f0d5aae6f594c8221cbf",
"assets/json/nflTesting.json": "4fe37ca7a313ed4ba74100fa6430f9b0",
"assets/json/nhlTesting.json": "d82b3dbabc60fd5b62042acc14eaf3ee",
"assets/json/oddsTesting.json": "d80c991cbd3934152db78d208340e969",
"assets/json/stallTesting.json": "e888c586fce15d4f20cfed3fe2de96b3",
"assets/json/test.json": "bc6da19c42155f84657231b6277c2a26",
"assets/json/testTime.json": "3f5591dbbe6165d122fa59167ee2b421",
"assets/NOTICES": "3c24dc5baa62316c06b7487809cb2dc3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "82a01d6678bef1afc3d65aae2c25bd0e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "90e9e3dd3c10960b87438d014d5b6e23",
"favicon.png": "acc5bd785e1c89dc8e4a9366226ea67f",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "abb8ddd789ae16762665d3c3d326e93f",
"icons/Icon-512.png": "ba39290653280bc7b970281e0a77d6f4",
"icons/Icon-maskable-192.png": "abb8ddd789ae16762665d3c3d326e93f",
"icons/Icon-maskable-512.png": "ba39290653280bc7b970281e0a77d6f4",
"index.html": "80b23aec0c6104da5f6f5cbf27d4a5b5",
"/": "80b23aec0c6104da5f6f5cbf27d4a5b5",
"main.dart.js": "7319fc7df8d827d25df4202174a4a8ab",
"manifest.json": "fe8c0cc0066802093d4e62abc5e0a082",
"splash/img/dark-1x.png": "a96d36d783e0d2394c5e5bb4f5a19e2a",
"splash/img/dark-2x.png": "dbb8f4bfc4ae052002a1078f31ac07e5",
"splash/img/dark-3x.png": "e46b53b6002ea0c14191d8ca7af4d4ad",
"splash/img/dark-4x.png": "39c3f0ab9e7dbcaf75b9a8ebcc4fec58",
"splash/img/light-1x.png": "a96d36d783e0d2394c5e5bb4f5a19e2a",
"splash/img/light-2x.png": "dbb8f4bfc4ae052002a1078f31ac07e5",
"splash/img/light-3x.png": "e46b53b6002ea0c14191d8ca7af4d4ad",
"splash/img/light-4x.png": "39c3f0ab9e7dbcaf75b9a8ebcc4fec58",
"version.json": "8c7bd60a0b1c61f36279283babac71ca"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
