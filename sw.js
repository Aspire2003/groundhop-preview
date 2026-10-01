// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline. The bundle (hashed
// names) and fonts are cached on first use. 20261001090649 is replaced at build time.
const CACHE = 'groundhop-20261001090649';
// Match data files whose URL names their content (data/<name>.json?v=<hash>, src/data/files.web.ts):
// the same URL is always the same bytes, so they are served straight from here without asking the
// network, and kept across deploys -- a new build only downloads the files that really changed.
// Not versioned by build (not "groundhop-..."), so activate below leaves it alone.
const DATA_CACHE = 'gh-data-v1';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-63c50fbdce81cddb51be892df359f105.js","./_expo/static/js/web/[doc]-5a85c61ebe0e55262a41bd1ffac142a6.js","./_expo/static/js/web/[id]-552befb283cac300729196cad127e7da.js","./_expo/static/js/web/[id]-6ae78b93a4a182d5c2201ca0bba58a90.js","./_expo/static/js/web/[id]-8c5d8d2bd6a3e3faa7da273d438f4a6b.js","./_expo/static/js/web/[id]-8f93823f23b2663fdb4b51404c93f81e.js","./_expo/static/js/web/[id]-a14782f3b7a241ded61d554454481e16.js","./_expo/static/js/web/[id]-ede3560edf81c733e315e8b1e4fae892.js","./_expo/static/js/web/__common-7f091b1c187b7e731654ec8d1d6b28d1.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-1075682e801f922f7b18cee44932c58f.js","./_expo/static/js/web/_layout-868bd492974af31c65089e49b33f15a5.js","./_expo/static/js/web/account-b41ebd4deab09b88f0dd0834896f6d3b.js","./_expo/static/js/web/account-forgot-b1896019d793f874c8b486d61a953eca.js","./_expo/static/js/web/account-signin-53af063aceac873c0e8a3067a3c12598.js","./_expo/static/js/web/add-chooser-407998302c1f2ec729bb1b01cb859cc8.js","./_expo/static/js/web/checkin-97c0c286bc76c22551b6fee79ffe8af4.js","./_expo/static/js/web/club-pick-d916ea8bc0fe3568ccd75e0ba99f96f4.js","./_expo/static/js/web/compare-d59fb87b3b79f694792c7237891eac4d.js","./_expo/static/js/web/competitions-pick-4aaaf392387977df149ba6abc0960c72.js","./_expo/static/js/web/correct-ticket-fcc9159a65d6100f600ec6641991ff92.js","./_expo/static/js/web/doubleheader-db9292a2a06691a8a6660e3b137597c8.js","./_expo/static/js/web/entry-2b03a6f2806f760b9e142bcdbef06cac.js","./_expo/static/js/web/grounds-c37f41b9a653f69260f9c989c6efb2df.js","./_expo/static/js/web/help-08a17ec84a1f47ba4dd33f1999df57dc.js","./_expo/static/js/web/import-98f17987905609bc21d5fe89fa914486.js","./_expo/static/js/web/index-69f22927c3f7119f3aa0acb7392e027d.js","./_expo/static/js/web/live-3fcf42667edd16a4595656394248270e.js","./_expo/static/js/web/map-820cdd96becf67db48e648b07338a56b.js","./_expo/static/js/web/map-b2706811d91b9de0e15e8697ebeb2874.js","./_expo/static/js/web/match-add-0c7b1083f752d3221f506aedfc7256d5.js","./_expo/static/js/web/matchday-more-4faf929bcfc7975cc8c3d48f792e731e.js","./_expo/static/js/web/my-xi-1f3cd2296dda0798f2c34f70da4c7d96.js","./_expo/static/js/web/passport-b0e963241601a4490de354d6c1d4d4ad.js","./_expo/static/js/web/photos-478ec82cd26a2f7849e7ede2b160de3d.js","./_expo/static/js/web/planner-cdacf18ad521d2943fb47fc84143f9bd.js","./_expo/static/js/web/puzzle-eba11c4a094eb305ddc30c4c5b1162c6.js","./_expo/static/js/web/search-7edbda4fb04e2fdd89cac215eff324e3.js","./_expo/static/js/web/season-add-9a3e532989757294ada62b650b9c8ec9.js","./_expo/static/js/web/settings-415cb684852bed607b9628562cfbba8c.js","./_expo/static/js/web/share-ticket-8afce92aebad61738f70c738048580db.js","./_expo/static/js/web/shirt-add-d993dedd75b27f8786d1ea8dd3e6cfa6.js","./_expo/static/js/web/shirts-52335f7b0cf2dfc215203a7a02e16834.js","./_expo/static/js/web/sources-03dbd2dbb800618ba3c30df0f275478f.js","./_expo/static/js/web/tickets-8a780d086b481fa6d4cd0123792eea9b.js","./_expo/static/js/web/tour-add-2d2ecd46368947aa1f636828122f8ca8.js","./_expo/static/js/web/trophies-bf4e2e1fe684d1513b2a39da28cbc0b1.js","./_expo/static/js/web/visit-add-1b862fc618be599d89be0c3979f80529.js","./_expo/static/js/web/visit-notes-66fe967de749d53111f0f3587b37fdc0.js","./_expo/static/js/web/welcome-b351bfd92d9d0defe35874a768becd9b.js","./_expo/static/js/web/wrapped-1e548d5e071450d44e32496ae6d8eac7.js","./_expo/static/js/web/you-54ff8e60a6ce2fde43ca58269834a984.js","./sql-wasm-aa0b42c828ef.wasm"];
// The versioned data files the first screen needs (filled in at build time): kept at install, so the
// next start reads them from here. The page usually fetched them moments ago, so this is mostly the
// browser's HTTP cache answering. Best-effort: a file that fails is simply fetched on first use.
const DATA = ["./data/web-snapshot.json?v=ae2857b05312","./data/club-links.json?v=6a9cbc41201b","./data/club-names.json?v=5f1c6d22a2cf","./data/club-crests.json?v=d4a078be9614","./data/team-grounds-openfootball.json?v=0b5e5d7fd791","./data/espn-venues.json?v=e9aab161a0bd","./data/espn-season.json?v=d75961c522e6","./data/team-grounds-de.json?v=933bcbbc46d2","./data/rbfa-season.json?v=dd9d7288ba19","./data/crest-local.json?v=5a8b69d13300"];

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
