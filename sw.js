// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline; so are the match data
// files. The bundle (hashed names) and fonts are cached on first use. 20260928141816 is replaced at build time.
const CACHE = 'groundhop-20260928141816';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-8dc61f9dd328f41b66ad0231a5a0a848.js","./_expo/static/js/web/[doc]-479e213f5efd534f63ab57e7f14fe676.js","./_expo/static/js/web/[id]-0cef1ffe398aab04a0256b7d4e7b9f69.js","./_expo/static/js/web/[id]-13220a6204b1096b7502bf8dd8d9d029.js","./_expo/static/js/web/[id]-6397e36546802c2b7b301dc535f3201a.js","./_expo/static/js/web/[id]-8d565ca63b6a5a35d38b4e4e9983d7cf.js","./_expo/static/js/web/[id]-8d7e547ffcee02fd2f603c5d1f8a589e.js","./_expo/static/js/web/[id]-a3add24d8c8b33da9c302f2295942cc8.js","./_expo/static/js/web/__common-9c9fe9e885e1e3715191454a13d28760.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-98ccbb2e6b9ea4fa9fccadfabd1adfbb.js","./_expo/static/js/web/_layout-d43783887d30e841adfc5887773de229.js","./_expo/static/js/web/add-chooser-cc7b5b93ec120d37f3ad0ff66974d2e1.js","./_expo/static/js/web/checkin-03ed96372f6e29e95d63186cd9cb4677.js","./_expo/static/js/web/club-pick-78f5b7859aa3d630f99474555ebd17f6.js","./_expo/static/js/web/compare-818477610e53721ef8e7e79ddf45e61f.js","./_expo/static/js/web/competitions-pick-a269981ab19ca62ed9ac307ffff39de4.js","./_expo/static/js/web/correct-ticket-7416dce4cb94731ece50d3cac234b6fd.js","./_expo/static/js/web/entry-435fcc5eed62449293f7c11980de83a6.js","./_expo/static/js/web/grounds-ddb2f21cc4140b45e27e02f59c38e44c.js","./_expo/static/js/web/help-f4b4f51ae04be7d47fdf587e5a8277e8.js","./_expo/static/js/web/import-43f119a72bc491904e7ea0e2c6e7ff08.js","./_expo/static/js/web/index-8c098d0c1a3b3a6185c8b44d70fc76c4.js","./_expo/static/js/web/live-85c9b9f246a761e2b51d65d2f4f7cf2b.js","./_expo/static/js/web/map-bf1c52aa57d2b48df7521e069ebb8921.js","./_expo/static/js/web/map-f38494e696c89a8379a913dd3087dc99.js","./_expo/static/js/web/match-add-7ebe8d46aed9d784e24b81fca57fbc62.js","./_expo/static/js/web/my-xi-f52180759fc1045f977bc6095bf34220.js","./_expo/static/js/web/passport-3753302c23af129ca0840ba791622e9c.js","./_expo/static/js/web/photos-10dae452a685a43bc78c4f406693c1d4.js","./_expo/static/js/web/planner-5ff3233e2a391d217aa5e103cbf2b9ad.js","./_expo/static/js/web/puzzle-76a5f7f95cd6689bbd47bea4158d2fa7.js","./_expo/static/js/web/search-09b2540f0ff6efa954a7674e07a68a91.js","./_expo/static/js/web/season-add-daf5db30b857b401cb3a6c616c532a2a.js","./_expo/static/js/web/settings-173ee6734bbde85dfa060899d9f86eef.js","./_expo/static/js/web/share-ticket-89794063db8c09f1290db48b256eb9ec.js","./_expo/static/js/web/shirt-add-3297e4a313daa099691e12b72eec08f7.js","./_expo/static/js/web/shirts-776bb6bcc92c7c3e2237b6d576bb20b1.js","./_expo/static/js/web/tickets-3c9088471a79d90ae8f15a1036eb724b.js","./_expo/static/js/web/tour-add-85be6200f7633b6091b5c406423159e2.js","./_expo/static/js/web/trophies-66f76108e188ad8b7299c46e90874d5b.js","./_expo/static/js/web/visit-add-cfe93e646aaa855ba2cd278148c60780.js","./_expo/static/js/web/visit-notes-139e0c0065dcaf2943af336cd0a9fe33.js","./_expo/static/js/web/welcome-87d014be28aa229b53fbadad7294915a.js","./_expo/static/js/web/wrapped-a7ef9e0257acc285bf0c09ae7b99a5e3.js","./_expo/static/js/web/you-20bf0c9540d7d9be7ea7afc2d88f71b9.js"];

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
