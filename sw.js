// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline; so are the match data
// files. The bundle (hashed names) and fonts are cached on first use. 20260928204644 is replaced at build time.
const CACHE = 'groundhop-20260928204644';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-41a8d44e1a0bea82ba202be35989024c.js","./_expo/static/js/web/[doc]-83cf4463962b87ec80d668df70690a5b.js","./_expo/static/js/web/[id]-5a2323ee9ec9cd953c649cb2293cab40.js","./_expo/static/js/web/[id]-691dbe0042357f1f3fcc35f5b44c8c2d.js","./_expo/static/js/web/[id]-6cb24678609a659a2e75bbe46ac1a689.js","./_expo/static/js/web/[id]-9a7bdd61bf0b8a8937575044e596b26f.js","./_expo/static/js/web/[id]-c1a87f707ac145ef14465f19e775fc8d.js","./_expo/static/js/web/[id]-ddc23daa09b08222835ccfc9f6f319d6.js","./_expo/static/js/web/__common-315ed6fee9ca54eff6430b295890c033.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-faf6a96ee8922a0fac774c9adfa7c957.js","./_expo/static/js/web/_layout-fcf858548cd7d54ef80a7e02447c00fd.js","./_expo/static/js/web/account-693a044b918fd7b475e89d1e77ca3ebf.js","./_expo/static/js/web/account-forgot-1e0d87ed416a343e837de99fcfb72ef8.js","./_expo/static/js/web/account-signin-208ef0ad1a7f355905618de535426a98.js","./_expo/static/js/web/add-chooser-78b5f71000232bfa088c6eb6abe039df.js","./_expo/static/js/web/checkin-5c44b00ed885c1455f65a2d5a0cae3b3.js","./_expo/static/js/web/club-pick-a0be099111a2dc49577ec96ab23f4827.js","./_expo/static/js/web/compare-987655c55987aa268d934f1d77069f48.js","./_expo/static/js/web/competitions-pick-59165f8121940c15b93ac900e6c7007c.js","./_expo/static/js/web/correct-ticket-7ab09350b1d5ab24e9ef6920781c26b4.js","./_expo/static/js/web/doubleheader-e38d07a086e0bd4d1db95d714a2db65f.js","./_expo/static/js/web/entry-1a04e26075ba4618398af2ecb885b360.js","./_expo/static/js/web/grounds-4ef3b7c570851094a16250608f9f26cb.js","./_expo/static/js/web/help-9802f37590850ee00b01369f7a6ae20f.js","./_expo/static/js/web/import-707caf4f1e9ebcee1ff820d72e9140e1.js","./_expo/static/js/web/index-a8c6b6cc2f9639a5eddf07450f791bda.js","./_expo/static/js/web/live-8dc92c1ef03fccb5689354ac83de89da.js","./_expo/static/js/web/map-a190ba588e64770c7bfa7b9b5438dc5c.js","./_expo/static/js/web/map-abb1781c8e1ae8bc48a15fb68fb6fe72.js","./_expo/static/js/web/match-add-356586b2d8cfc8e9edfc4b5b1345878f.js","./_expo/static/js/web/matchday-more-87568c7e4c00d1e10b1202bd958e8ede.js","./_expo/static/js/web/my-xi-f30a09565492531bcd660f151cc93cce.js","./_expo/static/js/web/passport-f990caa84c9c8de3fea9e872bf171b96.js","./_expo/static/js/web/photos-5913cee1e9dfe167c05b408c6723748d.js","./_expo/static/js/web/planner-cb4df70fa832af0f3406c25d2cde76cd.js","./_expo/static/js/web/puzzle-c11dfc8b4aa5e74e062732725e5e6d04.js","./_expo/static/js/web/search-2abc6ec05d7ac47d393a0bf80ff22f9e.js","./_expo/static/js/web/season-add-3f3bd2f1bcab3a869e0cc7dba559edfa.js","./_expo/static/js/web/settings-d7d813f3773bda76efc5bfd0adea8655.js","./_expo/static/js/web/share-ticket-449514dc13e066717c1f3fdc468693e3.js","./_expo/static/js/web/shirt-add-9abc2b9ffded52956378c0df98cdaf0b.js","./_expo/static/js/web/shirts-ae4603b47f15b3e949dd24d3dec4a549.js","./_expo/static/js/web/tickets-1729137a7f1523d59885ae0b04c221bd.js","./_expo/static/js/web/tour-add-3fd0314fa4c40f830e267d95b8bf2800.js","./_expo/static/js/web/trophies-688e9aba73e9a6115a498263c5046322.js","./_expo/static/js/web/visit-add-1adba69a1117f0744364cefe9e362ffc.js","./_expo/static/js/web/visit-notes-0fe299cd50dbd67e89b81707928aa553.js","./_expo/static/js/web/welcome-52c073bb76c4086c7c0f13ec300898da.js","./_expo/static/js/web/wrapped-2282f5a0b6fab5520ad7d50b4950d379.js","./_expo/static/js/web/you-3495a2ce9e921a634fde643d4d9ba003.js"];

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
