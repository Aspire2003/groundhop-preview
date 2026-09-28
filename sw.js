// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline; so are the match data
// files. The bundle (hashed names) and fonts are cached on first use. 20260928113002 is replaced at build time.
const CACHE = 'groundhop-20260928113002';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-8dc61f9dd328f41b66ad0231a5a0a848.js","./_expo/static/js/web/[doc]-85b5b96821585735644391be14835a54.js","./_expo/static/js/web/[id]-04108c70f92d7a3b3515063e7ea544a4.js","./_expo/static/js/web/[id]-43630f9a5f36488341ffd70c4db64080.js","./_expo/static/js/web/[id]-58e3a4af9f6341c62ce565271798bcda.js","./_expo/static/js/web/[id]-c75ef71d74ae879e5396fa3b1603e836.js","./_expo/static/js/web/[id]-dba32eaf95042dffb7495bb20c60a642.js","./_expo/static/js/web/[id]-f2cc5ef86c1a6e89be4dee78eb06d0e3.js","./_expo/static/js/web/__common-bcd20439158da287c3dfaede6b1e8334.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-d43783887d30e841adfc5887773de229.js","./_expo/static/js/web/_layout-d5bfc909dc0f5ef21b31b3b1432e3b29.js","./_expo/static/js/web/add-chooser-3229e3966171ffac94541c742bd80c2f.js","./_expo/static/js/web/checkin-851a2e1a1d4a4720ba1d3f0c1cfbe8ca.js","./_expo/static/js/web/club-pick-52fa964c539e2bbf2b7caefc0b8204b6.js","./_expo/static/js/web/compare-a68932613fa0155eaa746623a8ace84e.js","./_expo/static/js/web/competitions-pick-426421e553650c7018d3549e86f21bc2.js","./_expo/static/js/web/correct-ticket-dd4f3c78d6873f1cc6e3e7332621f4f6.js","./_expo/static/js/web/entry-fc26bd94a649a61b206d106daf3d9704.js","./_expo/static/js/web/grounds-ddb2f21cc4140b45e27e02f59c38e44c.js","./_expo/static/js/web/help-9369aa98065f4cea40eaface968a1a59.js","./_expo/static/js/web/import-6f3c09e0c4c484b56f4c124d25cc2386.js","./_expo/static/js/web/index-8c098d0c1a3b3a6185c8b44d70fc76c4.js","./_expo/static/js/web/live-1782cdee0d8c368858f27703460307d0.js","./_expo/static/js/web/map-6ad72b4ec4fd36b156f924317b24b418.js","./_expo/static/js/web/map-c581ea119f86a42b9051039a2bbfa7e5.js","./_expo/static/js/web/match-add-122e94322e8d04fa10a3bc9f0276a2f3.js","./_expo/static/js/web/my-xi-41776c022040dc02be28b2fffc3af6d5.js","./_expo/static/js/web/passport-c84f059e40c2b1b46f6d2ca083a986f3.js","./_expo/static/js/web/photos-cf6387d76f976d11e8c7be9de9e2ce60.js","./_expo/static/js/web/planner-ebb93d24d1d06a659d30601d3a0cf54b.js","./_expo/static/js/web/puzzle-3a5fc70d28390a8aaba0ca0f3303c336.js","./_expo/static/js/web/search-37975964ee245e2ce6c357558f664b3c.js","./_expo/static/js/web/season-add-e75e5706487c75aad72b9f5762bd72cd.js","./_expo/static/js/web/settings-61a672c097e7b0af2f0ccb0efe8e6f1b.js","./_expo/static/js/web/share-ticket-76c3f6ce891d4fc4cd5e0be6b395a46b.js","./_expo/static/js/web/shirt-add-2691d4747b14b7074088d1ea05a168f7.js","./_expo/static/js/web/shirts-3e7a7ad0b27c7f10965a16b8d55575df.js","./_expo/static/js/web/tickets-3c9088471a79d90ae8f15a1036eb724b.js","./_expo/static/js/web/tour-add-13f075583c2c3878c2032f0e058987f5.js","./_expo/static/js/web/trophies-fd7b97b6f432559ce5aed04c0d781cf8.js","./_expo/static/js/web/visit-add-de6904b5cc80d88576851cc78d6388de.js","./_expo/static/js/web/visit-notes-240a6167dbecca57cb67ef5e23f543ee.js","./_expo/static/js/web/welcome-3c14f4de76c7766b0dcdf585617dc46b.js","./_expo/static/js/web/wrapped-b5faafc0340a1792357dc71731b7b535.js","./_expo/static/js/web/you-5646a6272bb364e59fdeec4f2fb729c9.js"];

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
