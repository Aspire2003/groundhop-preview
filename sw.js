// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline. The bundle (hashed
// names) and fonts are cached on first use. 20261112123629 is replaced at build time.
const CACHE = 'groundhop-20261112123629';
// Match data files whose URL names their content (data/<name>.json?v=<hash>, src/data/files.web.ts):
// the same URL is always the same bytes, so they are served straight from here without asking the
// network, and kept across deploys -- a new build only downloads the files that really changed.
// Not versioned by build (not "groundhop-..."), so activate below leaves it alone.
const DATA_CACHE = 'gh-data-v1';
// How long the page itself may take from the network before the kept copy is shown instead.
const NAVIGATE_TIMEOUT_MS = 4000;
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-ab85f95146722cc189159f5dfe7ad1ca.js","./_expo/static/js/web/[code]-8cdae85441bf8e91c9a00cd832822494.js","./_expo/static/js/web/[doc]-92ccf4f9b0bbb13af9471eecdd4ede36.js","./_expo/static/js/web/[id]-0fbb334d55ae53e668f7a39d58ebf6f6.js","./_expo/static/js/web/[id]-310e6237cef7316e858e0a053c912ca4.js","./_expo/static/js/web/[id]-b2fa0fef8578b8699d242a377d05a86e.js","./_expo/static/js/web/[id]-b477dd69e98ee9d97cfd83226f6d4e41.js","./_expo/static/js/web/[id]-c3dc386c00aec015c85fbd8642054bdf.js","./_expo/static/js/web/[id]-cf0dabd6ad29a4aa6b879834e777b140.js","./_expo/static/js/web/[id]-f086132342e350d16f4f02db85584cb1.js","./_expo/static/js/web/[id]-fbb23a351f5c52a7e1c48b7b1e316c86.js","./_expo/static/js/web/__common-ea550c7879d46d94b16fc627aaf5d2a8.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-37ef54f50caf4b1a059f0dd9846ee022.js","./_expo/static/js/web/_layout-f6477aa870c98a064419ef8ed1775478.js","./_expo/static/js/web/account-0605cfc55163cf277c36cd1a8008cdba.js","./_expo/static/js/web/account-forgot-b9351831824b1c2b977f33ea3c5d4c23.js","./_expo/static/js/web/account-signin-6d389a03adb8c827d3a03f0cd6cf5def.js","./_expo/static/js/web/add-chooser-9b98031a990db65e505529873f04b4ce.js","./_expo/static/js/web/all-grounds-4ec2e246255cb8f3347ff98d3124cb2f.js","./_expo/static/js/web/checkin-a6da2a939faa93a347bea9272c46e236.js","./_expo/static/js/web/club-pick-d51d14171a7ce8b2c62ec3b9cf9b4591.js","./_expo/static/js/web/clubs-seen-0634afe7facdc967f8e743642aca9496.js","./_expo/static/js/web/compare-f1268e71feb3d1e8a9098b3c318ced36.js","./_expo/static/js/web/competitions-pick-4476058bfc7fa37c4eed551b899f274e.js","./_expo/static/js/web/correct-ticket-6a75b00b26f547ebbfc44a58ee911eaf.js","./_expo/static/js/web/countries-d3f4bd651b42d99e93344c8e6ed8cd68.js","./_expo/static/js/web/doubleheader-5e99f10b77e7903899ddfbff65c7ba38.js","./_expo/static/js/web/entry-135f38fda5a7c8b74dfa31d65f511798.js","./_expo/static/js/web/feedback-1851b105a56fb2fb7a7aa7215be82f6a.js","./_expo/static/js/web/grounds-1658d0003bda330db66875091d4b9ac5.js","./_expo/static/js/web/help-c379ba1bead9c04740cc3b549c5d02e0.js","./_expo/static/js/web/home-town-b23909fcca8f81a98618e6f78dfbf3be.js","./_expo/static/js/web/import-15628a8f8afb9d2ed64ff76a2a0fe479.js","./_expo/static/js/web/index-907d8abe49de5b36c7411d66c47a15bc.js","./_expo/static/js/web/live-c6b5e3b95e188ddbc8d504cb4c222e17.js","./_expo/static/js/web/map-2a48250457d62f93aac240435dbd7a9c.js","./_expo/static/js/web/map-90b8e14f74bbc3b248f19e921febb407.js","./_expo/static/js/web/match-add-806a7029abd82098ccfe845ae24a4133.js","./_expo/static/js/web/matchday-more-ab149a625c486c32ec212e61703ba29e.js","./_expo/static/js/web/maybe-f2923940c1a71ba593c50a8a972266c3.js","./_expo/static/js/web/my-xi-24bb9a12e99cbc01f1ce50b6f84f279e.js","./_expo/static/js/web/on-this-day-e6c8ab6c121b201160d0b1e3f4066da1.js","./_expo/static/js/web/passport-9c43e2d24870ad2bd14007f502d9ed01.js","./_expo/static/js/web/paywall-6ec67dee516a539af0725cd0e9cf1438.js","./_expo/static/js/web/person-fe811ac537e3cf00af3c226bb07b2909.js","./_expo/static/js/web/photos-0a54bc291a40104beaf6e47333ec0b84.js","./_expo/static/js/web/planner-9d917c89e03962fb17b08bc7b5540ee4.js","./_expo/static/js/web/puzzle-708a17a7d4af103e4f70f13b1a86b943.js","./_expo/static/js/web/search-b07f52835f02b1d01a492f1a34a0081f.js","./_expo/static/js/web/season-add-44364489c7da52a15e591c6564b02259.js","./_expo/static/js/web/settings-d9969ade5dd47f41040915f90c57eeab.js","./_expo/static/js/web/share-ticket-f3a9ccb6cdfbde9396095fbb900bcd73.js","./_expo/static/js/web/shirt-add-3f7c5dd85fee8c61129caedeba1a6c17.js","./_expo/static/js/web/shirts-12f2074d36b223c24227db262902d87f.js","./_expo/static/js/web/sources-eb0f2fd28209159a83de9872867caa3b.js","./_expo/static/js/web/tickets-1debbca57f783a4bcccae623cfb179ff.js","./_expo/static/js/web/tour-add-fda85e7ecc49568458c8a2f48c1336ae.js","./_expo/static/js/web/trip-results-c6b102a83483d4aad10e5f21fac0cf53.js","./_expo/static/js/web/trips-c6e02b49f80a246028f511be7ba9a61b.js","./_expo/static/js/web/trophies-0141f640cf6eb4756c3e06594a2a9f6f.js","./_expo/static/js/web/visit-add-1175ee8ba99760c6e70fbe9920819d4b.js","./_expo/static/js/web/visit-notes-7315828f4a895310e06555b6032eb334.js","./_expo/static/js/web/welcome-0fc32cb9a9d993ed3d68d3d3647881e4.js","./_expo/static/js/web/wrapped-7b26b8f56a61b4288ec717bc867f2370.js","./_expo/static/js/web/you-accfd4236bfe6161ad2b02ad009b3be9.js","./sql-wasm-aa0b42c828ef.wasm"];
// The versioned data files the first screen needs (filled in at build time): kept at install, so the
// next start reads them from here. The page usually fetched them moments ago, so this is mostly the
// browser's HTTP cache answering. Best-effort: a file that fails is simply fetched on first use.
const DATA = ["./data/web-snapshot.json?v=a32ccf7312e8","./data/club-links.json?v=41c2e3e35f94","./data/club-names.json?v=35052285336b","./data/club-crests.json?v=d4a078be9614","./data/team-grounds-openfootball.json?v=0b5e5d7fd791","./data/espn-venues.json?v=77aa6995bef9","./data/espn-season.json?v=140c4fe8d220","./data/team-grounds-de.json?v=933bcbbc46d2","./data/rbfa-season.json?v=d84429a5dbb9","./data/af-index.json?v=9083758da0ff","./data/af-overlay.json?v=9a11dd887968","./data/crest-local.json?v=5a8b69d13300"];

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
    // Fresh when the network answers in time, else the kept copy: a connection that accepts the
    // request and then says nothing (a full stadium) must not leave a white screen while a good
    // copy sits right here. The slow answer is still kept for the next start when it does arrive.
    // Only a real page is kept: an error page stored as index.html would be the app, offline.
    const fresh = fetch(req).then((res) => {
      if (res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put('./index.html', copy));
      }
      return res;
    });
    const kept = () => caches.match('./index.html');
    event.respondWith(
      new Promise((resolve, reject) => {
        let settled = false;
        const done = (res) => {
          if (settled) return;
          settled = true;
          resolve(res);
        };
        const timer = setTimeout(() => kept().then((hit) => hit && done(hit)), NAVIGATE_TIMEOUT_MS);
        fresh
          .then((res) => {
            clearTimeout(timer);
            done(res);
          })
          .catch(() => {
            clearTimeout(timer);
            kept().then((hit) => (hit ? done(hit) : settled || reject(new Error('offline'))));
          });
      }),
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
