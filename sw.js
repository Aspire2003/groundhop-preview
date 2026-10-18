// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline. The bundle (hashed
// names) and fonts are cached on first use. 20261018163614 is replaced at build time.
const CACHE = 'groundhop-20261018163614';
// Match data files whose URL names their content (data/<name>.json?v=<hash>, src/data/files.web.ts):
// the same URL is always the same bytes, so they are served straight from here without asking the
// network, and kept across deploys -- a new build only downloads the files that really changed.
// Not versioned by build (not "groundhop-..."), so activate below leaves it alone.
const DATA_CACHE = 'gh-data-v1';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-f610742565309593daa2dcdbd84d56e7.js","./_expo/static/js/web/[code]-6fa7be44d30464aeef8e29f42aa9c186.js","./_expo/static/js/web/[doc]-7631a2f4cf99bdd90716b94608246671.js","./_expo/static/js/web/[id]-0f0fcd24d3e9003788788e4d346509fc.js","./_expo/static/js/web/[id]-9a494fa7c4c69af7ae4081545c8d1273.js","./_expo/static/js/web/[id]-b32747e1c0223d3335b90f86228168f7.js","./_expo/static/js/web/[id]-ba8d88baca7a4a2f0034c468ec17bc97.js","./_expo/static/js/web/[id]-dbc6cb781a8a8cbe5fb1c385e058dd39.js","./_expo/static/js/web/[id]-e1522caee6e2461391e8a3a03a74aeec.js","./_expo/static/js/web/[id]-e34ffab9db13ad13bc5862028fd299ac.js","./_expo/static/js/web/__common-74dd22f7ec63e2b18d2ede1ab24f7255.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-253023f4757c7a727443bf176e8abae3.js","./_expo/static/js/web/_layout-6f1c58d41ede063ddcbac4c3bc492e06.js","./_expo/static/js/web/account-3b3c542bc76251a839b0e4e56b220e82.js","./_expo/static/js/web/account-forgot-2a06b713cae41578c12589f299f46351.js","./_expo/static/js/web/account-signin-1f31924418e5ae63d2c35bf255760e51.js","./_expo/static/js/web/add-chooser-2c0c47647910413d6b99b2cbdf8c340c.js","./_expo/static/js/web/all-grounds-e5ec4fabafa9cc8dc8c3b677385c2366.js","./_expo/static/js/web/checkin-e5642ac89d3494718875620aa0e87754.js","./_expo/static/js/web/club-pick-8d5b8c682b8e97378f74232412ed3672.js","./_expo/static/js/web/clubs-seen-810213cc9431dd2b1f6927f58b9ef138.js","./_expo/static/js/web/compare-a3afb014cd86a167563a23720dbb3da1.js","./_expo/static/js/web/competitions-pick-5123810f4976eb19f89b98d9f2cf1ddc.js","./_expo/static/js/web/correct-ticket-60d99d64208237232b283889c75c65b9.js","./_expo/static/js/web/countries-66e7f301f38e2d785a14263b9d0fc894.js","./_expo/static/js/web/doubleheader-48a3742a34c12d3e4a8b6ab0855c6fa7.js","./_expo/static/js/web/entry-d88204ed9ab988c8e5e6e357c5929b86.js","./_expo/static/js/web/feedback-8c2af73a831d2286842c9c61db48e2b1.js","./_expo/static/js/web/grounds-0a4555c87574403128c5ecad992864c8.js","./_expo/static/js/web/help-7583aaa934476ec8d5e91769698c6b73.js","./_expo/static/js/web/home-town-1fceadb778916b2c279af5b446d75deb.js","./_expo/static/js/web/import-2ecd28c3606f216d5b35c3c224ac455d.js","./_expo/static/js/web/index-aaa19c45c3d396842a25a6520be2e810.js","./_expo/static/js/web/live-1cc5f48497d4bd55579ccb85be19f71e.js","./_expo/static/js/web/map-3a234dcd6a4258a9fb0f3215c6941558.js","./_expo/static/js/web/map-ae299b1d9a7738917da6f799d00080e6.js","./_expo/static/js/web/match-add-21ad48c757074d25ae4ea4d7ceb05ff1.js","./_expo/static/js/web/matchday-more-03fd594f2edaf97dbbc2dd142f7a12f5.js","./_expo/static/js/web/maybe-5e989753d185e7e2e4a995ea065515a6.js","./_expo/static/js/web/my-xi-3b79766c59b15449fbebb0efef02b687.js","./_expo/static/js/web/on-this-day-c3e52570842e60a7de8d23f90965fab0.js","./_expo/static/js/web/passport-dd38052402b6a079228207061d6856e9.js","./_expo/static/js/web/person-94f8aec9160c063b7accebaf4aac3871.js","./_expo/static/js/web/photos-a57a75211c71e2d86b35c53c1b622229.js","./_expo/static/js/web/planner-56be15ba8416572167a0548d6b648149.js","./_expo/static/js/web/puzzle-da121b0494334d80f550ae7b384efa88.js","./_expo/static/js/web/search-8a906973a1a1804ed00e293d3cccf933.js","./_expo/static/js/web/season-add-eb196493d0981c175ade9eadb0f545ec.js","./_expo/static/js/web/settings-b68549195ed65205d2d279aad36894c6.js","./_expo/static/js/web/share-ticket-669939bdb6ebec9cf0bcb1fe98b7c1b7.js","./_expo/static/js/web/shirt-add-32f3e6f833d0bc2cfc72d0afe5162678.js","./_expo/static/js/web/shirts-4f6f0f5ae037dd49fa08e5ab00cfbb14.js","./_expo/static/js/web/sources-35dba39f2b9c04db91ea161614444e69.js","./_expo/static/js/web/tickets-7f376fb42f278a0a5d921f9e6a44bdb1.js","./_expo/static/js/web/tour-add-89b9e0d76ea73b567d2ead8ab8565a0c.js","./_expo/static/js/web/trip-results-377e9d8e8c1966277a780d980b710946.js","./_expo/static/js/web/trips-cda280d21ebb3a2fa0d58e2f6c2e33ff.js","./_expo/static/js/web/trophies-04ea42b85ac0ea1b69a53b72172fdbc1.js","./_expo/static/js/web/visit-add-26597364071dab37267a70f6cebdb218.js","./_expo/static/js/web/visit-notes-e3276a8a59cbdedc444430ee3c946d46.js","./_expo/static/js/web/welcome-f268e18b79fe284f221daddd0c5ecfb4.js","./_expo/static/js/web/wrapped-80edc972671c1e82fb6e0c62be9c27c6.js","./_expo/static/js/web/you-ed972cf06e830282f2c7b8f72fcc6726.js","./sql-wasm-aa0b42c828ef.wasm"];
// The versioned data files the first screen needs (filled in at build time): kept at install, so the
// next start reads them from here. The page usually fetched them moments ago, so this is mostly the
// browser's HTTP cache answering. Best-effort: a file that fails is simply fetched on first use.
const DATA = ["./data/web-snapshot.json?v=28bedba3a63f","./data/club-links.json?v=6a9cbc41201b","./data/club-names.json?v=5f1c6d22a2cf","./data/club-crests.json?v=d4a078be9614","./data/team-grounds-openfootball.json?v=0b5e5d7fd791","./data/espn-venues.json?v=23c314323ea7","./data/espn-season.json?v=45b80d081cb9","./data/team-grounds-de.json?v=933bcbbc46d2","./data/rbfa-season.json?v=d84429a5dbb9","./data/crest-local.json?v=5a8b69d13300"];

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
