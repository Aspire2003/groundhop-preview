// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline. The bundle (hashed
// names) and fonts are cached on first use. 20261001202250 is replaced at build time.
const CACHE = 'groundhop-20261001202250';
// Match data files whose URL names their content (data/<name>.json?v=<hash>, src/data/files.web.ts):
// the same URL is always the same bytes, so they are served straight from here without asking the
// network, and kept across deploys -- a new build only downloads the files that really changed.
// Not versioned by build (not "groundhop-..."), so activate below leaves it alone.
const DATA_CACHE = 'gh-data-v1';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-1be05847acab481409e6f21d0ef9260f.js","./_expo/static/js/web/[doc]-dbf9043643bf6106c793407db2377886.js","./_expo/static/js/web/[id]-083b163cf4e4438edb697b1456425195.js","./_expo/static/js/web/[id]-2e538e1d3097ca35ad9711d9aacbe687.js","./_expo/static/js/web/[id]-60ef82946134825c2fae79351abcbbe9.js","./_expo/static/js/web/[id]-6b0e8d02516360903ced1ad5d70e9ff8.js","./_expo/static/js/web/[id]-90098eb6f9b4bb225cd52dab7a6de53e.js","./_expo/static/js/web/[id]-ebdfd9621e96cf50c7806feae9d187cc.js","./_expo/static/js/web/[id]-ede00cd5db42bd82473c9e92e3e60fc6.js","./_expo/static/js/web/__common-1ff3413e79d0f2b596b8d815cecd8ac1.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-288ab77618b230cf2911a7584a4e2ddf.js","./_expo/static/js/web/_layout-92da83091d96c49a676560ce1dcecd7d.js","./_expo/static/js/web/account-79be1ff079db1b3592f8565ed0a0cdb9.js","./_expo/static/js/web/account-forgot-eabfcfb201d6449937255fe34a6716b1.js","./_expo/static/js/web/account-signin-2d648d51b5f4ad570f020716206089d6.js","./_expo/static/js/web/add-chooser-86f26ec8a2669b5babbe380cdc847bd5.js","./_expo/static/js/web/checkin-3f286398e229b849f7893959fbf208f0.js","./_expo/static/js/web/club-pick-d13341e9757567cc3d5ec074cee8e78d.js","./_expo/static/js/web/compare-ca4bd359fbabf6192d0d26c34598719b.js","./_expo/static/js/web/competitions-pick-7eae4c3958825b5813980e168f27f8dd.js","./_expo/static/js/web/correct-ticket-c79c7e522229f1d82f6d44a8e85cad27.js","./_expo/static/js/web/doubleheader-1c01a4d6b592ca7925db5385f85d1ed1.js","./_expo/static/js/web/entry-db9d41874783b15c050dc938e61ce499.js","./_expo/static/js/web/grounds-11592a2d19404d3ed2e51fb1e6c95763.js","./_expo/static/js/web/help-0e90f2345e3e5d29c1bcf69c3b8be7b9.js","./_expo/static/js/web/import-db9a7e9aa0fba2e20105cb73f0b52251.js","./_expo/static/js/web/index-cac2aadddc5c79deb402e2e74683ceea.js","./_expo/static/js/web/live-b4796d982d06aac9d92601cb72191ce1.js","./_expo/static/js/web/map-0b58971c754a87b78df25d16a7b5c6bf.js","./_expo/static/js/web/map-fdb95db42f4eb1ce4891a4c0d56c058f.js","./_expo/static/js/web/match-add-bbed9ac245220b7f6d4d9b5097772c8d.js","./_expo/static/js/web/matchday-more-10fe2923a16c781a0ade1e3533a88538.js","./_expo/static/js/web/my-xi-c3d0a67ad18e58fb337138276d315462.js","./_expo/static/js/web/on-this-day-3ae6c1c2c2ec087a33db966b6a7e8edc.js","./_expo/static/js/web/passport-1f58f8e1cb363de4ceb278cab68763e9.js","./_expo/static/js/web/photos-c68db06fa282bacaf7b6726066336bcd.js","./_expo/static/js/web/planner-7074feeedaa71f9042005b2e49d4ae4a.js","./_expo/static/js/web/puzzle-ecba7bc628c185dc84d1632faaa31224.js","./_expo/static/js/web/search-5ef73e1ad177fca072d9fab0c121090c.js","./_expo/static/js/web/season-add-ef691e3f0d4b5011dd8ae5d873749235.js","./_expo/static/js/web/settings-71203d8e8b253f87285453756772205c.js","./_expo/static/js/web/share-ticket-256fca395f7f3fe3beda8c60a2c91562.js","./_expo/static/js/web/shirt-add-b9ac7b69fec3b886be1c8c39ad7a9d46.js","./_expo/static/js/web/shirts-ae68094b3a5e744804a8724264a09bba.js","./_expo/static/js/web/sources-585247d196ee313b5ef289dc680bd6e6.js","./_expo/static/js/web/tickets-ac38d7968276deec2d8c7e9d33dbf89f.js","./_expo/static/js/web/tour-add-acc75b13f144fe6d2b113239b5123a78.js","./_expo/static/js/web/trip-results-3a9f00642a2412d4d4c55d994b187069.js","./_expo/static/js/web/trips-a85d95784090a94a6b96cc927709503e.js","./_expo/static/js/web/trophies-f7a30e48798b1a9db31f45c40f2e4897.js","./_expo/static/js/web/visit-add-54e8c36f9b8b699c6573aa6731e16908.js","./_expo/static/js/web/visit-notes-3e037bd3ffe104ec0312cf2608b6042a.js","./_expo/static/js/web/welcome-9932e1c72edfc1780ed40da49cdb4885.js","./_expo/static/js/web/wrapped-0eb5474325c454a1f649aedf22ee9017.js","./_expo/static/js/web/you-6f91d9ad3ac31c0639eabc319071f92d.js","./sql-wasm-aa0b42c828ef.wasm"];
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
