// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline; so are the match data
// files. The bundle (hashed names) and fonts are cached on first use. 20260930152440 is replaced at build time.
const CACHE = 'groundhop-20260930152440';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-63c50fbdce81cddb51be892df359f105.js","./_expo/static/js/web/[doc]-55b2bd7fd661f085f4df5815c898b9b3.js","./_expo/static/js/web/[id]-4e6c55e86955c1a4e4ef703f80de2960.js","./_expo/static/js/web/[id]-5cbf5fffb3451298e18722df74109ca4.js","./_expo/static/js/web/[id]-65cc9d45ecd91718a73ccf0e6bcec628.js","./_expo/static/js/web/[id]-6695bb4189565f0c1402cb22379699d6.js","./_expo/static/js/web/[id]-7896692976103ea33def625e4f3b5907.js","./_expo/static/js/web/[id]-f30fa8858e24053996863715a9abdc34.js","./_expo/static/js/web/__common-1d9cf819f643e05e1a5f247578e7df57.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-67877d13667cc631a47e28f900553bff.js","./_expo/static/js/web/_layout-ea19a9fef2eca62145d4b7116eb1138e.js","./_expo/static/js/web/account-d71e73a907e3721cb361e6f50be03030.js","./_expo/static/js/web/account-forgot-53310a7346f60d08f946368d2a322192.js","./_expo/static/js/web/account-signin-ab0e7e09a54839265c2c041edb933865.js","./_expo/static/js/web/add-chooser-258d5fbd0cee08bc5e7ed92be16f9d35.js","./_expo/static/js/web/checkin-7b524eb1792e79162b5ddaf9d6e8b04e.js","./_expo/static/js/web/club-pick-67e9a632ac7115ed13623a066f3fa823.js","./_expo/static/js/web/compare-8ce2920c2f8dba9a6819f36775b2d8c4.js","./_expo/static/js/web/competitions-pick-8472514de5898e97434f3ac0274aa39f.js","./_expo/static/js/web/correct-ticket-7a7526fd53afe9abfc4db0756a91df96.js","./_expo/static/js/web/doubleheader-8a388799dc462283802913af54650b34.js","./_expo/static/js/web/entry-0425c57944d851cc1ab2c969a75c3e66.js","./_expo/static/js/web/grounds-b81deba85b617f664959737137b00830.js","./_expo/static/js/web/help-e86401376ccbf55805f57ef571eb0f24.js","./_expo/static/js/web/import-4b7c2e7e8432964c0f46549a5fe40da5.js","./_expo/static/js/web/index-eac6c3a04c01a3121e0f9bf1aa9916d8.js","./_expo/static/js/web/live-5ba205d9fdb8a19c7aecddd8078cbb0f.js","./_expo/static/js/web/map-282c91ed6ed5733a20afd7979ab67a15.js","./_expo/static/js/web/map-4c0fa7894d763eea601731881c678756.js","./_expo/static/js/web/match-add-0eb911695cbd6f937cd317e85d2af519.js","./_expo/static/js/web/matchday-more-9dbf2c1484d70ddd27f11e672b8f9797.js","./_expo/static/js/web/my-xi-305c916d3fa5758493d1de3f1a76b189.js","./_expo/static/js/web/passport-43d52ce7611c00c77b44d0296db57a5d.js","./_expo/static/js/web/photos-d8fa0221db36cfca52f8c1c46a0ad1c2.js","./_expo/static/js/web/planner-d28cb5d01924008deff4479df861d8fe.js","./_expo/static/js/web/puzzle-b5c6a60f72b7fcdc2a6e6853583cd73e.js","./_expo/static/js/web/search-626c80b9ea7daf982113a1f1cce160cc.js","./_expo/static/js/web/season-add-8ef1c327d298f5d0599843122cee6e2e.js","./_expo/static/js/web/settings-a096ca5f9918fa25af7607fdac3dc81b.js","./_expo/static/js/web/share-ticket-1a95a9a76a0c03d0b7f48734d41bbeac.js","./_expo/static/js/web/shirt-add-e02350a6ceb7334ce85cdd5790006a9c.js","./_expo/static/js/web/shirts-c921d22779c498f28d1792d6ac4b163a.js","./_expo/static/js/web/sources-baa77228993ea941f4918d92533b77fe.js","./_expo/static/js/web/tickets-d9fd54f84f73d6244d863846bf16c0c8.js","./_expo/static/js/web/tour-add-0cb963978772e12dafb57c8f746570be.js","./_expo/static/js/web/trophies-39658992837fabb4012fe09a36889ca4.js","./_expo/static/js/web/visit-add-844882d31dfc4edf2047321d37518537.js","./_expo/static/js/web/visit-notes-827b48ff1c36747b69df428895d93427.js","./_expo/static/js/web/welcome-c054f4f6593c7c729d8cc36228e1fc3f.js","./_expo/static/js/web/wrapped-05f8665bf410bf28b2977469dcc45852.js","./_expo/static/js/web/you-d4b41ec147b657d267f4ff86a632dac5.js"];

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
