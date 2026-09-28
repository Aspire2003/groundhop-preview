// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline; so are the match data
// files. The bundle (hashed names) and fonts are cached on first use. 20260928152826 is replaced at build time.
const CACHE = 'groundhop-20260928152826';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-64014df8bd4b1db867445468ce256074.js","./_expo/static/js/web/[doc]-7b73d73a092e194ff811970b631e6e74.js","./_expo/static/js/web/[id]-102c279a4c6a09e42a1906670ab13f54.js","./_expo/static/js/web/[id]-6b3ed74a414918109eb9fc74ce9c1169.js","./_expo/static/js/web/[id]-72b5200565d61b620a66c60c3727b62c.js","./_expo/static/js/web/[id]-75cfc925a5c5b37cc769010a9556abc8.js","./_expo/static/js/web/[id]-d49927deb3c993a1dd4e407b5a926fec.js","./_expo/static/js/web/[id]-f7af48e3c22df6a110cf54983c6c95eb.js","./_expo/static/js/web/__common-f955cd48087e64acdc3c8464dbfbac5a.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-c96d5f8bbb21e82e221f8f2a3170d1b3.js","./_expo/static/js/web/_layout-e536066656391c3e6a10f8b9434dee22.js","./_expo/static/js/web/add-chooser-10146f734e939e0deff0bbb84d82133b.js","./_expo/static/js/web/checkin-d945c325039683f4abee8c95cfd241df.js","./_expo/static/js/web/club-pick-c59eb094f2458941fd37ad21bd0abebb.js","./_expo/static/js/web/compare-e572ae589dc21130b15817a2443757dd.js","./_expo/static/js/web/competitions-pick-86822e781ebc3421d6c93038998a65d2.js","./_expo/static/js/web/correct-ticket-0c1c0912f840361820d772e58028b83e.js","./_expo/static/js/web/doubleheader-884b22348f7a137a1506c1bcf43f0206.js","./_expo/static/js/web/entry-087eb9bd7d5db08869a0fddca751d278.js","./_expo/static/js/web/grounds-f0493141c406478cc11e86eff97b81c4.js","./_expo/static/js/web/help-9cdcd316ad646247f4e186327b383966.js","./_expo/static/js/web/import-38f5dd97e214d547b69a6ee750204708.js","./_expo/static/js/web/index-cac68d430e99d191ac87c2d67f124c7d.js","./_expo/static/js/web/live-21d320fb61b987582c28f101aa4f2c74.js","./_expo/static/js/web/map-56e3bd7e9d681751bab36cb66203dbd3.js","./_expo/static/js/web/map-cd45466cda1112ab6e883a1993d605d0.js","./_expo/static/js/web/match-add-0fa6258e0cc2c6bb7e40bbd3795195cc.js","./_expo/static/js/web/my-xi-e09c8573061be34d3f9842a1deb0bda8.js","./_expo/static/js/web/passport-0559ffa7024642e81940ff7bc4c1154e.js","./_expo/static/js/web/photos-2021a5a96bfeef3b70327fab66b5c20b.js","./_expo/static/js/web/planner-913c69a9f4a78ec76401e9d1e9c63d1f.js","./_expo/static/js/web/puzzle-8119c1f36b9761e4f3f4f59550d04203.js","./_expo/static/js/web/search-7577ffb58ad6e47bc35dda9038a408ad.js","./_expo/static/js/web/season-add-f313552d5f91a7bebcec96d8fa729b28.js","./_expo/static/js/web/settings-211700d61173a15628cb07b41bf4c12e.js","./_expo/static/js/web/share-ticket-595b75ee37c4fd5d81cc720e11480e10.js","./_expo/static/js/web/shirt-add-17c415ca2aaac48fdcba05753a9577ad.js","./_expo/static/js/web/shirts-0e0f20faf5b59c612cbe8585f07f5a93.js","./_expo/static/js/web/tickets-5c48e184270a09387dbc1ea7b7b08842.js","./_expo/static/js/web/tour-add-47eb142334066548c7cc10d31a4d8f20.js","./_expo/static/js/web/trophies-ae6e5de6615288cf7a8e17fc004c887a.js","./_expo/static/js/web/visit-add-8ccf8218b73a1a0cce3cce8252e7a573.js","./_expo/static/js/web/visit-notes-ced967e764c374e5038f1b52f4decf12.js","./_expo/static/js/web/welcome-8e96ccb5282c4a9299f189f2abc67570.js","./_expo/static/js/web/wrapped-2d93302cd701c823f26a909940a06537.js","./_expo/static/js/web/you-cb2cdbecf51a6abd1e57912acdb1be9d.js"];

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
