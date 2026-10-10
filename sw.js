// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline. The bundle (hashed
// names) and fonts are cached on first use. 20261010110509 is replaced at build time.
const CACHE = 'groundhop-20261010110509';
// Match data files whose URL names their content (data/<name>.json?v=<hash>, src/data/files.web.ts):
// the same URL is always the same bytes, so they are served straight from here without asking the
// network, and kept across deploys -- a new build only downloads the files that really changed.
// Not versioned by build (not "groundhop-..."), so activate below leaves it alone.
const DATA_CACHE = 'gh-data-v1';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-293ecb538726f54231329bbc7d6a0458.js","./_expo/static/js/web/[code]-1ea9440ed810871b2c091cc23286e89b.js","./_expo/static/js/web/[doc]-fe04c37c953f820aebb0cc7769a2aa3c.js","./_expo/static/js/web/[id]-18c1b223460ad05ecebf048183adecb1.js","./_expo/static/js/web/[id]-5b4a97631654d5562aa0d65379b75f4d.js","./_expo/static/js/web/[id]-6422ec6a5285c2dea53988dc7c427fba.js","./_expo/static/js/web/[id]-6df6fc03860fd532276a2e4826754b4c.js","./_expo/static/js/web/[id]-c529800a4b82a1687dc62c2b30029490.js","./_expo/static/js/web/[id]-d0d93245f175a09db030549df06e29f1.js","./_expo/static/js/web/[id]-da5c771f5aeeeef41ea9373344888bfa.js","./_expo/static/js/web/__common-010d88d8b97a1e161ae9f9c769e3841a.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-64d6b2e351200ee4b797e0afa1122b8c.js","./_expo/static/js/web/_layout-ce8f60255ce714679ccf8778157d2fb5.js","./_expo/static/js/web/account-a6dce24a88d42592a3f5c307e4a06722.js","./_expo/static/js/web/account-forgot-95ca7781c4245e2b6bf5a91c353107fe.js","./_expo/static/js/web/account-signin-eeb4f0357e7e8e0c1ae774a726b7ace3.js","./_expo/static/js/web/add-chooser-c16b469ae70f00d21cd80232322d7665.js","./_expo/static/js/web/all-grounds-777d65557fb8c1de65aeacb35de1c816.js","./_expo/static/js/web/checkin-c111c398c066f69e455ebfc4b417c131.js","./_expo/static/js/web/club-pick-c165b31de249c40b582fec8850e329dd.js","./_expo/static/js/web/clubs-seen-d5f9c016f6504f5495f4f9043aefad2d.js","./_expo/static/js/web/compare-3cc753b396aae9eddbeb11560ff594c1.js","./_expo/static/js/web/competitions-pick-001ae29681889a83aa6636fb5bc11086.js","./_expo/static/js/web/correct-ticket-c917fb9de558d74db0fe8623c08980f5.js","./_expo/static/js/web/countries-3f9d721139b6115a9035e5d43cbf3bd2.js","./_expo/static/js/web/doubleheader-92760e6059640e46bfc66637a0105fed.js","./_expo/static/js/web/entry-a9077f18aa1526024ba3de9bb1397bb1.js","./_expo/static/js/web/grounds-10e2770f82cb51914082f810d9abdd56.js","./_expo/static/js/web/help-697cbb8a046d805560afa8ba1d40b39c.js","./_expo/static/js/web/import-e6620f7969f78de721b6d57a5f4d75ec.js","./_expo/static/js/web/index-84f6dfbbe84ef9328d73690a4cd67152.js","./_expo/static/js/web/live-422f1e47cb049c513e384c53f0eda461.js","./_expo/static/js/web/map-1d7525671280bbf509e5de530d70d2d7.js","./_expo/static/js/web/map-e13dc0ce86f8b4026a167bf101c4b0b1.js","./_expo/static/js/web/match-add-3ea566331f12312023ea8906b16e805d.js","./_expo/static/js/web/matchday-more-f1be2439c623abf0c6ff9f51bafb59a4.js","./_expo/static/js/web/maybe-5a11bd81baacf862ce877401a1e3b6d8.js","./_expo/static/js/web/my-xi-0152cac5eb4fee26dd94769ea6d0631a.js","./_expo/static/js/web/on-this-day-695b193746e87aa98ecd7f50d72ff60c.js","./_expo/static/js/web/passport-1985050d8b5ac5c72e1fdf98c98a022e.js","./_expo/static/js/web/person-664f22a5bc2d939e01356ebc7d2f44ba.js","./_expo/static/js/web/photos-e94849d98d14b5aa3677c8590c4a603c.js","./_expo/static/js/web/planner-6028a3977e4b50504e62272718711a88.js","./_expo/static/js/web/puzzle-b16a5aec91e3b5499799072135538987.js","./_expo/static/js/web/search-80e930d443b83fdeb56f714bbca246dc.js","./_expo/static/js/web/season-add-bfc6c2277efcffd75983c9137d2c3a13.js","./_expo/static/js/web/settings-9887de8a8762097cc43ceef737dad3a8.js","./_expo/static/js/web/share-ticket-1066ac42f00462a218f70e0b7dd4cb03.js","./_expo/static/js/web/shirt-add-d23592c736e82e18035a5d69a2a16ce5.js","./_expo/static/js/web/shirts-b5949c5f48fd17442f83ead64f93b2fc.js","./_expo/static/js/web/sources-c883677f015cb281d1efcd8d641f48ff.js","./_expo/static/js/web/tickets-7fa02bbe17fcd59d0e5a4e3ae5ffae82.js","./_expo/static/js/web/tour-add-c0a58bafb0e096abc27f256de0319ea6.js","./_expo/static/js/web/trip-results-5ba1cb3824cf82c153f04fbabdb1c718.js","./_expo/static/js/web/trips-adf4cc1c6ea237b195d36025eed4ba39.js","./_expo/static/js/web/trophies-7779bdb032099ba129e17c95afa4b551.js","./_expo/static/js/web/visit-add-cf42aa5518e0878168e5436abd57dae2.js","./_expo/static/js/web/visit-notes-0cc1a51c75a4c846e70e53e6b436a285.js","./_expo/static/js/web/welcome-c81f398200b8570e550a6a8701aa8f9f.js","./_expo/static/js/web/wrapped-49a1b521b1e172e09aea197a9553a68e.js","./_expo/static/js/web/you-c3a4ddfba754f96e2a0de13534fa5768.js","./sql-wasm-aa0b42c828ef.wasm"];
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
