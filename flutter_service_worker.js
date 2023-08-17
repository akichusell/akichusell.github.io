'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "888453204c86bd62d095945622e49f90",
"index.html": "033533f37587fb8882fb44c7b71cbcb7",
"/": "033533f37587fb8882fb44c7b71cbcb7",
"main.dart.js": "4c533097931b03ae4746b09a3f938871",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e8aa5b250a89ec37090b9a11b7c8acc0",
".git/AUTO_MERGE": "75a8a6c5344d2c719e8c471a98a3ac19",
".git/config": "0aedab54f7ad07744ed9ebdf0ecdb0b7",
".git/objects/0d/a0481af5398f9b63f4b744d704370bf1b68010": "ba5f71085e4f5376d094674bbb38c20b",
".git/objects/57/4a5493848abc59d8490c73bde479591fa33ba7": "748da43d26d46950b84faebfae1bfaa8",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/bf6120d91dc58a570e352a70aaccd512bf1b56": "e407dfc43645824f9bfd1cc26b7e26f8",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/dbf48b530f1c4e3e78f278422ed618081fd1d2": "b827384486a2720cb0ee1a44e5e6f4ca",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/e2/31e87f2c779a5bfd45bf2b7be2d2f202112d7d": "91c4f8246c58a0b1edfaecdfc7ef5c61",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/9cc488f4ae6cafb75f9f03efef50b116ea4705": "9e1b8e20de36b5673cc9bfff1efcf332",
".git/objects/c8/5a7ecbee4a2106331bfa9db074ba7833c027ac": "fb30b49326fbbcd64f5e830c0a6d54a5",
".git/objects/c8/16af30e4be6dba6a98966e28978717c9b898f7": "1aadb6b957ad74d572a5a0fb9bdfbcc3",
".git/objects/42/a8667dff007091b25011abfb272793cc859525": "b2eb8dc597772abd8cce866c08574856",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/12e6c798ad1228a3b56f6df63b684045ccb74b": "9aa5977575d55867a487147624c164d3",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/5b/659c42946968af068cad7cb11e800d150b06a4": "d6f22bd52ffe4337bd21fe99efbbb26a",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/01/1a4f88e7bd677313acb47996a0fc12f412607a": "c716e68feacfe88f57839312d9d291d7",
".git/objects/06/50ea49f1450721c151c2bda4a73d792b36c95d": "87dcf1536cc2b0d537cdc989d5b5cd7b",
".git/objects/6c/0f4743b490941b8d819d87a3d352325f90dc2d": "f7f268fcbe4e192d5c9ab3f1cbd46a0b",
".git/objects/6c/d52f66fcc349c1a353b41337dbd13053422b9d": "73536a9a0ac9936bb96db5a8d072be74",
".git/objects/99/d8a92c9bc73daef7f12544578fc576397ea8fc": "a17ccee0d94e1410bcaa1c578ab3320c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/dc/2072867a9a6eb42d2e96537f61ea1a0b796291": "55b50237b104fc8546fe68bdbb418851",
".git/objects/dc/83794028329b42cc7326eac5f66519729fa84c": "b42306d59de87fae4901ef093d3b740b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/e6d3de936e762b37e68941b0b082c0da8c8c29": "3e8ac34de290ec541132eb1aaeeb4bcd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c5/114d0ed3956cae37a28541795b769059886453": "b45b12d4361888bad6e4813207d0823b",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/f8/1de685c32de36b4e92ed0f584af743c59213fb": "42727a62026c8a5e9229936d85a2e76b",
".git/objects/2c/c6799f6cdf9ba15ae56a5277935acfb342a64f": "a78cb7095938176c05933ef543fc4d5e",
".git/objects/41/e9d5dd9f8c949ab3baf5f7bb51985a82f80378": "7c8657106218709cda55748e1c41c08e",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/84/b02c73c3eb3968a678037a1ee70f3c304ed87c": "c7114b674e23803ba3830609d70a052e",
".git/objects/84/50e9594dae3c42a9a957565080b254e3a45aae": "6d0b9ed58b2a3d4a766c5373cd527f8c",
".git/objects/24/ed4cad9df67aa0f9bac78262e8e5e5062decc8": "586b0e769497f78e11cad62ee7dfa204",
".git/objects/15/3d8127ad35171f027dc5f2a4ae9bbd1c7a34d0": "02d276c488ad660a0597323ab3ba2614",
".git/objects/85/e49d252142784fe19d9d17912ba948a7b48398": "ca7157659931a05e1a9e09cf775a23e5",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/82/085a01ffda6ab6a235866bd4e6dde4d54ba2cd": "310e0ac24ac48c1a9ddd3a15263af8d1",
".git/objects/82/a7834dd1c2bb3b09f66e9506fbc38b0c977db8": "ac11a5788dab21a03a3dc448b00ccdf7",
".git/objects/13/deef330704343ecb12b7aaeb3c6062512b0e9c": "698767e9149c54e5164b80b5a60e3c81",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/fork-settings": "6a2204787d2e4ae9e702286d3ace2ae1",
".git/logs/HEAD": "f052471ec38477cecf03651a0a6a4b5b",
".git/logs/refs/heads/main": "f052471ec38477cecf03651a0a6a4b5b",
".git/logs/refs/remotes/origin/main": "00172ec6972d4232f5331b0dfda2cdb0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "9bb8497a24279fca46e41c2233995379",
".git/refs/remotes/origin/main": "9bb8497a24279fca46e41c2233995379",
".git/index": "b3859b9697e42d2fab75469c4654d09a",
".git/COMMIT_EDITMSG": "5137fb09fd8ddb7fb6ce8551a0e915f2",
".git/FETCH_HEAD": "3f6a739b9b73a2f046d99f8ee30b8644",
"assets/AssetManifest.json": "1320cf0175af4f8027ccae4cdf8d0161",
"assets/NOTICES": "90138182d19ff6e38582ff344c8da138",
"assets/FontManifest.json": "ba125a5fef59ea52b201685c0dbfb9db",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "ccd19ee898fbd54d0f76178eb852c621",
"assets/fonts/MaterialIcons-Regular.otf": "1c2ed013ea065cbadfe4d7028a0b223a",
"assets/assets/image/arrowonly_left.svg": "5da5f5f1e508175f6dd0e5cb6fb15759",
"assets/assets/image/arrowonly_right.svg": "a3c9cf7a5438397c6fb8b4684e889f70",
"assets/assets/image/btn_common_download_play_only_mark.svg": "b08456f23b07fbd5044ce4f7f962e16e",
"assets/assets/image/ic_common_shelter.svg": "5fb276c1e8c74b4fba22a42ca75dc1d3",
"assets/assets/WW9vbkdvdGhpY1Bybzc2MC50dGY=": "3f1b5bc3ab72df556d2bc23369516114",
"assets/assets/WW9vbkdvdGhpY1Bybzc0MC50dGY=": "d4cc191c162219095fa87bcf0b6a50c3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
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
