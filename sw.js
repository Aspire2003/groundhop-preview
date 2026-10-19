// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline. The bundle (hashed
// names) and fonts are cached on first use. 20261019211343 is replaced at build time.
const CACHE = 'groundhop-20261019211343';
// Match data files whose URL names their content (data/<name>.json?v=<hash>, src/data/files.web.ts):
// the same URL is always the same bytes, so they are served straight from here without asking the
// network, and kept across deploys -- a new build only downloads the files that really changed.
// Not versioned by build (not "groundhop-..."), so activate below leaves it alone.
const DATA_CACHE = 'gh-data-v1';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-4e4b507f9f4fd6c381f3301783e7cd1b.js","./_expo/static/js/web/[code]-d750fa3332c1ba205f6c83a5925e7d75.js","./_expo/static/js/web/[doc]-c6db78a2c6f26ede17f5fbc5d78ff672.js","./_expo/static/js/web/[id]-00e1225b54db61e1b87dbd0196d66d33.js","./_expo/static/js/web/[id]-7930c8a3201cd91f695263a3d2c160c2.js","./_expo/static/js/web/[id]-7c3af10ea9f7bdea376d8c060e5ce56c.js","./_expo/static/js/web/[id]-8324320f4adca47b83a203723149fe86.js","./_expo/static/js/web/[id]-86663d0cf41ca38e0ae81b739a6c902e.js","./_expo/static/js/web/[id]-8de3c65860d225a36c67d1aceb2b29ec.js","./_expo/static/js/web/[id]-94ac1eb462a339085da22cea09d4cb30.js","./_expo/static/js/web/[id]-c4ca0bf73df098ebdbd61e61271e5384.js","./_expo/static/js/web/__common-093e6d48786713f5aa5d7b1cf8d67e48.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-1c73e5be8bdcc390b9c0b5254d4195e7.js","./_expo/static/js/web/_layout-32c0c7196647dbae469d212b97cc8836.js","./_expo/static/js/web/account-4ad04157cd069430e624338d5d117ee3.js","./_expo/static/js/web/account-forgot-ad01ef946fe8929404dbd1cfb5b6eb1e.js","./_expo/static/js/web/account-signin-6b42b3c002541896aab2f9cbbcad91fd.js","./_expo/static/js/web/add-chooser-14dc82c3c7013cfd3a8da325a7618027.js","./_expo/static/js/web/all-grounds-ba954702e133eb87a39459107ab9d1b1.js","./_expo/static/js/web/checkin-60d1bb11f9ade857dab06f9c60373d99.js","./_expo/static/js/web/club-pick-392b07c7a552e6fea06ec977b954db90.js","./_expo/static/js/web/clubs-seen-022788c43d58400748969624beb7a2fa.js","./_expo/static/js/web/compare-0c627aed7da85bac813e72aeeedc1df8.js","./_expo/static/js/web/competitions-pick-2366116a31c5e4147051a794b1b2e743.js","./_expo/static/js/web/correct-ticket-478f0a2d1a4b3707c444d3ae730edd63.js","./_expo/static/js/web/countries-4e8fa2a7f6ada38b8516d2d61061583b.js","./_expo/static/js/web/doubleheader-41d6a1f41a589ec61647f67027914cd5.js","./_expo/static/js/web/entry-135dcf083638cb1bb375cc293e2e4259.js","./_expo/static/js/web/feedback-4735096c6e97c225284dd45609f4a944.js","./_expo/static/js/web/grounds-4f24e43823503ac1b58ba00f55cdcb84.js","./_expo/static/js/web/help-b36697c1f844fb3eac40f558e4e10650.js","./_expo/static/js/web/home-town-f2f03fc0c7a9b2ba3295cd37d8c0d026.js","./_expo/static/js/web/import-65904ca1e57ece4d9b31413c6bb33cd6.js","./_expo/static/js/web/index-8d03733c89c5c15a90b9178fc00f862b.js","./_expo/static/js/web/live-b610e9b59d7bab3a579feb458a4b4c54.js","./_expo/static/js/web/map-0f33879df6f86512c6d7e662583b453c.js","./_expo/static/js/web/map-c408ff48b504290cd354fbe37ea25467.js","./_expo/static/js/web/match-add-17d09e673ee28c0645b2412eb090ec1c.js","./_expo/static/js/web/matchday-more-5e4dabff3ec0fced3ce50abaf43751be.js","./_expo/static/js/web/maybe-aef90875d2da00659d20983367956547.js","./_expo/static/js/web/my-xi-4a3900cd74e8f634f855f3d8188874ad.js","./_expo/static/js/web/on-this-day-426188328cebff5057e850704b70f1f0.js","./_expo/static/js/web/passport-1670cfcd0570ad04921e5226e5092f7c.js","./_expo/static/js/web/person-1a386fdd31167870e12e2265c40e314d.js","./_expo/static/js/web/photos-8c4826586f6a275a4f0c594083507c2b.js","./_expo/static/js/web/planner-a87eab5ac4dffabeae23e0d3d1d5d1de.js","./_expo/static/js/web/puzzle-b2ba58268985d7b7d193862dcf65a05f.js","./_expo/static/js/web/search-e353e2ce79e1e5cc17b29d913ecbca31.js","./_expo/static/js/web/season-add-e3aa7dea64641a718351a5518e395c61.js","./_expo/static/js/web/settings-9c094a587668697d9340ae4ebb0d73fe.js","./_expo/static/js/web/share-ticket-47848f04f7cf9a26a9b5b6ffd08086ad.js","./_expo/static/js/web/shirt-add-1cde263f0e2cc9eaf99b1afdbb11d2a1.js","./_expo/static/js/web/shirts-0782eeaa91d86aafb76290212797ccea.js","./_expo/static/js/web/sources-2cca4e87875e1a956cf7c92408e5373f.js","./_expo/static/js/web/tickets-4bc995821ef37a55e6be6fcefe96351d.js","./_expo/static/js/web/tour-add-f1d9cf0f7642f05a235d9dc9d3b1bec8.js","./_expo/static/js/web/trip-results-84c1a326836be42773f73fde77f4f61a.js","./_expo/static/js/web/trips-d87986b2c6adb8e3c002711b05098951.js","./_expo/static/js/web/trophies-32fc4ed98b8fac1aae3e7966ce4704fb.js","./_expo/static/js/web/visit-add-85657afb43c9eb428660f856e9cdc7e1.js","./_expo/static/js/web/visit-notes-02170fd6930e55f8b0dcf276e1a90300.js","./_expo/static/js/web/welcome-d9d9ba5c1e1bbbf9e04d456d049ce170.js","./_expo/static/js/web/wrapped-88c4681362c88db0a5108b90f4282e00.js","./_expo/static/js/web/you-6366c8d90ad99a6c688b67692a6b0db6.js","./sql-wasm-aa0b42c828ef.wasm"];
// The versioned data files the first screen needs (filled in at build time): kept at install, so the
// next start reads them from here. The page usually fetched them moments ago, so this is mostly the
// browser's HTTP cache answering. Best-effort: a file that fails is simply fetched on first use.
const DATA = ["./data/web-snapshot.json?v=c91ff41d32e4","./data/club-links.json?v=6a9cbc41201b","./data/club-names.json?v=5f1c6d22a2cf","./data/club-crests.json?v=d4a078be9614","./data/team-grounds-openfootball.json?v=0b5e5d7fd791","./data/espn-venues.json?v=23c314323ea7","./data/espn-season.json?v=a26bc986a56e","./data/team-grounds-de.json?v=933bcbbc46d2","./data/rbfa-season.json?v=d84429a5dbb9","./data/crest-local.json?v=5a8b69d13300"];

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
