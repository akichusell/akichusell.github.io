'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMITMESSAGE": "3ac340832f29c11538fbe2d6f75e8bcc",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "547d2e06b5a866b7c693cc72ae68ffe8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "21a95c192a018b2a711a3da92952399c",
".git/fork-settings": "f07f8cfdbfbfddbbc0f7294eac8443d7",
".git/HEAD": "5da174788b6bdea7605a1d0243e7b086",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f76aa41addf773e365a397ec1df98325",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ad363f4f5eb1bdd0cdc45a884c7a9270",
".git/logs/refs/heads/biz_rcs_generator": "35cf02ff90e865ad3ed5ee31731f765e",
".git/logs/refs/heads/main": "5e33c211385501e789a813d63cdb5603",
".git/logs/refs/remotes/origin/biz_rcs_generator": "555eb7e0cfa434e46f537825079e4687",
".git/logs/refs/remotes/origin/HEAD": "5e33c211385501e789a813d63cdb5603",
".git/objects/05/f64fe9cb284ce8e33c2cc3671b04966fbfce6c": "a8f4c09367ec3ba56cf1bb695ed810c0",
".git/objects/0c/52ffa819800fb4ff0dbd9f937be7cd9b2bd8f9": "2570ce61d5e71863598216f831b23a81",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/14/0102df05c074fdd7b2980b1da644ea46e78a7f": "f4f830f7686eb163027eb5218ae4dc10",
".git/objects/14/ab477abddb95032c5eb75c13b1f4f4e68c6615": "51af623997d817b049dd0e721d1bf634",
".git/objects/18/e02f088c127a941307da32b25b9bf80d830417": "0273890d5dd1d5b25d418eb1a8d2749c",
".git/objects/1c/6fad15a5808529bd7274585b1c871b3e930c3d": "2a36ce923b97abe1bc200517800b19a5",
".git/objects/27/4b6927f02255cad3f703bb233a921a638d8811": "04fe4b4f0ef8371fbd1e74caf8d0da61",
".git/objects/29/3b28fd362224152718fb85b6956ae1cc924132": "be4ef9fe798c833846e451be5b3c99a4",
".git/objects/31/2e05bf720d1055ccae4c7124f3c3b416a5d4f8": "b60c4a29de9150bc1e4f97acad911bc9",
".git/objects/35/6147403edb5b3abd61a1ca449fa31c26e6ddd6": "e197bdb1ba3f2789ee8d6f0060cc6319",
".git/objects/3b/af3082297b7eb59ceefc35645a4c7511573c89": "a30b3e11514226aef452d8eecedd8746",
".git/objects/3b/fb10d471fb043d49a9f0a516c244874b27b9e7": "951fd3781f8b02228c7f02479109561b",
".git/objects/3e/14297ca0f232c798359b97a6521e854ef6f9a1": "434851d5a74800b5c92e13adbcb85e72",
".git/objects/43/d900fc8249e6b3ed093beabea5fd52fae38e04": "3d2713c46848db543da1a94359b7412b",
".git/objects/44/f3380d19bca0c53631efac2a8b316fc4d00eb0": "0f7c486ef28cd2d0fb022b18027759b2",
".git/objects/47/27e94cc5035fae858869dcd8ef12ac8798cefa": "7e741ed985f434b253ac8930903f0ba3",
".git/objects/47/797d4f9bb3aa43bc81ccb7e9fbc43c90a56be0": "b39abeef18b3dc4224171dcdf215eda8",
".git/objects/4d/181b16b3c446ee78bb09abf8482a18652ea104": "8d23b0c0d4e42977f090539a4cc8a040",
".git/objects/53/efdea470b999bfee22ac1fc0e31627e75ca6df": "432f44b1d368906b4133fe639676592b",
".git/objects/5a/32b9551ae40dac5a9d3d9c42d8aeab8f49f9ab": "52e9f07f0c8f18ee041e54630c915c85",
".git/objects/5a/f3fd99a252d4da4d6e6bc503110dfc2d6bf92a": "4d0e8c23d0135f8f8c77d19a38b22b2e",
".git/objects/5c/99187d4551c4adfd78bad1275b524f60347352": "b62efd7626a172e1c7906f7f608122bd",
".git/objects/5d/dac33cf8d0d8fb2567cae17a9c936677e3f69b": "e5382e55524702ed5e50ef5dd5c9d239",
".git/objects/65/70d6172dc07b6bad7410b66538b148b6b6cab3": "4e01cc439008f4631c7d060d7f5ea61a",
".git/objects/6f/ae8eecc3da5422ff58b61a0fcdaf693d56d5a7": "9e847a478407be460acaee1362238ef8",
".git/objects/6f/bafcebe4a9f96ec66fb9a48b3453d310dea2a1": "db3ff34adae9b82077ba784a43dd63db",
".git/objects/70/601fc686016eb6e40e3f9f46979e6afec85676": "f3f820f2696b3f53282530d629fb21d2",
".git/objects/76/4da2f2cb10d6c7fca35b36a73d7aa5ff8dcf5a": "067d1b3d716ebd1f9f74813023585c63",
".git/objects/78/22b52208f1ff00ed1a654541cb7db5f07b844f": "a35d024f6537dea605cd670183ca4940",
".git/objects/78/f28d5233b442e66fa287e701a59c8e56d7947d": "ee73ed76debf810e4531958ab7a7dd17",
".git/objects/7a/c972006fc947ac05353af2bc8a5c556572a9a6": "41e3011ea7ca9133f3273451411de2a8",
".git/objects/7d/f63568ddf9d54911334ccb6dda261d26f5f3d2": "9de575aed6c27cacf4abdf7c51bc8d7a",
".git/objects/81/0b4053747652359d52bec7ba7a86aae4029abd": "1b0757f848622f7b8368ae1c04498543",
".git/objects/83/18ca982425c4c61eade0a1bf822e134be76c7f": "d328f7f9c0df1d2fe2f8e6ee47a59c7f",
".git/objects/83/ef4528b5f8c5bb47f05fcd5ac3801b8def2232": "98c225c7b5b0626ce2f28122ee87ed50",
".git/objects/84/119557302c6ae800c5debdd1287cbeae767f76": "a005040a621ef50b65fb1b5e3f613e7c",
".git/objects/87/d18adc874a6786c3f5d4623980a4230254adb8": "ee3883cd920e4137f294e04a75e3caab",
".git/objects/88/9cb2c9cd0e4062f2f391adc8cba8d9c417d04b": "04e03442fc71b0ee37fb151a13697857",
".git/objects/90/15389f1dd769ecd5eabdaf0ad8932e44ffc2a3": "9d28bc512dcf836aa942b7b6eed017ba",
".git/objects/9d/10e26a095d01801f4732f28fa30247414a842a": "aa831b4d5de6933fffe2f5dbd906b441",
".git/objects/9d/4dea6594d3c4ba321af4c7caffa3d3054c5995": "b1921480a7437f39ec1b69bb53171ed2",
".git/objects/a0/f8896f378b6b7a780982961ab927de5d66956c": "3a8fba6708666347980b24966225a5be",
".git/objects/a4/ddcb918b14dff789e22c0f71db369648ee7202": "d15fc9ce054c2f31222554dc285d82e8",
".git/objects/a5/7f659e90681b56d9f5aefb9d4fa26e4bfde11d": "a4e5fe0661e3b29616d8df8743ea51a1",
".git/objects/a6/79cd0853cc7a8b1bb17ced69145fb7ac99618a": "ff3d91e48dd1f4ad77f204db91f46445",
".git/objects/a8/335e3fbfa9561cf4da783a8b4a54c7f75269b1": "5ec08a5af7af51dcfcecf1757b701073",
".git/objects/ab/3b98564cfcdcfcc7c4cf7438b428c6b4a2363a": "df5292504e3270d9514ef0722f37394a",
".git/objects/ab/bf733d3b81cd220adb907909f90d27e1c22aa3": "88183011ee623a204be5be22b9bdbf12",
".git/objects/ab/d91cb5bb87faca36862239ce204222d88084b1": "2412acd3fdfe11979d393d480b7b5e0a",
".git/objects/ac/cd35d4259f4c9a092865f9d38621cb191f1a25": "aaa1d5baac98047c04c462e135b97445",
".git/objects/af/32194fddc82d176cef60be58b7c7e7f382eb9c": "fd9680aa7e02ccccde147ccccd6b99f3",
".git/objects/b1/61b20dbd45ca18c1ece611b3564020ef74962e": "4ae5b93a0d400db59e1436fd9dd305d4",
".git/objects/ba/778b9c3237ca2f931284ae0b7e906986ac4ac4": "754d823dd543a67628f7ef25befb4b40",
".git/objects/bb/85fe5c0b1dbae5fe4132a6ea22cc4c908eb0d5": "a41a37bf8e0089f9cb955809e9999915",
".git/objects/c5/a241432b8273f3e47190bd85ea10f1682590be": "a51d3f928614fd4c55d0a89b557ced67",
".git/objects/cb/8088067a6c44f504d6da0dbff2bd828381decf": "2dcfef3db75af56bcd0af8d34621de83",
".git/objects/cc/1d10869e9221e2ece35c33f14e54155392e0a8": "80e40c155c34d17cb6cfe98b6098db17",
".git/objects/cf/7bffd3ec880c12a5e135935ad532d289458b21": "618482f2717e719176530eaa8c99f05e",
".git/objects/d0/0ec29c39436ae09667e6c8156855a168938483": "868b848598e308b8ba47a58703c3516a",
".git/objects/d3/b51a60432e85a7e77e48f9ec6adefdc753e6d3": "d6a4e1bcfb7732a0748c1145577e8f7c",
".git/objects/d9/c3514c9c94ad0923532643b2bb07e6ee269343": "02397b72bb6c6aa211830357521da310",
".git/objects/e1/8c14d78019bc387c132bb9631119bbd109ea47": "c77589a9a6e81fc1aec03287e12f0bda",
".git/objects/e8/56a2f28c87212b042c6825bcfa39999ac6c9ad": "9e4aca87885056f85012bd10fe7442bc",
".git/objects/ec/df4cc3bba8c1d325152309a3ef36fcee6d71b6": "aa07740ac0a316d543941f609ecb90ab",
".git/objects/fa/88eecc5fad3e8a274e3d8181bf0aa4df5ea093": "fd37f44cf7e8e772ed1b287799ace8de",
".git/objects/pack/pack-85497e8ae1ca2240b467b935366c7c18c8b3b346.idx": "d727bf37e73af06cd456381f957346ee",
".git/objects/pack/pack-85497e8ae1ca2240b467b935366c7c18c8b3b346.pack": "66002fda07e7a37b81fcbe032c5a50a4",
".git/ORIG_HEAD": "68dfc492e427279f8f527efd5122e964",
".git/packed-refs": "db5766e955676bdabce86e6cb7d30c19",
".git/refs/heads/biz_rcs_generator": "68dfc492e427279f8f527efd5122e964",
".git/refs/heads/main": "e9c1928454329692eedb49ddf19c26bc",
".git/refs/remotes/origin/biz_rcs_generator": "68dfc492e427279f8f527efd5122e964",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"assets/AssetManifest.bin": "946b409be9d1942f83219fea0cfdd1c6",
"assets/AssetManifest.json": "b2c6322f332e6d266c01fe225e09d8e2",
"assets/assets/image/arrowonly_left.svg": "923044bf6212c65ecd82b1fb833a366f",
"assets/assets/image/arrowonly_left_logo.svg": "f79b695b10d3409357a36a182efd5673",
"assets/assets/image/arrowonly_right.svg": "0bd69509ba6a56031caad8573bbe23cc",
"assets/assets/image/arrowonly_right_logo.svg": "9157c897aa0705a03bc0d3f1175866b8",
"assets/assets/image/btn_common_download_play_only_mark.svg": "6bc6519e6186371b57a36bfda3ec4476",
"assets/assets/image/error.svg": "cb2818b6d864333ec28efe0063b316a3",
"assets/assets/image/ic_common_shelter.svg": "42bd45f6be458a62e30aa91c5f3d50b4",
"assets/assets/image/left_selected.svg": "aaed351281fb40bfccb0b2d3441f9ea8",
"assets/assets/image/left_unselected.svg": "8e97df555532233a9c0cfdc28f8eedb9",
"assets/assets/image/right_selected.svg": "96b6b2e554c2cda42ef8ca9e9dffb9e1",
"assets/assets/image/right_unselected.svg": "d5f0f129f6166108945ed1429455abdd",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "d42d7723c11ab669cd7e62fe9395b3a4",
"assets/NOTICES": "5fdd23896492bc3df9afdf319863dd85",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "86fac5a7e6ecb4d87ab529bf6d7af41a",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"index.html": "284687e89f8721f9830c03211bd3e984",
"/": "284687e89f8721f9830c03211bd3e984",
"main.dart.js": "98e831716fbe625cf879ec3bb91f684b",
"manifest.json": "b14aa740171cc625da7fc740d4125bcb",
"messagebase_json/messagebase1.json": "b18b3a86c1ba427c585d9090512fc08c",
"messagebase_json/messagebase2.json": "40b62148b751a0b0e925ee993d74e218",
"messagebase_json/messagebase3.json": "226ef52a4c05922d4a4eeaa7426539c3",
"messagebase_json/messagebase4.json": "51d15b39e026ad03072022ced17222aa",
"messagebase_json/messagebase5.json": "45aa18edbddec5434161053593194df7",
"messagebase_json/messagebase6.json": "978755bc36dbc1cef09e7d81b83cec38",
"scripts.js": "ae0b7c536737ae4e83e21188315ad60c",
"style.css": "0bb8d9336f1c4c0af250df33da45cecd",
"version.json": "d3072d5a48775d8ca9b33dbb93e37078"};
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
