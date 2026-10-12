// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline. The bundle (hashed
// names) and fonts are cached on first use. 20261012122616 is replaced at build time.
const CACHE = 'groundhop-20261012122616';
// Match data files whose URL names their content (data/<name>.json?v=<hash>, src/data/files.web.ts):
// the same URL is always the same bytes, so they are served straight from here without asking the
// network, and kept across deploys -- a new build only downloads the files that really changed.
// Not versioned by build (not "groundhop-..."), so activate below leaves it alone.
const DATA_CACHE = 'gh-data-v1';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-ebd73ee0a8250b3b4879363a4b56960a.js","./_expo/static/js/web/[code]-8f0dd2b74a20fbad0fc08139cd859d4a.js","./_expo/static/js/web/[doc]-afba366a01e4e4d35665e39f6b245b38.js","./_expo/static/js/web/[id]-077063b61f88dbef0798762e72dec396.js","./_expo/static/js/web/[id]-122ff0a5660eea9dfc74e3854c639ae9.js","./_expo/static/js/web/[id]-25d826a55e2263a455e2c1689cfc651b.js","./_expo/static/js/web/[id]-344b15fd8988eb40563dd0241104cf55.js","./_expo/static/js/web/[id]-443520b5848ad1bae8689006fa15e783.js","./_expo/static/js/web/[id]-9bdafce96b210d2664e9539ba6c2fb12.js","./_expo/static/js/web/[id]-a7f998778419832154c11f0930f0fe13.js","./_expo/static/js/web/__common-b05825bca59c2c2d613337017be9e79d.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-3e787e010da9aa1136dbaed5d96ab6d1.js","./_expo/static/js/web/_layout-b84891fabeef13157f425b76e518f766.js","./_expo/static/js/web/account-829b053d19eae209eafd9ddc550a54a1.js","./_expo/static/js/web/account-forgot-1a5f04c90d8009a5267af4630f153344.js","./_expo/static/js/web/account-signin-b363f432c4aa5bc9c0b90f132486f052.js","./_expo/static/js/web/add-chooser-47e3a5862d56b7ba40db3f4b15dd8871.js","./_expo/static/js/web/all-grounds-b59661051f60cece9e86e221c6c80cc6.js","./_expo/static/js/web/checkin-a034d8ffcb3cd43bc014c1097faf5998.js","./_expo/static/js/web/club-pick-5c0451dfe9e42cea64749808b0fb9d06.js","./_expo/static/js/web/clubs-seen-e4bfb09e2adbd3fce20590ff8b9e4774.js","./_expo/static/js/web/compare-b308e573afe694095fa4f71d6fb2564f.js","./_expo/static/js/web/competitions-pick-590f22d1c40c76529291089a3fb6446a.js","./_expo/static/js/web/correct-ticket-320771dbaba409d1bea584e8ecdd0526.js","./_expo/static/js/web/countries-64b6507db4faf40d768d246b988ddeb2.js","./_expo/static/js/web/doubleheader-0a08057062d61b7da1c9fd75ba69e357.js","./_expo/static/js/web/entry-2ed193884f2dfb83d30c1a991eceb1a5.js","./_expo/static/js/web/grounds-bb06cd1b88c84c51f26840eecddefb23.js","./_expo/static/js/web/help-7b7af28a8a4d24f4844ef46904748627.js","./_expo/static/js/web/home-town-4e3f473f8c72a5d7393245574a1ac6ee.js","./_expo/static/js/web/import-7a26f4e27c638f46e0e883a1429c4bf1.js","./_expo/static/js/web/index-e92e2d78cc4bd8b1de69a6c717c2c021.js","./_expo/static/js/web/live-6493d111f3dacba230128b3ad63bf7ee.js","./_expo/static/js/web/map-0623e8cedebd2ba5fb8168bb6daf9cbd.js","./_expo/static/js/web/map-0cf01d86a4091c03212f361ed9713962.js","./_expo/static/js/web/match-add-1cdb353ec5706ea267c79171d9ea969b.js","./_expo/static/js/web/matchday-more-0be79f97212bad04f7bbb1851cced507.js","./_expo/static/js/web/maybe-04db6ae93884c5d6d1eb53e3d5a5c624.js","./_expo/static/js/web/my-xi-3140e6367e63833b2967a53a3b89b861.js","./_expo/static/js/web/on-this-day-d5bb6610e6154a0b1062f0bf9761e9c1.js","./_expo/static/js/web/passport-b4241a31ac7e65a1c3c2e77a33ddb4e5.js","./_expo/static/js/web/person-869cedcbe2eed5cd13ec28220eac678b.js","./_expo/static/js/web/photos-21c519d1096ee79958f90d98b69016d6.js","./_expo/static/js/web/planner-cd9da35ba9234ff7464a44a5d3f99393.js","./_expo/static/js/web/puzzle-6398332220325d9088ae0800d77af640.js","./_expo/static/js/web/search-ec099c0da07539fe8b44d13a621a7b2e.js","./_expo/static/js/web/season-add-68f13c7b8dcc6252b1b2104371da5945.js","./_expo/static/js/web/settings-95f1496ea3a0f2d562680eab07bc7f67.js","./_expo/static/js/web/share-ticket-3428623a533ea53dfcb1416943cfeb27.js","./_expo/static/js/web/shirt-add-51238e3e4547df2904b4f162b29b9177.js","./_expo/static/js/web/shirts-ab83ef6237027f30fabc69b8e1e1f923.js","./_expo/static/js/web/sources-49871a1fd8abe9715f97ab0894f9e65a.js","./_expo/static/js/web/tickets-16c852a445af293190cba105046e06bf.js","./_expo/static/js/web/tour-add-34aacf63210ad59fe9451e4b88622f57.js","./_expo/static/js/web/trip-results-5983574e58f8261a7ad6f6cf36ba64ba.js","./_expo/static/js/web/trips-2fdba48fa25d0d59d6760f7ce4fc9d5f.js","./_expo/static/js/web/trophies-34d6928f1eff4554543b461aa4e3f417.js","./_expo/static/js/web/visit-add-80c1f7bf4317c0b13b30c6df77fdfe36.js","./_expo/static/js/web/visit-notes-886e782fa71a4b1ce78933da73dd125a.js","./_expo/static/js/web/welcome-a235e072ac1980fa78da7ba5f7c65aac.js","./_expo/static/js/web/wrapped-38c6adc36041ac12f00896346be20703.js","./_expo/static/js/web/you-4d4ae1ec6cd2a9859d0a3e0bbfd91fdf.js","./sql-wasm-aa0b42c828ef.wasm"];
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

// "Op deze dag" web push (server/push-cron/ sends it at 9:00 local time on a day with a memory):
// the payload is { title, body, ticketId }. A push must always show a notification, so an unreadable
// payload still shows the plain title. The tag makes a second one the same day replace the first.
self.addEventListener('push', (event) => {
  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch {
    payload = {};
  }
  const title = typeof payload.title === 'string' && payload.title ? payload.title : 'Op deze dag';
  const body = typeof payload.body === 'string' ? payload.body : '';
  const ticketId = typeof payload.ticketId === 'string' ? payload.ticketId : '';
  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon: new URL('icon-192.png', self.registration.scope).href,
      badge: new URL('icon-192.png', self.registration.scope).href,
      tag: 'on-this-day',
      data: { ticketId },
    }),
  );
});

// Tapping it opens that memory (/on-this-day?id=<ticketId>) in the open app, or a new window.
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const ticketId = event.notification.data && event.notification.data.ticketId;
  const url = new URL('on-this-day' + (ticketId ? '?id=' + encodeURIComponent(ticketId) : ''), self.registration.scope).href;
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      const own = list.find((c) => new URL(c.url).origin === self.location.origin);
      if (own) {
        return own
          .navigate(url)
          .then((c) => (c || own).focus())
          .catch(() => self.clients.openWindow(url));
      }
      return self.clients.openWindow(url);
    }),
  );
});
