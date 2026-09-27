// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline; so are the match data
// files. The bundle (hashed names) and fonts are cached on first use. 20260927145521 is replaced at build time.
const CACHE = 'groundhop-20260927145521';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-cbbcf4809454317839cd8c74ecb27472.js","./_expo/static/js/web/[doc]-8a13c2757b5938d110d00705aedaa9fd.js","./_expo/static/js/web/[id]-094ec68b0209a2f9c7aed9ea863d2c02.js","./_expo/static/js/web/[id]-20db1545ce84e7649a17bae209270fca.js","./_expo/static/js/web/[id]-2400a561bb21e2107bcacc3470ded13f.js","./_expo/static/js/web/[id]-5a1b0588ec5343941065e1d4b1faf3f7.js","./_expo/static/js/web/[id]-c85b2cecd9697335ff8afd264847e3d6.js","./_expo/static/js/web/[id]-e064f07a0415633fc325b8ca90d7aaae.js","./_expo/static/js/web/__common-e22ab428f1c9e34284ab401441b435c8.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-a7021c93487ff7c84fae40d2acd59e8d.js","./_expo/static/js/web/_layout-c15049a34d3cb03f1f2e7e403ef4e833.js","./_expo/static/js/web/checkin-808aba6f164ea5329cbf14fd230d14f0.js","./_expo/static/js/web/club-pick-9c0de4419ed133c43ebc575ba30eca4f.js","./_expo/static/js/web/compare-c107ae7af2fe887630cf006c2bdd27f7.js","./_expo/static/js/web/competitions-pick-274d0d92cfa33c6982b77fee1c3e154a.js","./_expo/static/js/web/entry-3a31455fdf2ed1d51ec64fd39cbb8638.js","./_expo/static/js/web/grounds-ed79dd1cd9b219af0d7e76fd3b98a306.js","./_expo/static/js/web/help-5de802c5f1ad8fef7066a551446b7f75.js","./_expo/static/js/web/import-9a4f83456520823282e2b5227b01e9d0.js","./_expo/static/js/web/index-f0516384710a9a7d7e704dd218f096b0.js","./_expo/static/js/web/live-399fbbc2b230973e5e887e7925183323.js","./_expo/static/js/web/map-14ff92a3860cc7623629e16dfa4ba6cf.js","./_expo/static/js/web/map-28a1e085960c5631fd5a50f0d9353e16.js","./_expo/static/js/web/match-add-5139f19b94e93f83ac79119a41261f1f.js","./_expo/static/js/web/my-xi-ff20e82d9d219557b3dcc5da8206d459.js","./_expo/static/js/web/passport-4fa80898dc7b7bc5b8b1244d5f7f7a73.js","./_expo/static/js/web/photos-59a1389b7faf372adaa32ed52c772b83.js","./_expo/static/js/web/planner-9f38bed87d57ca2689ce1bc399a0361c.js","./_expo/static/js/web/puzzle-a6864dcaa6cb8a4bc314f34571104540.js","./_expo/static/js/web/search-fe44f158579dc09849e9084714ab6161.js","./_expo/static/js/web/season-add-c4050ec3d781a1fdc37b01e89276623f.js","./_expo/static/js/web/settings-232060c1588a7f4e3a867398d6f2cd3f.js","./_expo/static/js/web/share-ticket-a5c61bc6bfa8e7afa6970e38f587a9a0.js","./_expo/static/js/web/shirt-add-fb2a788b43b103600415e5d42d990109.js","./_expo/static/js/web/shirts-bac52172ef23b7e2adcb82fc3cdcd6ac.js","./_expo/static/js/web/tickets-1bd1c8a3bc0df65e9210b1df9fd5990d.js","./_expo/static/js/web/tour-add-acb72c13de775a84145006aba0461be1.js","./_expo/static/js/web/trophies-ef928fc3a3e241b68e2eebae75deee3d.js","./_expo/static/js/web/visit-notes-e843d8a2d6738f556eb7cf2fbc7d8bad.js","./_expo/static/js/web/watched-add-65eb4fbdc16a06f07eec693b34cd0ba2.js","./_expo/static/js/web/watched-b826811381815ab355c66fbd8beb7789.js","./_expo/static/js/web/welcome-d325157dab06a8aff8545efe9446899c.js","./_expo/static/js/web/wrapped-cebc122377517b3e0ffcf65b69054cb5.js","./_expo/static/js/web/you-626a9cbb944a2154d825316d1cc1f8e0.js"];

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
