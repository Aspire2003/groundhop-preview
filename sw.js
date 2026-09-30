// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline; so are the match data
// files. The bundle (hashed names) and fonts are cached on first use. 20260930232813 is replaced at build time.
const CACHE = 'groundhop-20260930232813';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-63c50fbdce81cddb51be892df359f105.js","./_expo/static/js/web/[doc]-cce979b7c7d4b7667ce2edf87cfd6663.js","./_expo/static/js/web/[id]-41dc32fff9dd21cd4a55286efa67cd88.js","./_expo/static/js/web/[id]-98b6b4b4bb0e75ad36c666240af9e90b.js","./_expo/static/js/web/[id]-d9bd74331f26d39a1a861a69853a84d4.js","./_expo/static/js/web/[id]-da7f8b95a84eaea82fb07b9943d7fcfa.js","./_expo/static/js/web/[id]-f3e1b0701b58f721ee89542244665056.js","./_expo/static/js/web/[id]-f4ed188b35d897335b82b3709f1523b0.js","./_expo/static/js/web/__common-2a3193f3ccc560004574041003d682f2.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-0c49fae971a76ed0325e2bb3d5eea037.js","./_expo/static/js/web/_layout-67877d13667cc631a47e28f900553bff.js","./_expo/static/js/web/account-c0cfbf72d9d78159a359c652bff8df28.js","./_expo/static/js/web/account-forgot-39768a2b795e4e7c3c1c7b50a75465dc.js","./_expo/static/js/web/account-signin-eaa1c847ea6614afeb64c42b4a80b285.js","./_expo/static/js/web/add-chooser-7bc631d7fe8ceb348254c38297f359c4.js","./_expo/static/js/web/checkin-522569f0b0668c400a2168eb6a343db0.js","./_expo/static/js/web/club-pick-2bf01594a19e60ed74f36d588eafabae.js","./_expo/static/js/web/compare-247a4389be7d7fdb1a8e76c8d7b9ecab.js","./_expo/static/js/web/competitions-pick-59115e16afc2896246fcfcbbccce4c30.js","./_expo/static/js/web/correct-ticket-8cbcf767d042de153a4296781999bc08.js","./_expo/static/js/web/doubleheader-e3f31df81266fbee412b34891b8f53e4.js","./_expo/static/js/web/entry-ca3e7fb150a53801c7ba931194a3fe03.js","./_expo/static/js/web/grounds-c37f41b9a653f69260f9c989c6efb2df.js","./_expo/static/js/web/help-42c9aeda0b957120c494b07297e65c47.js","./_expo/static/js/web/import-771c64add44e5fda6b3882b6f823d500.js","./_expo/static/js/web/index-0a347ee1c582094df9bdb14ed0b69f79.js","./_expo/static/js/web/live-c150a52ce3b78eb9312286304e0171fe.js","./_expo/static/js/web/map-4e6ce15282a1873fc84713fcec9b8665.js","./_expo/static/js/web/map-a6e138894569b03fe17bd9c616fffd23.js","./_expo/static/js/web/match-add-b27b0cda6812b2f7f64dfec3fdd7ca8f.js","./_expo/static/js/web/matchday-more-454ea593b78416cf8fd3fb94290f6835.js","./_expo/static/js/web/my-xi-f9993143a6c35c73ac5aa4871f9e7fbc.js","./_expo/static/js/web/passport-a22a3c96085c32a8be1d4f5ddce70dca.js","./_expo/static/js/web/photos-d39cd66b57410f2c8d7489a68ffbbf7b.js","./_expo/static/js/web/planner-fcd480f8a13e0741f2a0c65b8fd47167.js","./_expo/static/js/web/puzzle-5c4d42a784ca6006b7777c46860a6050.js","./_expo/static/js/web/search-9a98a5ff416cfb0719f55961ac143958.js","./_expo/static/js/web/season-add-b4d9e1129847c8f37f01450766b42aae.js","./_expo/static/js/web/settings-7b27a4c9aa18d4257d75e056aba4e109.js","./_expo/static/js/web/share-ticket-954894e0c29320bcecadff74abfd32c2.js","./_expo/static/js/web/shirt-add-d8be75b1a51c4d4771d5748b134b1dd0.js","./_expo/static/js/web/shirts-cf0f5d1c5f64cde2042c3b178f4ae5ba.js","./_expo/static/js/web/sources-418879930bd093cad32eeb523e3b0962.js","./_expo/static/js/web/tickets-df3605a521cb6bf4886b61cb78a284d4.js","./_expo/static/js/web/tour-add-719f03d80d0aac02007a07f17241a1c3.js","./_expo/static/js/web/trophies-9d021bf3fbcd09ab098aa96b2bdfe6b4.js","./_expo/static/js/web/visit-add-0fc6b6e3d595027e9356788357b07c92.js","./_expo/static/js/web/visit-notes-f6fcb813d6a2c2bed6868e505e9d7cea.js","./_expo/static/js/web/welcome-a2c49796b9942594b25c179d4546cb83.js","./_expo/static/js/web/wrapped-7c000b1b08016f95ce22d154121db4f3.js","./_expo/static/js/web/you-72d98d40b3a65c892a71acc393f9ee28.js"];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(['./', './index.html', './manifest.webmanifest', ...CHUNKS])).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith('groundhop-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html')),
    );
    return;
  }
  // Match data and the version file: fresh when online (new results, new version), the cached copy offline.
  const path = new URL(req.url).pathname;
  if (path.includes('/data/') || path.endsWith('/version.json')) {
    event.respondWith(
      fetch(req, { cache: 'no-cache' })
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match(req)),
    );
    return;
  }
  event.respondWith(
    caches.match(req).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        }),
    ),
  );
});
