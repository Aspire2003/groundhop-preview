// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline. The bundle (hashed
// names) and fonts are cached on first use. 20261001191417 is replaced at build time.
const CACHE = 'groundhop-20261001191417';
// Match data files whose URL names their content (data/<name>.json?v=<hash>, src/data/files.web.ts):
// the same URL is always the same bytes, so they are served straight from here without asking the
// network, and kept across deploys -- a new build only downloads the files that really changed.
// Not versioned by build (not "groundhop-..."), so activate below leaves it alone.
const DATA_CACHE = 'gh-data-v1';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-1be05847acab481409e6f21d0ef9260f.js","./_expo/static/js/web/[doc]-1644c3e978718494fd5f4e2bb01604b5.js","./_expo/static/js/web/[id]-15f9c5883e61d2990294ffc892db1ee2.js","./_expo/static/js/web/[id]-20f6b96d5d8712a2cf3ea051185aa3a8.js","./_expo/static/js/web/[id]-29c304ee7e2c74090cce8ba38e1ba6d7.js","./_expo/static/js/web/[id]-827919dd8635636c6422e5b075208186.js","./_expo/static/js/web/[id]-a7560a3ab7692de6c2dfcf0f659d32b8.js","./_expo/static/js/web/[id]-da5cae411a43602b1581d537110de8ea.js","./_expo/static/js/web/[id]-fb345d3282dfde017bf904c197045225.js","./_expo/static/js/web/__common-812cc80c5460003cbe2ab9a963d26292.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-3c8510f29bf3cb25e049dc83cb79214d.js","./_expo/static/js/web/_layout-92da83091d96c49a676560ce1dcecd7d.js","./_expo/static/js/web/account-794115c103c19ce958193fa9e0036330.js","./_expo/static/js/web/account-forgot-6b4f7936f1866f85b01f06336fbc7340.js","./_expo/static/js/web/account-signin-e326d41d2cb9b49862ed46881316f480.js","./_expo/static/js/web/add-chooser-17af94865666d19c99979654899e2a77.js","./_expo/static/js/web/checkin-ba5b5555e85e3b73435ef5cca1e1b977.js","./_expo/static/js/web/club-pick-3773ef4c23963d70efa7264aeee0483a.js","./_expo/static/js/web/compare-bce4aa07b7bd3a6dd6caf1dbf598008a.js","./_expo/static/js/web/competitions-pick-d856a0d90da6799243dabf0a0f0c596b.js","./_expo/static/js/web/correct-ticket-dbc2646246d80cc8c9e3d3533634174a.js","./_expo/static/js/web/doubleheader-c5fec585092ee492f7e096e6d5824dd9.js","./_expo/static/js/web/entry-0bfa03b5c424278527b875b7211ce310.js","./_expo/static/js/web/grounds-11592a2d19404d3ed2e51fb1e6c95763.js","./_expo/static/js/web/help-f2d78260caa75659bbd7873ef8473ce2.js","./_expo/static/js/web/import-58f14c5d68672dc51f6ebf8e9a621462.js","./_expo/static/js/web/index-cac2aadddc5c79deb402e2e74683ceea.js","./_expo/static/js/web/live-f09044c19e42911fd06f1c74870e6184.js","./_expo/static/js/web/map-1278657e84964d29c7612ff8b9b44a7a.js","./_expo/static/js/web/map-6eae0cf880d0632c5f04a491961af5d2.js","./_expo/static/js/web/match-add-1bc69eff699631cbcd6ee965b9a95bd0.js","./_expo/static/js/web/matchday-more-f43c7c1f6a77ae342a22e883723d5094.js","./_expo/static/js/web/my-xi-219df05354fc03894d13e29c03943454.js","./_expo/static/js/web/on-this-day-422b5cfcd0a06c9421fd2e6078d7b4c6.js","./_expo/static/js/web/passport-db53ebccf9cb4c808f349b99a4126d89.js","./_expo/static/js/web/photos-689dfdccbc4eadc5261e9d87cc98b169.js","./_expo/static/js/web/planner-4f2b599b7a3a5311b9b60689329f59a2.js","./_expo/static/js/web/puzzle-979bc8f723324e37f75520afedafb332.js","./_expo/static/js/web/search-bbd1faeee78927f873601f7eff11729a.js","./_expo/static/js/web/season-add-634384d091f9d9ac03fb3853ed939810.js","./_expo/static/js/web/settings-563dbcd1c64602eb836152ffa8591727.js","./_expo/static/js/web/share-ticket-097cb85985ab43ce70b1ea9045b8c3e3.js","./_expo/static/js/web/shirt-add-fa10df84427ac88ec892add2019f7c48.js","./_expo/static/js/web/shirts-ce88175402bcc9da5e6f7df74fbb5d57.js","./_expo/static/js/web/sources-e040180851743b5f01b72c3a6c88f99f.js","./_expo/static/js/web/tickets-ac38d7968276deec2d8c7e9d33dbf89f.js","./_expo/static/js/web/tour-add-7342786395738a582be3e258a174eb56.js","./_expo/static/js/web/trip-results-02f0894a16c99f726711d5233dcf7e02.js","./_expo/static/js/web/trips-f20635249ab4b0c117eaf58f755be8dc.js","./_expo/static/js/web/trophies-0c6cde994b0c96effe0fb5da857d2fdd.js","./_expo/static/js/web/visit-add-05a0a3b1974a7726a189f821aab4f6d0.js","./_expo/static/js/web/visit-notes-3c3b1395244a744231eac4e11c81ae48.js","./_expo/static/js/web/welcome-07dc79e17576366ad563ac0de41d8008.js","./_expo/static/js/web/wrapped-b8279e7788dd2c6fc553ca7a78522654.js","./_expo/static/js/web/you-6f91d9ad3ac31c0639eabc319071f92d.js","./sql-wasm-aa0b42c828ef.wasm"];
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
