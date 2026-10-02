// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline. The bundle (hashed
// names) and fonts are cached on first use. 20261002104936 is replaced at build time.
const CACHE = 'groundhop-20261002104936';
// Match data files whose URL names their content (data/<name>.json?v=<hash>, src/data/files.web.ts):
// the same URL is always the same bytes, so they are served straight from here without asking the
// network, and kept across deploys -- a new build only downloads the files that really changed.
// Not versioned by build (not "groundhop-..."), so activate below leaves it alone.
const DATA_CACHE = 'gh-data-v1';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-293ecb538726f54231329bbc7d6a0458.js","./_expo/static/js/web/[code]-aef2318a1bb520a49ec128b295d87909.js","./_expo/static/js/web/[doc]-269f1cdf669c37145a63354db3679a09.js","./_expo/static/js/web/[id]-1fda096625eb1cad946f37ab10ab5dbc.js","./_expo/static/js/web/[id]-5f9550f9f20eabb36532c8908c83ff39.js","./_expo/static/js/web/[id]-897e685c832c600cb035c492e096d662.js","./_expo/static/js/web/[id]-92414d1457723ae175a9012932f5a911.js","./_expo/static/js/web/[id]-a97f355889b87061c7bb1f3edf1cec71.js","./_expo/static/js/web/[id]-b1d7a198672fe2a6f97d41942d00a3d9.js","./_expo/static/js/web/[id]-c4808d9e9a8f7e6c2c173c9d82ccc9e0.js","./_expo/static/js/web/__common-f0bf7941a2db9df191192105cf54b62a.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-64d6b2e351200ee4b797e0afa1122b8c.js","./_expo/static/js/web/_layout-694a33f28875685b1d08e12b10112059.js","./_expo/static/js/web/account-3b531e6cb90dab375f5527f6d48216d5.js","./_expo/static/js/web/account-forgot-ffc66127f2ded7205e88c948517f35ff.js","./_expo/static/js/web/account-signin-10164cedfdd6f5292051864ebb4249c3.js","./_expo/static/js/web/add-chooser-57c33e478a9b6b1fa1f6e08b8d6220b3.js","./_expo/static/js/web/all-grounds-a33a5d279600c88fa0591bdc4d9846b7.js","./_expo/static/js/web/checkin-455ca2f0afc6e3fced9d88c3d1451a71.js","./_expo/static/js/web/club-pick-89143997ed514690b4539d7e3ea3ee5e.js","./_expo/static/js/web/clubs-seen-67a78f5753ab5d5ee4ff9ae335075963.js","./_expo/static/js/web/compare-8eb8c4af1a136ca7e56c5d2cab9371cd.js","./_expo/static/js/web/competitions-pick-9f456693d7a5cbc06cd7d71badbdf8fd.js","./_expo/static/js/web/correct-ticket-0e90de997d13ba95ce7508e8f0eeedd0.js","./_expo/static/js/web/countries-5e0603904b6a64d48fee4afcadfe6b51.js","./_expo/static/js/web/doubleheader-340dbff1ea004d02703f4868ff8dbd60.js","./_expo/static/js/web/entry-49e8d089f8bb1b8aa08b23d151a5ebc7.js","./_expo/static/js/web/grounds-10e2770f82cb51914082f810d9abdd56.js","./_expo/static/js/web/help-09ede7224f234ed4453c3b2a9a322487.js","./_expo/static/js/web/import-73a77147af72b900b00a35b046b111c2.js","./_expo/static/js/web/index-89b5b38db715c6cbada923d749972d8a.js","./_expo/static/js/web/live-a989c21c409459f9489df7297e3185d4.js","./_expo/static/js/web/map-b8edb4570024423b2afb99d11a98abb6.js","./_expo/static/js/web/map-e78f26ea7b056fbf7c8d03200ecef2f8.js","./_expo/static/js/web/match-add-196fdf3e2a80df16166dc66d33b63d08.js","./_expo/static/js/web/matchday-more-ca3b89eacd09a641cfb5588ad86a7d91.js","./_expo/static/js/web/maybe-0fae6220c4ad34c8d7b7d09c0dea62ad.js","./_expo/static/js/web/my-xi-bf359c28905f93ad16eb42068539b344.js","./_expo/static/js/web/on-this-day-d5cb130bd8ab685f9b2b4a1cea794519.js","./_expo/static/js/web/passport-68f6dfbd2963d55cdcfc1ccc2f128ab0.js","./_expo/static/js/web/person-f06efb710f59e7a784ce3bf06c4004e3.js","./_expo/static/js/web/photos-3c1b62d9e72066ab50af5da92e2b376a.js","./_expo/static/js/web/planner-2613c8f889603124049bb0714919cf2c.js","./_expo/static/js/web/puzzle-20a3018113c237bf322b42254fdfc6a3.js","./_expo/static/js/web/search-37534c4e13b104a9096761e82016cb74.js","./_expo/static/js/web/season-add-dba76492ebe3d38bd4a867843212b300.js","./_expo/static/js/web/settings-3cc0dd5499a01513831d86be674987a2.js","./_expo/static/js/web/share-ticket-d84daaa10701a1352927efcc4306ce4b.js","./_expo/static/js/web/shirt-add-cfc25d707b68bb30e445bd5d7ee38723.js","./_expo/static/js/web/shirts-fe87c2b9441d840dcb6e4630ae321003.js","./_expo/static/js/web/sources-fb03910ffa0f7ae0da8759dfdc0eee94.js","./_expo/static/js/web/tickets-6162009d4fa9d2b21f50fc369a2be6ec.js","./_expo/static/js/web/tour-add-1eb9254d27e75d1dd13bd375acd6a037.js","./_expo/static/js/web/trip-results-840b11b8fd8bf2f4aa613c7649e1544b.js","./_expo/static/js/web/trips-d576907081e612fd88ab9176d98dc36b.js","./_expo/static/js/web/trophies-7d9ac660cfb865d2e88323e6d637a2d0.js","./_expo/static/js/web/visit-add-542de3bf717f55eca788ff89af25ca43.js","./_expo/static/js/web/visit-notes-c0649ccce15ef05e90790f2574e00481.js","./_expo/static/js/web/welcome-4d6717d040af0b3fcdfd1bb83c5d3d00.js","./_expo/static/js/web/wrapped-19564cfd6fbb51ce830317038bf957c8.js","./_expo/static/js/web/you-0b7bd5760cc9855d76fd388e46e190d4.js","./sql-wasm-aa0b42c828ef.wasm"];
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
