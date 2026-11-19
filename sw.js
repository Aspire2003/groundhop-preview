// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline. The bundle (hashed
// names) and fonts are cached on first use. 20261119204129 is replaced at build time.
const CACHE = 'groundhop-20261119204129';
// Match data files whose URL names their content (data/<name>.json?v=<hash>, src/data/files.web.ts):
// the same URL is always the same bytes, so they are served straight from here without asking the
// network, and kept across deploys -- a new build only downloads the files that really changed.
// Not versioned by build (not "groundhop-..."), so activate below leaves it alone.
const DATA_CACHE = 'gh-data-v1';
// How long the page itself may take from the network before the kept copy is shown instead.
const NAVIGATE_TIMEOUT_MS = 4000;
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-412fe452e26ad641672408645a9b0f10.js","./_expo/static/js/web/[code]-364bccb1dae243c4cb175133c05516a4.js","./_expo/static/js/web/[doc]-bb5e106b86f915d3c20fd592c7c4c9a2.js","./_expo/static/js/web/[id]-0bc758e2237bc48a6b585eac75c4b692.js","./_expo/static/js/web/[id]-131d0a74dc1f734974b1e84a6ed88b77.js","./_expo/static/js/web/[id]-55997cede0af8d57e9a5447f98eb2795.js","./_expo/static/js/web/[id]-7f5150cd2bdbb8ff9b70902d8e3c316e.js","./_expo/static/js/web/[id]-891cfe8682246b3176ef65d20e8a4cdf.js","./_expo/static/js/web/[id]-93d02e1343e83dfa7123e8c78ce825f2.js","./_expo/static/js/web/[id]-d0d5ed2d22723a320ab858b34764f91d.js","./_expo/static/js/web/[id]-f87ebb873e2ead09c79ab49081918b35.js","./_expo/static/js/web/__common-6bb86a24606ea13faf433978c26b274f.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-670f02133dbf5044ab409c1375a5e9d6.js","./_expo/static/js/web/_layout-d196d3e269add4b9ab4d2ca612cf0d4d.js","./_expo/static/js/web/account-217c9edb053ba7e513e930bffa918e0e.js","./_expo/static/js/web/account-forgot-d90222f6bb3faa695af9ca1ea7696b83.js","./_expo/static/js/web/account-signin-b3eee31e7e2b1ea080d123ca51d0084c.js","./_expo/static/js/web/add-chooser-b05e481b69d8df667134493801da8e99.js","./_expo/static/js/web/all-grounds-f0b29d617a9f94dc7a7642f5f2e9c4ab.js","./_expo/static/js/web/checkin-ae18646098506dcc6f5e925f5bce00a1.js","./_expo/static/js/web/club-pick-3e04195bac3f5c667e89b62b4545cb81.js","./_expo/static/js/web/clubs-seen-e238097e75b68b1a6457352565ceef7f.js","./_expo/static/js/web/compare-f32ab78bbdd5da91d858c6d8ffcdf4f6.js","./_expo/static/js/web/competitions-pick-8eff84db7c367e565433ed462e51cedb.js","./_expo/static/js/web/correct-ticket-78c581f42fb40926e77d5be4c77d2113.js","./_expo/static/js/web/countries-8efeb82a5a2d94cb98edc0beac1d9ba4.js","./_expo/static/js/web/doubleheader-b610ffd6fc268957ff6721f505e385f5.js","./_expo/static/js/web/feedback-9d472de2aa861bd8215c445626e334c8.js","./_expo/static/js/web/grounds-496859a05f6b628611279007bdbdcc85.js","./_expo/static/js/web/help-d56db306ac46212439c17060e389ec7b.js","./_expo/static/js/web/home-town-db75d5fed53534128f7aaab5f11cfd73.js","./_expo/static/js/web/import-5f34f15dec86bee69615c9191758ed7f.js","./_expo/static/js/web/index-193b691f6b95bd7a4f0ba7fad54d1c72.js","./_expo/static/js/web/index-348fe5d213c539efcfa9b26404a7618d.js","./_expo/static/js/web/live-8a7e4a9fdbfca15e3d541107dedf5c2f.js","./_expo/static/js/web/map-27dd335174a7cc7751814b726234255a.js","./_expo/static/js/web/map-3e038272cfafb0e638836284648a65bb.js","./_expo/static/js/web/match-add-94b8e38dee7009810568b383f026510e.js","./_expo/static/js/web/matchday-more-1198cc91b7f83e4976320f32accd423e.js","./_expo/static/js/web/maybe-4a5158006655d9b2fad61c45ef61d0ad.js","./_expo/static/js/web/my-xi-8e03f05aa52f65ed9277a0766c6b59fc.js","./_expo/static/js/web/on-this-day-7e62b4ffd28ccf7c2adbbc15e431f0e5.js","./_expo/static/js/web/passport-18b83cf7a145cc375e2c5dcf58887e44.js","./_expo/static/js/web/paywall-7b1645080d57a203ffdb31e092a6ea89.js","./_expo/static/js/web/person-d9e63cd279f51ce6e846235397d12236.js","./_expo/static/js/web/photos-65a992478522c9fbb5f1630be8f996ee.js","./_expo/static/js/web/planner-ac739c0be7256fa4f051677fb5178d0f.js","./_expo/static/js/web/puzzle-375f23e6d90a2e9a190b9ba67d43e438.js","./_expo/static/js/web/search-b567dc9e91cf7c6d1f78227de5854977.js","./_expo/static/js/web/season-add-928c81f62f11967cbc8a11afeca9d68f.js","./_expo/static/js/web/settings-45844b2978b5fcd052e8107285bcd41a.js","./_expo/static/js/web/share-ticket-8125daa317c5862d911d0ac6113f0f82.js","./_expo/static/js/web/shirt-add-1414479aa6bc22248a71cf0a7c28a9c8.js","./_expo/static/js/web/shirts-8ca5423f04a5668cfb28b5a26d2873e9.js","./_expo/static/js/web/sources-5a59bf3f2a51d33a01bd340f71d6837e.js","./_expo/static/js/web/tickets-4490b3e824625a9f7a0fe9a8d5d4baf7.js","./_expo/static/js/web/tour-add-2cee7fa043816bedf2b3c3fa4550fc20.js","./_expo/static/js/web/trip-results-dfe5d5de2dbeddcd9bb9b1640a800a6b.js","./_expo/static/js/web/trips-297adf67d365178b4dba1bec31626dd6.js","./_expo/static/js/web/trophies-64bc5abb3773555861a4f525b1d07acd.js","./_expo/static/js/web/visit-add-07adcb9a57c965787c3d66e790116e0b.js","./_expo/static/js/web/visit-notes-e155f4d3398b39d869672751deb36878.js","./_expo/static/js/web/welcome-d41401d056aff3a82ec3775ded5867e9.js","./_expo/static/js/web/wrapped-55c9c20b97c12f285d6a59d64816cc78.js","./_expo/static/js/web/you-693c1444b9a811c0223df1ea472ce77f.js","./sql-wasm-aa0b42c828ef.wasm"];
// One code file per language (filled in at build time, not in CHUNKS): only the fan's own is kept, named
// by ?lang= in this worker's URL (the page registers sw.js?lang=<its language>), so 23 languages do not
// put 22 unused files on every phone.
const LANG_CHUNKS = {"cs":"./_expo/static/js/web/cs-40fadea92e29760756f88f0af8372af1.js","da":"./_expo/static/js/web/da-102f7fe007c2db280477c5aae8c10bd1.js","de":"./_expo/static/js/web/de-78e4d20e0e6abe6154d8024570498b38.js","el":"./_expo/static/js/web/el-4d5fcde05e3f8ddd0880160876eea85c.js","es":"./_expo/static/js/web/es-34c915c3fb0d6c1f5c35770bdba25afb.js","fi":"./_expo/static/js/web/fi-c523d915226e841b84ff73d59af0215d.js","fr":"./_expo/static/js/web/fr-666027b35a94cea5a8ba5f83687e2e7c.js","hr":"./_expo/static/js/web/hr-789ec6403ec3f9530e4223aaee8e185c.js","hu":"./_expo/static/js/web/hu-b4e5c248f481297f78c1e6f31245cafa.js","id":"./_expo/static/js/web/id-91532cdfd6dd59de879f4ef428d7da17.js","it":"./_expo/static/js/web/it-02268d1463cc0492a0aeda746d8c4e24.js","ja":"./_expo/static/js/web/ja-2f23790d9ab346fa7a6e031829732d6d.js","ko":"./_expo/static/js/web/ko-958cc5e1220a340030789047b82bced7.js","nb":"./_expo/static/js/web/nb-3c1bd363460e56e14d31c2bc45b94831.js","nl":"./_expo/static/js/web/nl-ebe5049e4ea63133c79cd122f35e555f.js","pl":"./_expo/static/js/web/pl-3aface7794e161087060947d02fbbc39.js","pt-PT":"./_expo/static/js/web/pt-PT-c8eae3764d677bb8a1cbf709a645901a.js","pt":"./_expo/static/js/web/pt-b510cdd4c9e6586bec4d359334241672.js","ro":"./_expo/static/js/web/ro-dd1cdab91ad047d9142bdbeeecde5d01.js","sr":"./_expo/static/js/web/sr-9722e461d7c1f4e58c5d1d8254cfbf60.js","sv":"./_expo/static/js/web/sv-b8862ac09ea8eacd24814eeaf2dfd5ba.js","tr":"./_expo/static/js/web/tr-9875c35e5e74450f0f6378d6f51f7c30.js","uk":"./_expo/static/js/web/uk-4daa5bb68b78c73848b603d077676f6e.js"};
const OWN_LANG = LANG_CHUNKS[new URL(self.location.href).searchParams.get('lang')];
// The versioned data files the first screen needs (filled in at build time): kept at install, so the
// next start reads them from here. The page usually fetched them moments ago, so this is mostly the
// browser's HTTP cache answering. Best-effort: a file that fails is simply fetched on first use.
const DATA = ["./data/web-snapshot.json?v=e82b748e5ed3","./data/club-links.json?v=41c2e3e35f94","./data/club-names.json?v=35052285336b","./data/club-crests.json?v=d4a078be9614","./data/team-grounds-openfootball.json?v=0b5e5d7fd791","./data/espn-venues.json?v=4b441271379e","./data/espn-season.json?v=39c8886fdfc2","./data/team-grounds-de.json?v=933bcbbc46d2","./data/rbfa-season.json?v=d84429a5dbb9","./data/af-index.json?v=74b71aede656","./data/af-overlay.json?v=7a18da556d83","./data/crest-local.json?v=5a8b69d13300"];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((c) => c.addAll(['./', './index.html', './manifest.webmanifest', ...CHUNKS, ...(OWN_LANG ? [OWN_LANG] : [])]))
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
