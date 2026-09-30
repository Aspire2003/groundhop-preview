// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline; so are the match data
// files. The bundle (hashed names) and fonts are cached on first use. 20260930221403 is replaced at build time.
const CACHE = 'groundhop-20260930221403';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-63c50fbdce81cddb51be892df359f105.js","./_expo/static/js/web/[doc]-bba318839f59565f8b35c42fcf703d9b.js","./_expo/static/js/web/[id]-0b752fc5f815c3de98a1e8c2d81064f3.js","./_expo/static/js/web/[id]-1be1a89cb14bbfaa8c0a6ae11d47706e.js","./_expo/static/js/web/[id]-848ade0d34e18a1e8e5a674aa19b2121.js","./_expo/static/js/web/[id]-8829fb169aac35c8d3b40534be2e2ee6.js","./_expo/static/js/web/[id]-9cf4e7ef2fdee6c5f3c3ea149981b946.js","./_expo/static/js/web/[id]-e2d17b751df6e50b98729b780de09f16.js","./_expo/static/js/web/__common-214f5dcebed333934f32588260bb29fe.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-12399733ab19f428a9c5fda371b44c6d.js","./_expo/static/js/web/_layout-67877d13667cc631a47e28f900553bff.js","./_expo/static/js/web/account-ae04a5bff05a84d7b192ab8509d3a7e0.js","./_expo/static/js/web/account-forgot-f47f9bf8fbe16b0252527c0d89ba7848.js","./_expo/static/js/web/account-signin-43d3d6be225fed72dc922aa623fda4f3.js","./_expo/static/js/web/add-chooser-39e681f4ef66e562e59c846837189917.js","./_expo/static/js/web/checkin-53eb3322fcfc165efbf18b8a938fa9ec.js","./_expo/static/js/web/club-pick-0e06e29242615b74ed224be98016dfaf.js","./_expo/static/js/web/compare-88af853bf1f9bac57c1489a6a70b1b0a.js","./_expo/static/js/web/competitions-pick-b02d0ae43779a27a174dee591a849f94.js","./_expo/static/js/web/correct-ticket-dac6210506a13807a15a0895485bf05e.js","./_expo/static/js/web/doubleheader-117eff48330692f0a3bb732a7f268dd3.js","./_expo/static/js/web/entry-52985bf66411d9319266da44e9b385c0.js","./_expo/static/js/web/grounds-c37f41b9a653f69260f9c989c6efb2df.js","./_expo/static/js/web/help-8b537b81ed895786c2029e71dc67e092.js","./_expo/static/js/web/import-c9d3f3e4f9da7a82c5aabe711feec4bc.js","./_expo/static/js/web/index-0a347ee1c582094df9bdb14ed0b69f79.js","./_expo/static/js/web/live-a548b42c638b22d32842c009787b6c52.js","./_expo/static/js/web/map-25c005193a328d9d62972810203fe2f6.js","./_expo/static/js/web/map-88c51e908aa0d7f091ba65ccfdd86aae.js","./_expo/static/js/web/match-add-c9027e6e6e43c67e5a5d2af7a444a6a7.js","./_expo/static/js/web/matchday-more-c4bebc06fc14cb69d0de409694708970.js","./_expo/static/js/web/my-xi-74cae993ef7f650eac9b41920f467a86.js","./_expo/static/js/web/passport-25495d7830067adb65c2e8c4ed8c66d5.js","./_expo/static/js/web/photos-28981e8bfb9342d45dad8b1d3a0d3670.js","./_expo/static/js/web/planner-9a75fec6e964c05c1e35375c9fed90f4.js","./_expo/static/js/web/puzzle-86f1facb80d0e625a2c36f04c0360f70.js","./_expo/static/js/web/search-b7e7088f03c718de0004820120481b98.js","./_expo/static/js/web/season-add-6b510b9a392044f31cedbdb44ccb7887.js","./_expo/static/js/web/settings-8551289c73e995a0986308504f6de5be.js","./_expo/static/js/web/share-ticket-e5a56290525220f3cdef557e090668f9.js","./_expo/static/js/web/shirt-add-dd8fa3b2720819c380279ba2805dc703.js","./_expo/static/js/web/shirts-c8f55fd4fd34c8d573de33de75b708ce.js","./_expo/static/js/web/sources-05cce7caee52c719af27ae9510396535.js","./_expo/static/js/web/tickets-df3605a521cb6bf4886b61cb78a284d4.js","./_expo/static/js/web/tour-add-a2db6c0d535b469bd1222077bebd7fee.js","./_expo/static/js/web/trophies-0d64a973db51a7c98349dee89fac1e1f.js","./_expo/static/js/web/visit-add-e02edc77b06936e1188cd13652e9217c.js","./_expo/static/js/web/visit-notes-3882b8a589fb11683d018d1554a0be55.js","./_expo/static/js/web/welcome-1d5970be8978040cdc0ea9e0efb25007.js","./_expo/static/js/web/wrapped-9d7572cc5e9e231900e7d534482b5ca0.js","./_expo/static/js/web/you-8574295d49cdf45b8a4b285932e650a5.js"];

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
