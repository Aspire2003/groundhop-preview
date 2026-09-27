// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline; so are the match data
// files. The bundle (hashed names) and fonts are cached on first use. 20260927230223 is replaced at build time.
const CACHE = 'groundhop-20260927230223';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-8dc61f9dd328f41b66ad0231a5a0a848.js","./_expo/static/js/web/[doc]-1d2742200e81fdc71e40a3fbd792a3f1.js","./_expo/static/js/web/[id]-23becdd7965eafc8e2e01c6fda5e6adb.js","./_expo/static/js/web/[id]-355f945473b9568a24afaf2294985244.js","./_expo/static/js/web/[id]-8dff8f9bda6e3b7b027298c12719345f.js","./_expo/static/js/web/[id]-90116b5f0c770e73adcd08a532ba998b.js","./_expo/static/js/web/[id]-b041c80822a7674a9dd3ec7b552b9db8.js","./_expo/static/js/web/[id]-daaed4e8848e75581547e6195201acae.js","./_expo/static/js/web/__common-f2d3e91f797e7790ab5b52047ec1a4cb.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-04303725347bcab11a9260d745347001.js","./_expo/static/js/web/_layout-954a85345215b221d48ec3f700e1db8d.js","./_expo/static/js/web/add-chooser-8fadccb82c9bda905d431ce82430c8fd.js","./_expo/static/js/web/checkin-842c470caf33340764fc8d163f7d1d44.js","./_expo/static/js/web/club-pick-6e244b653ed5703343c641b9c86141d5.js","./_expo/static/js/web/compare-d8e5b5e3cf4853c707b0fd2c9459a529.js","./_expo/static/js/web/competitions-pick-2e8c111ea0346db09ce1962e2a35e052.js","./_expo/static/js/web/correct-ticket-18cefd18402d512d27c5e8a23fdc51e1.js","./_expo/static/js/web/entry-ef6e4472f91a119c421fe81404fc424b.js","./_expo/static/js/web/grounds-c382d251a717dc36d7f55cbb2a870820.js","./_expo/static/js/web/help-a6e7b2aa7300327112f68b4e5bd6bf8a.js","./_expo/static/js/web/import-26801209201aa6ae9fdf655fdf87321f.js","./_expo/static/js/web/index-4beaac40222257b26821533353b50dce.js","./_expo/static/js/web/live-b2970a17f060b8c30bf4da6af64fdb25.js","./_expo/static/js/web/map-6d447acc0edd8324644f1e8e0d85675d.js","./_expo/static/js/web/map-c2a3e128ad7365f2a80fbdee47291b2c.js","./_expo/static/js/web/match-add-6019b0dd2847269adfe2d56bccedf909.js","./_expo/static/js/web/my-xi-616e50d281cbb940d8911308f82a2fce.js","./_expo/static/js/web/passport-e419c143bd0db474a0f406987b0bbd8c.js","./_expo/static/js/web/photos-6b2a125ce3dd6307c8a8cbc4e9352b14.js","./_expo/static/js/web/planner-47fadb2331afb6609d698695bb7bf4cb.js","./_expo/static/js/web/puzzle-770ce36c2e925cc39f1886ce99fd9397.js","./_expo/static/js/web/search-32b841facdbc36590dd8b2cf2256eeff.js","./_expo/static/js/web/season-add-7287cb4c39d5e0172755e1766a1d1fe6.js","./_expo/static/js/web/settings-a9ae89cc0b099360b96db9b0d0a5be14.js","./_expo/static/js/web/share-ticket-8d5eb80f1a1cf1e708b14035bdf8d197.js","./_expo/static/js/web/shirt-add-6c6672f9579512e046f41f891f6a8d84.js","./_expo/static/js/web/shirts-47bf993f4e9a27ed424b29c0466853ce.js","./_expo/static/js/web/tickets-6663b84cf00c7c0c448d8d9d7840c58c.js","./_expo/static/js/web/tour-add-605c92be1520a5312dc82d5f95e11610.js","./_expo/static/js/web/trophies-a1b6152fc749307bfd07c5b3ff24c8d3.js","./_expo/static/js/web/visit-add-0c3e3f100134c8282940d5a5bd731828.js","./_expo/static/js/web/visit-notes-a778fa3cf8aa5370abdaefee68868d36.js","./_expo/static/js/web/welcome-764e8a727f0c3f859f69ef3b6db8a695.js","./_expo/static/js/web/wrapped-f365c3dd46ef22a5d9501ead8940ffaa.js","./_expo/static/js/web/you-b3918eea98935b311a7e6e01ca3f3074.js"];

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
