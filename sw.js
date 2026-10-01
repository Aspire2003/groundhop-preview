// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline. The bundle (hashed
// names) and fonts are cached on first use. 20261001183107 is replaced at build time.
const CACHE = 'groundhop-20261001183107';
// Match data files whose URL names their content (data/<name>.json?v=<hash>, src/data/files.web.ts):
// the same URL is always the same bytes, so they are served straight from here without asking the
// network, and kept across deploys -- a new build only downloads the files that really changed.
// Not versioned by build (not "groundhop-..."), so activate below leaves it alone.
const DATA_CACHE = 'gh-data-v1';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-1be05847acab481409e6f21d0ef9260f.js","./_expo/static/js/web/[doc]-08a8e72a3f349c761911c049865657a7.js","./_expo/static/js/web/[id]-151f3be2ebfb9dc07d8d60d8ad906272.js","./_expo/static/js/web/[id]-2b6f4f1214bdf0fd6a403815fc0b9b61.js","./_expo/static/js/web/[id]-572d29984b7d5d2401bba7664385a034.js","./_expo/static/js/web/[id]-5afc718403a458b047781c562b1dd21d.js","./_expo/static/js/web/[id]-a6f53e7f2dc7b997e59ee9e6ad121c29.js","./_expo/static/js/web/[id]-c66608e9013028777ca69f62d2e600c0.js","./_expo/static/js/web/[id]-db026d0ba9cc8fb4360a87c47af24d3b.js","./_expo/static/js/web/__common-9a0805b0346fea2b64cc1e11af9fa5b9.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-90d26c9917a3264aef49c7e764f65a8e.js","./_expo/static/js/web/_layout-92da83091d96c49a676560ce1dcecd7d.js","./_expo/static/js/web/account-a39290b7a8b68c01a21e644038255dfb.js","./_expo/static/js/web/account-forgot-157592d361a0bf194c944055aecb6ce9.js","./_expo/static/js/web/account-signin-8b934293fdd0a31c45c1e75ceb1cd525.js","./_expo/static/js/web/add-chooser-06909a4462f3e4bd160fb2b21dd1d942.js","./_expo/static/js/web/checkin-816b127592e73705b278ed9160d4c520.js","./_expo/static/js/web/club-pick-ff19458b36f8c1b6d375dc83a57715da.js","./_expo/static/js/web/compare-1ce361a47a72a9691daaef21617441b2.js","./_expo/static/js/web/competitions-pick-d2196d185a94ebd8679da69ca45b8e57.js","./_expo/static/js/web/correct-ticket-98289f5313d07c7d39fec1510b303c48.js","./_expo/static/js/web/doubleheader-062cc1fc47f7aed39df8e5afe0cbd736.js","./_expo/static/js/web/entry-5ecf5c4cee5aaa2a31b6697614d515fe.js","./_expo/static/js/web/grounds-11592a2d19404d3ed2e51fb1e6c95763.js","./_expo/static/js/web/help-749276b12582562d7ccb1d871d951b7f.js","./_expo/static/js/web/import-fababd145ecda17d1a670a2af97ee294.js","./_expo/static/js/web/index-cac2aadddc5c79deb402e2e74683ceea.js","./_expo/static/js/web/live-9393c7a6f6c94af708571ceed3ae1526.js","./_expo/static/js/web/map-0d98f4e1c995ea703616958b33aa84ed.js","./_expo/static/js/web/map-94f2bb5f3cc4bf6c75bc0b9f4acd329c.js","./_expo/static/js/web/match-add-cc4e493bbd1d25e30782975484a3b06e.js","./_expo/static/js/web/matchday-more-155050cccfd56eb0411268b6c65264ad.js","./_expo/static/js/web/my-xi-e923bdbad12df08f7cacd0bebf754bc1.js","./_expo/static/js/web/on-this-day-4ba87af1eaf2a7311cd1b45f36512e5a.js","./_expo/static/js/web/passport-9bbee5a427aa237a7899ad3f46f89f4d.js","./_expo/static/js/web/photos-29f16f992a706b2b9977106a45e07395.js","./_expo/static/js/web/planner-01d558c2eed568b1f91aef8f642f1805.js","./_expo/static/js/web/puzzle-a9840afc5a73c33a2f0cea63079ed33a.js","./_expo/static/js/web/search-ef71a7034a900780706475b47b435078.js","./_expo/static/js/web/season-add-2a269dcb4d6c82a5c03313abd735e6c7.js","./_expo/static/js/web/settings-76baf5e6b51b2a7e7cc87e6e14602792.js","./_expo/static/js/web/share-ticket-7acce5859ae704fed25849ee1af76468.js","./_expo/static/js/web/shirt-add-ff203e0c09c6737159b68a542e7adc8c.js","./_expo/static/js/web/shirts-8c1a8da796d3911df73da25fc3f304d3.js","./_expo/static/js/web/sources-527bd3e1cad1868ce685606af93b92b7.js","./_expo/static/js/web/tickets-ac38d7968276deec2d8c7e9d33dbf89f.js","./_expo/static/js/web/tour-add-78e4a0eddc872c431eade10f039fd12e.js","./_expo/static/js/web/trip-results-86b9dd9063edeab9d5ead655e4b97e19.js","./_expo/static/js/web/trips-97d8132f5a0c51f5f0fbb358016f0c3e.js","./_expo/static/js/web/trophies-22f450fa7b80476ecd3ca6a96de281bc.js","./_expo/static/js/web/visit-add-6e56abcdffa59a50a12e5bd0e3aacdf6.js","./_expo/static/js/web/visit-notes-e443d7648c60630f5ecf9b9a071e7572.js","./_expo/static/js/web/welcome-ecfcd9179258c6588f83e1b52ed69b3d.js","./_expo/static/js/web/wrapped-ea833fee2ad5502707987589bfbab935.js","./_expo/static/js/web/you-6f91d9ad3ac31c0639eabc319071f92d.js","./sql-wasm-aa0b42c828ef.wasm"];
// The versioned data files the first screen needs (filled in at build time): kept at install, so the
// next start reads them from here. The page usually fetched them moments ago, so this is mostly the
// browser's HTTP cache answering. Best-effort: a file that fails is simply fetched on first use.
const DATA = ["./data/web-snapshot.json?v=c91ff41d32e4","./data/club-links.json?v=6a9cbc41201b","./data/club-names.json?v=5f1c6d22a2cf","./data/club-crests.json?v=d4a078be9614","./data/team-grounds-openfootball.json?v=0b5e5d7fd791","./data/espn-venues.json?v=4f34a1ba0b1b","./data/espn-season.json?v=4d289d62f9bb","./data/team-grounds-de.json?v=933bcbbc46d2","./data/rbfa-season.json?v=d84429a5dbb9","./data/crest-local.json?v=5a8b69d13300"];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((c) => c.addAll(['./', './index.html', './manifest.webmanifest', ...CHUNKS]))
      .then(() => caches.open(DATA_CACHE))
      .then((c) =>
        Promise.all(DATA.map((u) => c.match(u).then((hit) => hit || fetch(u).then((res) => (res.ok ? c.put(u, res) : undefined))).catch(() => undefined))).then(() =>
          dropOtherVersions(c, DATA.map((u) => new URL(u, self.location.href).href)),
        ),
      )
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith('groundhop-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});

/** Removes every cached copy of the same data files under another version (one copy per file is kept). */
function dropOtherVersions(c, keepUrls) {
  const keep = new Set(keepUrls);
  const paths = new Set(keepUrls.map((u) => new URL(u).pathname));
  return c
    .keys()
    .then((keys) => Promise.all(keys.filter((k) => !keep.has(k.url) && paths.has(new URL(k.url).pathname)).map((k) => c.delete(k))))
    .catch(() => undefined);
}

/** A versioned data file: from the data cache, else the network (then kept, and older versions of
 * the same file dropped). Offline and not cached yet: an unversioned copy an older build kept. */
function versionedData(req) {
  return caches.open(DATA_CACHE).then((c) =>
    c.match(req).then(
      (hit) =>
        hit ||
        fetch(req)
          .then((res) => {
            if (res.ok) {
              const copy = res.clone();
              c.put(req, copy)
                .then(() => dropOtherVersions(c, [req.url]))
                .catch(() => undefined);
            }
            return res;
          })
          .catch(() => caches.match(req, { ignoreSearch: true }).then((old) => old || Promise.reject(new Error('offline')))),
    ),
  );
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  // The separate pages next to the app (password reset, admin) are not the app shell: never store them as index.html.
  if (/\/(wachtwoord|beheer)\//.test(new URL(req.url).pathname)) return;
  // The travel-time proxy (server/route-proxy.js) is never cached here: its answers come from the network only.
  if (/\/api\//.test(new URL(req.url).pathname)) return;
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
  const url = new URL(req.url);
  const path = url.pathname;
  if (path.includes('/data/') && url.searchParams.has('v')) {
    event.respondWith(versionedData(req));
    return;
  }
  // Other data (the historic archive, an older page's unversioned request) and the version file:
  // fresh when online (new results, new version), the cached copy offline.
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
