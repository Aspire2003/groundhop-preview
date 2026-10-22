// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline. The bundle (hashed
// names) and fonts are cached on first use. 20261022190650 is replaced at build time.
const CACHE = 'groundhop-20261022190650';
// Match data files whose URL names their content (data/<name>.json?v=<hash>, src/data/files.web.ts):
// the same URL is always the same bytes, so they are served straight from here without asking the
// network, and kept across deploys -- a new build only downloads the files that really changed.
// Not versioned by build (not "groundhop-..."), so activate below leaves it alone.
const DATA_CACHE = 'gh-data-v1';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-4e4b507f9f4fd6c381f3301783e7cd1b.js","./_expo/static/js/web/[code]-97cef5087279bfbdee35cd057f299402.js","./_expo/static/js/web/[doc]-f61617db0958b89d452e58539f2ac3e8.js","./_expo/static/js/web/[id]-28c2a1a6b5485de4ce7646d1e8cb3372.js","./_expo/static/js/web/[id]-2d2a73069c4948989bf462e29d0a12b3.js","./_expo/static/js/web/[id]-3468c47b0591ac5c689be6ced013d937.js","./_expo/static/js/web/[id]-6ffacfec0b12bd9bae3f80bc7c26de64.js","./_expo/static/js/web/[id]-8750360fd596c65db994fc9371ae081b.js","./_expo/static/js/web/[id]-9b02879e37f6037515d3803f6bf37bf9.js","./_expo/static/js/web/[id]-ab8173d15936363254a18a1f8e708dac.js","./_expo/static/js/web/[id]-b021148665a6c09e112d0d858ae67f41.js","./_expo/static/js/web/__common-b112124776964ca44be267086837cdca.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-32c0c7196647dbae469d212b97cc8836.js","./_expo/static/js/web/_layout-71b33fd591365ceb29fcf8a5c3c7e977.js","./_expo/static/js/web/account-9f04fe06c8c1384e063f2b30abb34bc1.js","./_expo/static/js/web/account-forgot-931f9f336fb1572b8333067fabfc5b86.js","./_expo/static/js/web/account-signin-5dc2f90135bae5cb8693beac0a4bed6f.js","./_expo/static/js/web/add-chooser-1e4c9ea4fb9b67eef7d96398d3511c31.js","./_expo/static/js/web/all-grounds-8875b205148393fd2de60a4fb458c261.js","./_expo/static/js/web/checkin-d0154978eba9daf7b6c8594395c10191.js","./_expo/static/js/web/club-pick-385716c29a38653af472bee761a59ada.js","./_expo/static/js/web/clubs-seen-dd40724d21b108854e6c36df984097d1.js","./_expo/static/js/web/compare-4c15424518dec339543a86eb86ac9d7c.js","./_expo/static/js/web/competitions-pick-4dad86882b574830aa08a9cd7e719edb.js","./_expo/static/js/web/correct-ticket-5152a2535bd7077f47557964e8997f67.js","./_expo/static/js/web/countries-a812e7fb7fa8aacd563ae3ed166a63f3.js","./_expo/static/js/web/doubleheader-5a7231f96e0be6cea0afd10ebc05a9f6.js","./_expo/static/js/web/entry-89428ee222c4fd895ec3fb7a40309682.js","./_expo/static/js/web/feedback-6591a8ae4d2da650a1744968a5d146f2.js","./_expo/static/js/web/grounds-4f24e43823503ac1b58ba00f55cdcb84.js","./_expo/static/js/web/help-6a3ac2d56c9c51d0c27779068d0f9058.js","./_expo/static/js/web/home-town-e482d1673baa619db696e2712a442df9.js","./_expo/static/js/web/import-6880ea8a93cc4c2ae47e365490797357.js","./_expo/static/js/web/index-8d03733c89c5c15a90b9178fc00f862b.js","./_expo/static/js/web/live-27de09b3176d946a21a6f0d15fc44fce.js","./_expo/static/js/web/map-6aa853a72537dd8b520d44c0bfff6468.js","./_expo/static/js/web/map-91f99ef57a671aa4eec96884962d8574.js","./_expo/static/js/web/match-add-aa96a81af7105be47043248d28df411c.js","./_expo/static/js/web/matchday-more-f611cfc1a3e3926cc9d18679e4876834.js","./_expo/static/js/web/maybe-c1f3c16511209b7551ea20532d24ab43.js","./_expo/static/js/web/my-xi-4f3c91c0e1c9007e60286b231b4e4f25.js","./_expo/static/js/web/on-this-day-c815afd3aabc0c5107fe848932fd6036.js","./_expo/static/js/web/passport-26d81a4393d121426d9865ea10592f1c.js","./_expo/static/js/web/person-4ed826c669092c67916c71c1931d3f79.js","./_expo/static/js/web/photos-871e839bae173d0c659e4be0e54a935e.js","./_expo/static/js/web/planner-37693fac50df8d5ba30bca4727403765.js","./_expo/static/js/web/puzzle-38a6dc09dd08a904b2937ac401d4f300.js","./_expo/static/js/web/search-a30f7853d7751d1169b36756c64a8bfa.js","./_expo/static/js/web/season-add-29a9ab58be6aa0130c1eeaec397d071e.js","./_expo/static/js/web/settings-4c9d7ea75d4c1cb1febe4f59b13364a1.js","./_expo/static/js/web/share-ticket-16d2171f9fc1fc77d46a88deaccd1d32.js","./_expo/static/js/web/shirt-add-176741a8181eb01b50f5a236f66a346d.js","./_expo/static/js/web/shirts-d3e00166b83065c34c8c80960396ff0b.js","./_expo/static/js/web/sources-1b3843a8ad2ea9fe810bbbe95855b32d.js","./_expo/static/js/web/tickets-4bc995821ef37a55e6be6fcefe96351d.js","./_expo/static/js/web/tour-add-4712522a27d5353f86f07cf18dee7d4f.js","./_expo/static/js/web/trip-results-c8de098b8880fbbc93504fc05b7b88d1.js","./_expo/static/js/web/trips-96a30b6f5c582c77d4254a37f61b64b3.js","./_expo/static/js/web/trophies-c2ff95c4a1a5beeb4776d08f28b2fc56.js","./_expo/static/js/web/visit-add-23a42e8a4047cea7398ee636095bca59.js","./_expo/static/js/web/visit-notes-0881e9263d231bb6c78a2d2757ca2eae.js","./_expo/static/js/web/welcome-5d5a0236e289679e4a7e9364ffa14932.js","./_expo/static/js/web/wrapped-c0bfb2b7ecc7ee76cf8f2e3bd326bc64.js","./_expo/static/js/web/you-a325a4a607976e199da562fac9cf4152.js","./sql-wasm-aa0b42c828ef.wasm"];
// The versioned data files the first screen needs (filled in at build time): kept at install, so the
// next start reads them from here. The page usually fetched them moments ago, so this is mostly the
// browser's HTTP cache answering. Best-effort: a file that fails is simply fetched on first use.
const DATA = ["./data/web-snapshot.json?v=c52a6757a950","./data/club-links.json?v=6a9cbc41201b","./data/club-names.json?v=5f1c6d22a2cf","./data/club-crests.json?v=d4a078be9614","./data/team-grounds-openfootball.json?v=0b5e5d7fd791","./data/espn-venues.json?v=4a2674d049a4","./data/espn-season.json?v=134bcb0b0719","./data/team-grounds-de.json?v=933bcbbc46d2","./data/rbfa-season.json?v=d84429a5dbb9","./data/crest-local.json?v=5a8b69d13300"];

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
