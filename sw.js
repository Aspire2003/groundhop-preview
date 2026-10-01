// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline. The bundle (hashed
// names) and fonts are cached on first use. 20261001234021 is replaced at build time.
const CACHE = 'groundhop-20261001234021';
// Match data files whose URL names their content (data/<name>.json?v=<hash>, src/data/files.web.ts):
// the same URL is always the same bytes, so they are served straight from here without asking the
// network, and kept across deploys -- a new build only downloads the files that really changed.
// Not versioned by build (not "groundhop-..."), so activate below leaves it alone.
const DATA_CACHE = 'gh-data-v1';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-7bfbfebcf1813a2668344bce7fe6c4d9.js","./_expo/static/js/web/[code]-a7c34118456cb82a2e57b08e954753c5.js","./_expo/static/js/web/[doc]-a651cddf3ef58021a04d540729f861b0.js","./_expo/static/js/web/[id]-0b1eaae5fd6bc73222ab19faa71e094b.js","./_expo/static/js/web/[id]-4dc070a7eeaa49919ff790081cfd2bce.js","./_expo/static/js/web/[id]-639b351372d16450fdb4172c65ef11a9.js","./_expo/static/js/web/[id]-89a47c721e9ad8f8ebda9ec2768eb089.js","./_expo/static/js/web/[id]-9d9bad0b7cb93910d5da8ccb5262e580.js","./_expo/static/js/web/[id]-f5de1d04ac34f1113a4770d08cc47904.js","./_expo/static/js/web/[id]-f9fc75c0c4b995e1ab428176e2aaec57.js","./_expo/static/js/web/__common-97cdc56f4a3f994c6717eeea177dee2a.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-19537437174a9516984c0eb321a64299.js","./_expo/static/js/web/_layout-a7a134d1ed05f3fa0dc586760ac29104.js","./_expo/static/js/web/account-99803532f803818b3c10f5027bd6f5f6.js","./_expo/static/js/web/account-forgot-4dbd018e04aa1e8ca0ff1b9602462edd.js","./_expo/static/js/web/account-signin-3c5218aea61085b5024aa896e7dea0ef.js","./_expo/static/js/web/add-chooser-7e0c058404cc5430b9935a3a309a8d32.js","./_expo/static/js/web/all-grounds-e988db528e67aec74709ba9547b4bc45.js","./_expo/static/js/web/checkin-b8f4bfc2f09329022b0b062580c72dc2.js","./_expo/static/js/web/club-pick-e07f0549144d7533d4bcb373847d3b0f.js","./_expo/static/js/web/clubs-seen-2780d1ed400b8da8f7b6ae406656442b.js","./_expo/static/js/web/compare-2d10f2c86745db88a6f3a14dfcad3e6e.js","./_expo/static/js/web/competitions-pick-f2abf6943f390e28b04eaedde64a3fdd.js","./_expo/static/js/web/correct-ticket-75e99ab6daba73b708c02900d30a733b.js","./_expo/static/js/web/countries-76996e97c080919d46f718fca7ab2e56.js","./_expo/static/js/web/doubleheader-c1188e252602db97280b6b9ca8f2526a.js","./_expo/static/js/web/entry-1a5c0c2d19125ee681bcaee7163d19df.js","./_expo/static/js/web/grounds-867934a006da304de58229e1091a28dd.js","./_expo/static/js/web/help-c41d90d5b883e428d90b8dadd85ad6dc.js","./_expo/static/js/web/import-649c1d102518e1151d75a8024374ed43.js","./_expo/static/js/web/index-5e5355b2f44e57849faa9fd102e7b621.js","./_expo/static/js/web/live-cb968d30cce97dc34dab2f17972ba48d.js","./_expo/static/js/web/map-064d389a3ef5480f1229037423c1a598.js","./_expo/static/js/web/map-6353166577483e20e1304c0d26277cc6.js","./_expo/static/js/web/match-add-00c3d597aba22022b003dbf8504c67d6.js","./_expo/static/js/web/matchday-more-be14ca8810422da6ca4908a7880d3807.js","./_expo/static/js/web/my-numbers-9f42c5ea87d087f48b99e2a389bed92c.js","./_expo/static/js/web/my-xi-c06e209e587ec88d193ad911c3a36394.js","./_expo/static/js/web/on-this-day-9b103303622de44e77935fa917b59e07.js","./_expo/static/js/web/passport-750d1231bdb2cc34ba49e56b6493c802.js","./_expo/static/js/web/photos-187e43738f11188ccec8b63c36ae5bc1.js","./_expo/static/js/web/planner-dc3a1b301c69f0c187e471d061e65a60.js","./_expo/static/js/web/puzzle-99f6895df5adba0676fcf4bf0f73c649.js","./_expo/static/js/web/search-94a3e00940f51a67535fb609d307cafb.js","./_expo/static/js/web/season-add-a91d4618569a855f78250392dfe417d2.js","./_expo/static/js/web/settings-1b906d0468d31ad78b1a38e5f4dd8553.js","./_expo/static/js/web/share-ticket-beb31a76ac9acd7c5d493f624f4c80bc.js","./_expo/static/js/web/shirt-add-0956ea5c6d2f4fc421c46149aa64a943.js","./_expo/static/js/web/shirts-09ef8f27c68c629bedbb054a99946c45.js","./_expo/static/js/web/sources-f0f4c3f7ae9bc20bf292a09c4ac9ea30.js","./_expo/static/js/web/tickets-e74bf94569f5e42592a941831c250716.js","./_expo/static/js/web/tour-add-6d4e0c75aae84499a0844ad4b83f595f.js","./_expo/static/js/web/trip-results-1df1dcff3b0a5709f1bb85e61ee7b1dc.js","./_expo/static/js/web/trips-aa22fd481a9e1d20044d253cc88a1d49.js","./_expo/static/js/web/trophies-db21535cdecc603f927491879de5b493.js","./_expo/static/js/web/visit-add-abd49c6e7c22b39c10d612ec67a343f9.js","./_expo/static/js/web/visit-notes-3b945b4a13b16ea55375e9e28cfdeee0.js","./_expo/static/js/web/welcome-88cb57ad7f11d2374cfe01efd301877e.js","./_expo/static/js/web/wrapped-aa0419c2c5085c55df18a9f542fc12c3.js","./_expo/static/js/web/you-c85a76e6fde044cc830a3311777ea5ad.js","./sql-wasm-aa0b42c828ef.wasm"];
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
