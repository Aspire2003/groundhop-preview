// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline; so are the match data
// files. The bundle (hashed names) and fonts are cached on first use. 20260930041559 is replaced at build time.
const CACHE = 'groundhop-20260930041559';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-63c50fbdce81cddb51be892df359f105.js","./_expo/static/js/web/[doc]-a89ca5f48332f79682cd47faa55f38a8.js","./_expo/static/js/web/[id]-3ec52d11802681d6089fb3802c14dcda.js","./_expo/static/js/web/[id]-5cbf5fffb3451298e18722df74109ca4.js","./_expo/static/js/web/[id]-6695bb4189565f0c1402cb22379699d6.js","./_expo/static/js/web/[id]-c10221ddbfbecac088bd4df4e66d54b6.js","./_expo/static/js/web/[id]-f2db22c03b7dfb64703d90db7a9a5a13.js","./_expo/static/js/web/[id]-f30fa8858e24053996863715a9abdc34.js","./_expo/static/js/web/__common-e86b79ed96f22fe674a11aaad7539db8.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-67877d13667cc631a47e28f900553bff.js","./_expo/static/js/web/_layout-ea19a9fef2eca62145d4b7116eb1138e.js","./_expo/static/js/web/account-d71e73a907e3721cb361e6f50be03030.js","./_expo/static/js/web/account-forgot-53310a7346f60d08f946368d2a322192.js","./_expo/static/js/web/account-signin-ab0e7e09a54839265c2c041edb933865.js","./_expo/static/js/web/add-chooser-258d5fbd0cee08bc5e7ed92be16f9d35.js","./_expo/static/js/web/checkin-c5633fd1f6bf573792432af771843fb5.js","./_expo/static/js/web/club-pick-67e9a632ac7115ed13623a066f3fa823.js","./_expo/static/js/web/compare-bbd05d7da7273507aca7a21d26f72c70.js","./_expo/static/js/web/competitions-pick-8472514de5898e97434f3ac0274aa39f.js","./_expo/static/js/web/correct-ticket-7a7526fd53afe9abfc4db0756a91df96.js","./_expo/static/js/web/doubleheader-8a388799dc462283802913af54650b34.js","./_expo/static/js/web/entry-14e52e64e3f0a7f99ab8e6a8e4e3a356.js","./_expo/static/js/web/grounds-b81deba85b617f664959737137b00830.js","./_expo/static/js/web/help-e86401376ccbf55805f57ef571eb0f24.js","./_expo/static/js/web/import-4b7c2e7e8432964c0f46549a5fe40da5.js","./_expo/static/js/web/index-eac6c3a04c01a3121e0f9bf1aa9916d8.js","./_expo/static/js/web/live-5ba205d9fdb8a19c7aecddd8078cbb0f.js","./_expo/static/js/web/map-282c91ed6ed5733a20afd7979ab67a15.js","./_expo/static/js/web/map-4c0fa7894d763eea601731881c678756.js","./_expo/static/js/web/match-add-0eb911695cbd6f937cd317e85d2af519.js","./_expo/static/js/web/matchday-more-9dbf2c1484d70ddd27f11e672b8f9797.js","./_expo/static/js/web/my-xi-7233b2d7c5910122909b4df33958a543.js","./_expo/static/js/web/passport-ed0cac29d4e8e989959970c511d81389.js","./_expo/static/js/web/photos-d8fa0221db36cfca52f8c1c46a0ad1c2.js","./_expo/static/js/web/planner-d28cb5d01924008deff4479df861d8fe.js","./_expo/static/js/web/puzzle-a9c9bdb41c0ce4d8484a0b3081d42d9b.js","./_expo/static/js/web/search-626c80b9ea7daf982113a1f1cce160cc.js","./_expo/static/js/web/season-add-8ef1c327d298f5d0599843122cee6e2e.js","./_expo/static/js/web/settings-a096ca5f9918fa25af7607fdac3dc81b.js","./_expo/static/js/web/share-ticket-8c96bab8c810be0a6b1a074d1c26b858.js","./_expo/static/js/web/shirt-add-e02350a6ceb7334ce85cdd5790006a9c.js","./_expo/static/js/web/shirts-c921d22779c498f28d1792d6ac4b163a.js","./_expo/static/js/web/sources-301d5fa4728d2127fc205260a7a05d62.js","./_expo/static/js/web/tickets-d9fd54f84f73d6244d863846bf16c0c8.js","./_expo/static/js/web/tour-add-0cb963978772e12dafb57c8f746570be.js","./_expo/static/js/web/trophies-39658992837fabb4012fe09a36889ca4.js","./_expo/static/js/web/visit-add-844882d31dfc4edf2047321d37518537.js","./_expo/static/js/web/visit-notes-827b48ff1c36747b69df428895d93427.js","./_expo/static/js/web/welcome-b038fcef76a3c27431513a1bc7eeea31.js","./_expo/static/js/web/wrapped-708121c7459a4e96b532771d62ecf326.js","./_expo/static/js/web/you-d4b41ec147b657d267f4ff86a632dac5.js"];

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
