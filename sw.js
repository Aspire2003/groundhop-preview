// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline. The bundle (hashed
// names) and fonts are cached on first use. 20261002011647 is replaced at build time.
const CACHE = 'groundhop-20261002011647';
// Match data files whose URL names their content (data/<name>.json?v=<hash>, src/data/files.web.ts):
// the same URL is always the same bytes, so they are served straight from here without asking the
// network, and kept across deploys -- a new build only downloads the files that really changed.
// Not versioned by build (not "groundhop-..."), so activate below leaves it alone.
const DATA_CACHE = 'gh-data-v1';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-7bfbfebcf1813a2668344bce7fe6c4d9.js","./_expo/static/js/web/[code]-9312d89003170804b6c76f87a129cb5b.js","./_expo/static/js/web/[doc]-e265613b93dc71a3ab46098445075d65.js","./_expo/static/js/web/[id]-31515a469693ab810f570bffd70c8307.js","./_expo/static/js/web/[id]-4957195527d2d3b63195323d7c586e0d.js","./_expo/static/js/web/[id]-54c949ef4c6fa5a6d73b227330815634.js","./_expo/static/js/web/[id]-57db8287954398fef7e0f12ca15cfbaa.js","./_expo/static/js/web/[id]-cd67f28da2c4503155e002f95d94e2e1.js","./_expo/static/js/web/[id]-e2888ff7feb1357beec0a67caf23f48e.js","./_expo/static/js/web/[id]-fdb0e5d2d86fd4a68b312c00ccfbca48.js","./_expo/static/js/web/__common-5751cc059156b542ce63bfdbe477afbb.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-a7a134d1ed05f3fa0dc586760ac29104.js","./_expo/static/js/web/_layout-f8e0e1948c7fa1299ddbfc4725e815fb.js","./_expo/static/js/web/account-b7b0593330170e01dc942954bef1279d.js","./_expo/static/js/web/account-forgot-a7156813319cf0b97d7207df789211ca.js","./_expo/static/js/web/account-signin-3cc8422f60c5ada755990c293657665b.js","./_expo/static/js/web/add-chooser-f265f4590a79e2c609edbddba972eb2f.js","./_expo/static/js/web/all-grounds-4985edd0f3fc0ad6965caf932b6cee1e.js","./_expo/static/js/web/checkin-0d4324ee33ef26783ccb4818b85b1317.js","./_expo/static/js/web/club-pick-92c2526c26fcbe17c2e4246a9b256a1c.js","./_expo/static/js/web/clubs-seen-e6ac4ce41e20a64bdf047472621be8e3.js","./_expo/static/js/web/compare-06950bf2b3038dd7b45064be4d94147f.js","./_expo/static/js/web/competitions-pick-2b227c5d0fa8c4bbc69c8d8a5fb44e1e.js","./_expo/static/js/web/correct-ticket-6a690f2f0b6b9c46b245c3a9911665fc.js","./_expo/static/js/web/countries-6d963275ea09ae0975a4750880a48a6c.js","./_expo/static/js/web/doubleheader-48ffc76d3a97d37c8f4683d921c53598.js","./_expo/static/js/web/entry-e5022f06acb6221629d7edb0d45dd4b1.js","./_expo/static/js/web/grounds-819bc6a5dba7bcddd867a71f62bf68b4.js","./_expo/static/js/web/help-0e7a8dab5809d2112a84734d7d5856f8.js","./_expo/static/js/web/import-0c0595fc06151a28d0ca227e6b43ad5a.js","./_expo/static/js/web/index-6df6fceddb0c7a5b654e1d9201cb70c4.js","./_expo/static/js/web/live-f32df6f09d8c61b7db41cd0daf87ebf8.js","./_expo/static/js/web/map-7f12e1dec667b0c97b6a6ec17f0a3eeb.js","./_expo/static/js/web/map-f7e98c085995794cc0eeb9fba408cf39.js","./_expo/static/js/web/match-add-7c20be63027bc33f9cc17b5284b15a57.js","./_expo/static/js/web/matchday-more-08098c7305bb5cb1325e83f2bbf901a4.js","./_expo/static/js/web/my-xi-f69b7f9e8744763bf5f5e2cd96de10cb.js","./_expo/static/js/web/on-this-day-8836482f3ba1705bd98bc68fff093720.js","./_expo/static/js/web/passport-b93abaa75c462b25e1499421985acab7.js","./_expo/static/js/web/photos-a9285494647b0b07b273626abe06a2d9.js","./_expo/static/js/web/planner-879236fbc8fd55c756c14e3708c6bc0d.js","./_expo/static/js/web/puzzle-f38dfba0cad8739d85241da84fca0a51.js","./_expo/static/js/web/search-99eda26a7ae71ac923795d73b86c5d4e.js","./_expo/static/js/web/season-add-a7833f8948224f5de3116051ec73ee91.js","./_expo/static/js/web/settings-a95bff7eff7e9fb540b4490624e7a188.js","./_expo/static/js/web/share-ticket-25cec3fc493e3b6917d8fca0f4648a6e.js","./_expo/static/js/web/shirt-add-a67459d8b4ec93d0ce1ed2e3102e5ae2.js","./_expo/static/js/web/shirts-f3520e05b98abc83c49e5386b6149e84.js","./_expo/static/js/web/sources-f86cbd5edd14c2ea3288f1dac06ef5fb.js","./_expo/static/js/web/tickets-30dbc588e64ffdce846044a780c9ff75.js","./_expo/static/js/web/tour-add-68c85f9843517ad062b72c957e5e8da8.js","./_expo/static/js/web/trip-results-cd1c71d31458edbca80f8fd265e8e55d.js","./_expo/static/js/web/trips-3193174e0d23ebf669d7d5e2be2caad3.js","./_expo/static/js/web/trophies-369f5cbc7dac32c1898db80e7b2d1ece.js","./_expo/static/js/web/visit-add-4778e68868c9a9bf8890a4b268a7058f.js","./_expo/static/js/web/visit-notes-4511655d5d24084a4b4295a5f07245f1.js","./_expo/static/js/web/welcome-ffb30416d52783b698919befc488b5c3.js","./_expo/static/js/web/wrapped-1f64d2fcd141c8ebc24e1aae89f95a15.js","./_expo/static/js/web/you-14a610bb208aae33536e7945d2babff9.js","./sql-wasm-aa0b42c828ef.wasm"];
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
