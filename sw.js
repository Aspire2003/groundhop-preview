// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline; so are the match data
// files. The bundle (hashed names) and fonts are cached on first use. 20260930211343 is replaced at build time.
const CACHE = 'groundhop-20260930211343';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-63c50fbdce81cddb51be892df359f105.js","./_expo/static/js/web/[doc]-bba318839f59565f8b35c42fcf703d9b.js","./_expo/static/js/web/[id]-0b752fc5f815c3de98a1e8c2d81064f3.js","./_expo/static/js/web/[id]-39cd672966a0d5c1060b67033d5d7182.js","./_expo/static/js/web/[id]-41513ae83d2a22170d9efb5e0c5b3462.js","./_expo/static/js/web/[id]-db6b4b4e8e711b0df2cc0d063b48b6a6.js","./_expo/static/js/web/[id]-e24189a61b94fb9c49029643bdefd6ca.js","./_expo/static/js/web/[id]-f940217d3a1998b42c0483cf0182e84a.js","./_expo/static/js/web/__common-c3adf77d1e0939e6a9d97e7af5950ac1.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-67877d13667cc631a47e28f900553bff.js","./_expo/static/js/web/_layout-e8bd1d0ec033b5aa48a4a300c3fe00e9.js","./_expo/static/js/web/account-ae04a5bff05a84d7b192ab8509d3a7e0.js","./_expo/static/js/web/account-forgot-f47f9bf8fbe16b0252527c0d89ba7848.js","./_expo/static/js/web/account-signin-43d3d6be225fed72dc922aa623fda4f3.js","./_expo/static/js/web/add-chooser-103a6b720e5e97e51f77ef53cb223f25.js","./_expo/static/js/web/checkin-892b6030d73aeef358dc844531528262.js","./_expo/static/js/web/club-pick-d0a835eede8b86ecc9802a3e344f35a6.js","./_expo/static/js/web/compare-c1d8a6d099d625fb8256d2395435a3ea.js","./_expo/static/js/web/competitions-pick-b02d0ae43779a27a174dee591a849f94.js","./_expo/static/js/web/correct-ticket-ce67ffed5b48b9b2a4c35a78bda0345e.js","./_expo/static/js/web/doubleheader-c3fc4581fbdb899f68a71c0d611f649f.js","./_expo/static/js/web/entry-bd029a5335b39ed70d8cd60d47cb5925.js","./_expo/static/js/web/grounds-98a3259fc9a2df25092ba89b5e86afc0.js","./_expo/static/js/web/help-8b537b81ed895786c2029e71dc67e092.js","./_expo/static/js/web/import-0527820d92d747f3dd78b333370924ee.js","./_expo/static/js/web/index-782c843dc267c547b122116c7f511e65.js","./_expo/static/js/web/live-a548b42c638b22d32842c009787b6c52.js","./_expo/static/js/web/map-1ab14c9de2c0796b2ce872a861eddf62.js","./_expo/static/js/web/map-b46f159ea55398630ce4300f925d006c.js","./_expo/static/js/web/match-add-3fbb750a532d080cd6736d906042ab56.js","./_expo/static/js/web/matchday-more-a4a69e08e2ea0765d29ad3b8d66bb5a1.js","./_expo/static/js/web/my-xi-1c8885c2fb50352ef1c46c133a069dc9.js","./_expo/static/js/web/passport-2e3f4e5983f96775002da1764de503d4.js","./_expo/static/js/web/photos-28981e8bfb9342d45dad8b1d3a0d3670.js","./_expo/static/js/web/planner-e9235d2c9daadd57800d318465bc1ecd.js","./_expo/static/js/web/puzzle-c2223d544eebca5e127e98c904a9ee6b.js","./_expo/static/js/web/search-469c02ce8f1fdeadd6920bba3b69a939.js","./_expo/static/js/web/season-add-bedce9857644e5e0b88a61f8f1f21466.js","./_expo/static/js/web/settings-457945d6f5d67d492e3ed43677b02916.js","./_expo/static/js/web/share-ticket-28a6eba56179a334e7c3a463fd054087.js","./_expo/static/js/web/shirt-add-80d8251cfc46d9472272c540b76e5455.js","./_expo/static/js/web/shirts-c8f55fd4fd34c8d573de33de75b708ce.js","./_expo/static/js/web/sources-05cce7caee52c719af27ae9510396535.js","./_expo/static/js/web/tickets-df3605a521cb6bf4886b61cb78a284d4.js","./_expo/static/js/web/tour-add-a2db6c0d535b469bd1222077bebd7fee.js","./_expo/static/js/web/trophies-0d64a973db51a7c98349dee89fac1e1f.js","./_expo/static/js/web/visit-add-3bbd92abc4284b0e980d0460125c6754.js","./_expo/static/js/web/visit-notes-fdf87ad2039b5780d087b4e73d953b86.js","./_expo/static/js/web/welcome-2644fda34e549631f7d1bf95b52e33b2.js","./_expo/static/js/web/wrapped-59becbe912260febdaacd05743bb863c.js","./_expo/static/js/web/you-42f0c4ee952930dcdc3a58a95d6018cd.js"];

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
