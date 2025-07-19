'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "400345d9339bca0be9e4e29af54ebc7b",
"version.json": "60ac75a87df1c23587bc6bfb0b6cb774",
"splash/img/light-2x.png": "4bb3a64e05565bd97f91c65339348671",
"splash/img/dark-4x.png": "43f090d67ba9e7998b2ad26fc9c6c1e1",
"splash/img/light-3x.png": "5c6afbd08619a2d0aea948feb621ffe1",
"splash/img/dark-3x.png": "5c6afbd08619a2d0aea948feb621ffe1",
"splash/img/light-4x.png": "43f090d67ba9e7998b2ad26fc9c6c1e1",
"splash/img/dark-2x.png": "4bb3a64e05565bd97f91c65339348671",
"splash/img/dark-1x.png": "8f9fdfb9ebe3869a1367985c13136017",
"splash/img/light-1x.png": "8f9fdfb9ebe3869a1367985c13136017",
"index.html": "5be636141d1a2f96a3b23b9075ead25b",
"/": "5be636141d1a2f96a3b23b9075ead25b",
"main.dart.js": "9d188725fee400f811fe8bf0f3e33240",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "0e90d6e0e7d26f760b4cfae9bc06bf6a",
"icons/Icon-192.png": "e8e11a18fb85218909a04add336b09c9",
"icons/Icon-maskable-192.png": "e8e11a18fb85218909a04add336b09c9",
"icons/Icon-maskable-512.png": "972ecb0f6d649bf60ef9ac0d7dee744e",
"icons/Icon-512.png": "972ecb0f6d649bf60ef9ac0d7dee744e",
"manifest.json": "41d1de681ad66895a3ff53b4bb6d74f0",
"assets/AssetManifest.json": "e1bedf71b62cf67bef5fb537a82a045a",
"assets/NOTICES": "d2e031b7031a88d5ff5d8a9fe75ca0c9",
"assets/FontManifest.json": "d25887b202d65066b1e6a38d3487cb70",
"assets/AssetManifest.bin.json": "41a628a7052f44c1d0e48546df676f1d",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "fb00c9ff2cd3ff33fced04f4eaf3b873",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a4d4d03715fdfd41fd6f671aaa326d0a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "382a81822fb25fcf9b884f896a7b525c",
"assets/packages/syncfusion_flutter_datepicker/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/packages/flutter_font_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_font_icons/fonts/Octicons.ttf": "8e7f807ef943bff1f6d3c2c6e0f3769e",
"assets/packages/flutter_font_icons/fonts/Feather.ttf": "e766963327e0a89f9ec2ba88646b6177",
"assets/packages/flutter_font_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_font_icons/fonts/FontAwesome5_Brands.ttf": "13685372945d816a2b474fc082fd9aaa",
"assets/packages/flutter_font_icons/fonts/MaterialCommunityIcons.ttf": "6a2ddad1092a0a1c326b6d0e738e682b",
"assets/packages/flutter_font_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_font_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_font_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_font_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_font_icons/fonts/FontAwesome5_Solid.ttf": "1ab236ed440ee51810c56bd16628aef0",
"assets/packages/flutter_font_icons/fonts/FontAwesome5_Regular.ttf": "db78b9359171f24936b16d84f63af378",
"assets/packages/flutter_font_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_font_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_font_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_font_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_font_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "59fdfa3b8e992f1252fc3d941f3c55a3",
"assets/fonts/MaterialIcons-Regular.otf": "03935a58a526fbfbbc581de91a46ad76",
"assets/assets/images/google_icon.png": "90b4d62c529b8d02ebab8a1b93d17936",
"assets/assets/images/add-button.png": "79a3c87a7de75e2d1a21ec9d5d8a7dcd",
"assets/assets/images/img_sign_up_success_bg.png": "c1d1448cd443211d4f9512ce089005fb",
"assets/assets/images/coverPhoto.png": "3ef610b64d5c3ab98615821f7f0fa1a4",
"assets/assets/images/nextDns.png": "43f42fb3412e106f0c43f95ac73ee567",
"assets/assets/images/tt_logo.png": "5316abd50217d13a14a7cc536763bcde",
"assets/assets/images/top_Trail_app_logo.png": "820e0f427d3f90da9d7a7046404de519",
"assets/assets/images/img_welcome_bg.png": "c0201aff1e129f68185f4f2ae3f80ad8",
"assets/assets/images/messageIcon.png": "af29b2cdb5a25b79e918130ae242aacc",
"assets/assets/images/image-2.png": "a21a5e185f18cb56c7d5521f8787f361",
"assets/assets/images/img_tth_logo.svg": "03d7c9f3370383aba3b3511c9d50ddd4",
"assets/assets/images/app_logo_grey.png": "59cb9bd731609ff983ab556b2e0baceb",
"assets/assets/ca/lets-encrypt-r3.pem": "be77e5992c00fcd753d1b9c11d3768f2",
"assets/assets/icons/ic_mountain.png": "8c0f23906183376676bd4c43d2217e85",
"assets/assets/icons/location_dot.png": "5f64e2f75de595eefd259d436f7b051c",
"assets/assets/icons/pen.png": "8c010bfe0cd2c7314de3f5521281e3c9",
"assets/assets/icons/ic_add.svg": "6caada24cb4ff583711292bc048da527",
"assets/assets/icons/ic_upload.svg": "bc951a0ac0c7ac5069d64f2a4d6a98f3",
"assets/assets/icons/ic_check_circle.svg": "cce6e8ba2a9a6297378a8271f09ac682",
"assets/assets/icons/ic_google.svg": "6f18cdc15ce1a74fa3662c724c0c9b70",
"assets/assets/icons/horse_head.png": "b5ee6823e23b07c86fd4c6eb9aed99bc",
"assets/assets/icons/ic_tree.png": "e1e2a4010e5cdfeb49b3fbf6c5ff6d02",
"assets/assets/icons/ic_tth_icon.svg": "02834ef8484ea94e98e4fc676038a66a",
"assets/assets/icons/icon_link.png": "2b2e59a06e04deb94743d35092642b39",
"assets/assets/fonts/FuturaPT/FuturaPTDemi.otf": "5b6575ccd521b96b68504700b10e3e66",
"assets/assets/fonts/FuturaPT/FuturaPTExtraBold.otf": "075bf4f82e72403f740fd81abcb97f00",
"assets/assets/fonts/FuturaPT/FuturaPTBold.otf": "f3483f64fe4f53928cfe2786e7ec82cc",
"assets/assets/fonts/FuturaPT/FuturaPTBook.otf": "99541f31c3aca8a3251b82b28ec7966e",
"assets/assets/fonts/FuturaPT/FuturaPTLight.otf": "a15258a71bcff8eb791ad54f27144d48",
"assets/assets/fonts/FuturaPT/FuturaPTHeavy.otf": "5dfc35f20430696b7213dad364c9efba",
"assets/assets/fonts/FuturaPT/FuturaPTMedium.otf": "bd99f124d37cfd9caecec4fe24094334",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
