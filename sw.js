// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline; so are the match data
// files. The bundle (hashed names) and fonts are cached on first use. 20260927212418 is replaced at build time.
const CACHE = 'groundhop-20260927212418';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-7964e2f7ed268de0bd7f40277c55f6a8.js","./_expo/static/js/web/[doc]-7e0cd1db4777063f65f7c2b56d624bc8.js","./_expo/static/js/web/[id]-16d7794d509f2760fe79c0bfcfc3c42a.js","./_expo/static/js/web/[id]-a863f51287e2008ffefb957cf26b13b1.js","./_expo/static/js/web/[id]-af13e504205f6c57cced2c855119f1e3.js","./_expo/static/js/web/[id]-b5f24c8ce9e951743157a32c4af22a2c.js","./_expo/static/js/web/[id]-d9d5d103b2f9665f619e257e0f4a0f16.js","./_expo/static/js/web/[id]-dc8d24a7a1454fcaef4f6696a5954dc1.js","./_expo/static/js/web/__common-7e2dbb7ab9a0c075fcc9a2b635c14853.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-7e48c4a135982b4543de5b846fd3ca96.js","./_expo/static/js/web/_layout-c4f2f994d072beb7cb17ff42864c6473.js","./_expo/static/js/web/add-chooser-680a09bbdaa50f251aaf9e34d0787382.js","./_expo/static/js/web/checkin-f448d7c7c8286751b81169efed8333eb.js","./_expo/static/js/web/club-pick-c12aadac4876fc8045a16724207c1b7e.js","./_expo/static/js/web/compare-44fe1ab54bc8399fdf871a7a71c626b9.js","./_expo/static/js/web/competitions-pick-156a505d6022ef391c23b119471cdd92.js","./_expo/static/js/web/correct-ticket-0102b7513837d4cfbc3e7394eff383a5.js","./_expo/static/js/web/entry-3bd808a4694388bef9a87db931c3476c.js","./_expo/static/js/web/grounds-63fa0a352eeec41d99948881d08b607e.js","./_expo/static/js/web/help-12a21e168b96aaffb42a6618462f1e89.js","./_expo/static/js/web/import-29cdc4e14a30afd806f295223158fad4.js","./_expo/static/js/web/index-36f5efa373f3747e4a3cb057faaf3707.js","./_expo/static/js/web/live-db67f41ac614593042f5841a25a77ae4.js","./_expo/static/js/web/map-19c431c4468df1a038f1b7118aa50d1c.js","./_expo/static/js/web/map-6fc7f0f630420e9c6b8f6db07c860212.js","./_expo/static/js/web/match-add-f9f3e8fae30bb14b23c3dacb80ad1c2f.js","./_expo/static/js/web/my-xi-6626a2a53263595fd618a2d41101ca6a.js","./_expo/static/js/web/passport-04a8d2fb37cb475f9f0d4eb61bdd6541.js","./_expo/static/js/web/photos-5c832fd08e1e6efa2ab2963aac6e4ca1.js","./_expo/static/js/web/planner-edd277b00471bbcba37a2d897267b783.js","./_expo/static/js/web/puzzle-06552441feaf50730591ffedd21ea020.js","./_expo/static/js/web/search-d2cd1528dc496c1fca6d761a0714be18.js","./_expo/static/js/web/season-add-a282ccf1517a42fe268b6d93a56d4b22.js","./_expo/static/js/web/settings-a73d879f086bf46b6ef07fd34c034781.js","./_expo/static/js/web/share-ticket-6a5b1b8b293ef4c1caf56cd955e50ffc.js","./_expo/static/js/web/shirt-add-561c44a8ba8f18ebdbe9bf614505c500.js","./_expo/static/js/web/shirts-4c9a7819d52ba0e5bf6a40da065518eb.js","./_expo/static/js/web/tickets-315d4ca9ce453a56a5e36bbee9fa8aa2.js","./_expo/static/js/web/tour-add-ca68c4869dff2f9a2697f23d962a7fa0.js","./_expo/static/js/web/trophies-23164daf2eaebe8ee4522e2949f50c91.js","./_expo/static/js/web/visit-add-e56d59a14e1bff1f25327347e6a62a23.js","./_expo/static/js/web/visit-notes-7dbe7e883f18b9098412fddd9f551770.js","./_expo/static/js/web/watched-32e94fc4719e4802f2d84960cdabba50.js","./_expo/static/js/web/watched-add-f7ef5473311346acd723bea346af2460.js","./_expo/static/js/web/welcome-f6f1ed1f80fb5ed6364706864cdad495.js","./_expo/static/js/web/wrapped-1b4abfe4c5a32c11936aa19fa170c48a.js","./_expo/static/js/web/you-c20c396182b039a21b0dbee970d0c841.js"];

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
