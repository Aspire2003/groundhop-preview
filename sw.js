// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline. The bundle (hashed
// names) and fonts are cached on first use. 20261114151256 is replaced at build time.
const CACHE = 'groundhop-20261114151256';
// Match data files whose URL names their content (data/<name>.json?v=<hash>, src/data/files.web.ts):
// the same URL is always the same bytes, so they are served straight from here without asking the
// network, and kept across deploys -- a new build only downloads the files that really changed.
// Not versioned by build (not "groundhop-..."), so activate below leaves it alone.
const DATA_CACHE = 'gh-data-v1';
// How long the page itself may take from the network before the kept copy is shown instead.
const NAVIGATE_TIMEOUT_MS = 4000;
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-412fe452e26ad641672408645a9b0f10.js","./_expo/static/js/web/[code]-cbf9c6f644407a601041bba5e665c198.js","./_expo/static/js/web/[doc]-8bf44aed55af40c9c17e2365a1fa38e7.js","./_expo/static/js/web/[id]-49e4b529846738ad3eb162b082a7fdd2.js","./_expo/static/js/web/[id]-5ccc37a56f40a1f8ec832dc3a5c4a9f7.js","./_expo/static/js/web/[id]-891c693d30056e031bed6cc283fdd8ad.js","./_expo/static/js/web/[id]-8c7cab49b277b5acdd517100795aa653.js","./_expo/static/js/web/[id]-9335df60753b52fb397acc8eef9682d6.js","./_expo/static/js/web/[id]-a65f6165e538aa35a7fc43230b3447ce.js","./_expo/static/js/web/[id]-c96a3640273d53ecd3da89e412cc0d5a.js","./_expo/static/js/web/[id]-f8785008bf030ff7f26f57c6e2c5cbe2.js","./_expo/static/js/web/__common-c8f0aa155fc86c5e602cf619d0fce4e2.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-87b0d8bee80d90542db2dbdfa9e604b3.js","./_expo/static/js/web/_layout-d196d3e269add4b9ab4d2ca612cf0d4d.js","./_expo/static/js/web/account-4a17f092a22907c77989a8dffb6ea354.js","./_expo/static/js/web/account-forgot-1864c0fd7d7b9f26bc81f48a1deca66b.js","./_expo/static/js/web/account-signin-4cb46fc6a375ec109ceb15126968282f.js","./_expo/static/js/web/add-chooser-1b0d347396553e42cac767197eae2fc5.js","./_expo/static/js/web/all-grounds-9512b173e73310948ca522df962e3673.js","./_expo/static/js/web/checkin-bc89b305ecbd35d4b12afa84fadd49f2.js","./_expo/static/js/web/club-pick-3b9cd1941ef627963cbcdb257f4c82af.js","./_expo/static/js/web/clubs-seen-d6217924a5e5633981339e5c4fcfcac5.js","./_expo/static/js/web/compare-091b6d909ffdb402d1adfd76233d4da4.js","./_expo/static/js/web/competitions-pick-8cad64dd32c7c6c7f2bb2617189351b4.js","./_expo/static/js/web/correct-ticket-e36362ca03688a20182d7838f128835f.js","./_expo/static/js/web/countries-891dee397cccb01d7f2b0cc373d31c1f.js","./_expo/static/js/web/doubleheader-a5bcb2bd44116a7a12c890bc55c8a7ed.js","./_expo/static/js/web/feedback-13f86a96185a6b7f0b8b61848dce5ef2.js","./_expo/static/js/web/grounds-496859a05f6b628611279007bdbdcc85.js","./_expo/static/js/web/help-3e4527f3f68ee28cb5ebe1d3ccbc3674.js","./_expo/static/js/web/home-town-7a100e7a428dd653fa82beda32129afe.js","./_expo/static/js/web/import-2636c1480bda33e7aa46559b12240376.js","./_expo/static/js/web/index-193b691f6b95bd7a4f0ba7fad54d1c72.js","./_expo/static/js/web/index-92b09437b7d1e3f34722dd2116107d04.js","./_expo/static/js/web/live-4d9fbba9d1f6371cb68a3f5ee8f4d939.js","./_expo/static/js/web/map-dd642e8bb71488205c9a76ab3c791fb8.js","./_expo/static/js/web/map-f4733942e8e2a22fd08f9c7f1c80c931.js","./_expo/static/js/web/match-add-1576e07c233295eeb66722754cb6c101.js","./_expo/static/js/web/matchday-more-c1eb2709237f5db73980a8e681304f4f.js","./_expo/static/js/web/maybe-13bfe386a1935d55c4e24a6ea4d0857d.js","./_expo/static/js/web/my-xi-541a330e2bdefa35c856f98039637908.js","./_expo/static/js/web/on-this-day-da895c010a023abe72b5971ea07b15d6.js","./_expo/static/js/web/passport-90a5ceec97568d12324ad1c14ca54ec2.js","./_expo/static/js/web/paywall-00877fa4916d289f134b2780749ab4ed.js","./_expo/static/js/web/person-dfa7eca6bfac0038489c3518a13160c1.js","./_expo/static/js/web/photos-e0f6b7eb2efb6162c23925a6be73a91a.js","./_expo/static/js/web/planner-65c57f896d1427ea0be14d13f4c3de7a.js","./_expo/static/js/web/puzzle-1ea4a470c0b088a8dd7fb24f74e83bdc.js","./_expo/static/js/web/search-d0aa9c68a157cf7c98905e349084cc36.js","./_expo/static/js/web/season-add-113e10c1857cfd36c1c8d765ed8ec9bc.js","./_expo/static/js/web/settings-57222e9af0e9cf30cb96a258c9f2481f.js","./_expo/static/js/web/share-ticket-d6c7601528f2a2272ca9db708038dca2.js","./_expo/static/js/web/shirt-add-d5d37a1a804ebc5218ae37818719fdf8.js","./_expo/static/js/web/shirts-214b73e52da88827c979b14dd3009f3f.js","./_expo/static/js/web/sources-6d780f3a894ad5a4edbe4058c25ae719.js","./_expo/static/js/web/tickets-b05888f6a50cb230b34e941d2535355c.js","./_expo/static/js/web/tour-add-70a889dd956cacc65f56d8f9d7e47710.js","./_expo/static/js/web/trip-results-0ffa326604f1c6405b3fa8415df4e8b1.js","./_expo/static/js/web/trips-f8a925cfa9046acbb354a881c26b7090.js","./_expo/static/js/web/trophies-1ed7bee930d60099d859dfd4f64c8686.js","./_expo/static/js/web/visit-add-84274817ebfe3c41cfaa1e5e8ec9bc9b.js","./_expo/static/js/web/visit-notes-8d05c6234c669108ce719c5f947f7910.js","./_expo/static/js/web/welcome-04a8df7e3fc43f0ce3505d2c32bcacad.js","./_expo/static/js/web/wrapped-4a5efd912e251d7ba2ce98d6c62f13c2.js","./_expo/static/js/web/you-22c9df7a0f1ba42fa12a3245a620500d.js","./sql-wasm-aa0b42c828ef.wasm"];
// One code file per language (filled in at build time, not in CHUNKS): only the fan's own is kept, named
// by ?lang= in this worker's URL (the page registers sw.js?lang=<its language>), so 23 languages do not
// put 22 unused files on every phone.
const LANG_CHUNKS = {"cs":"./_expo/static/js/web/cs-40fadea92e29760756f88f0af8372af1.js","da":"./_expo/static/js/web/da-102f7fe007c2db280477c5aae8c10bd1.js","de":"./_expo/static/js/web/de-78e4d20e0e6abe6154d8024570498b38.js","el":"./_expo/static/js/web/el-4d5fcde05e3f8ddd0880160876eea85c.js","es":"./_expo/static/js/web/es-34c915c3fb0d6c1f5c35770bdba25afb.js","fi":"./_expo/static/js/web/fi-c523d915226e841b84ff73d59af0215d.js","fr":"./_expo/static/js/web/fr-666027b35a94cea5a8ba5f83687e2e7c.js","hr":"./_expo/static/js/web/hr-789ec6403ec3f9530e4223aaee8e185c.js","hu":"./_expo/static/js/web/hu-b4e5c248f481297f78c1e6f31245cafa.js","id":"./_expo/static/js/web/id-91532cdfd6dd59de879f4ef428d7da17.js","it":"./_expo/static/js/web/it-02268d1463cc0492a0aeda746d8c4e24.js","ja":"./_expo/static/js/web/ja-2f23790d9ab346fa7a6e031829732d6d.js","ko":"./_expo/static/js/web/ko-958cc5e1220a340030789047b82bced7.js","nb":"./_expo/static/js/web/nb-3c1bd363460e56e14d31c2bc45b94831.js","nl":"./_expo/static/js/web/nl-ebe5049e4ea63133c79cd122f35e555f.js","pl":"./_expo/static/js/web/pl-3aface7794e161087060947d02fbbc39.js","pt-PT":"./_expo/static/js/web/pt-PT-c8eae3764d677bb8a1cbf709a645901a.js","pt":"./_expo/static/js/web/pt-b510cdd4c9e6586bec4d359334241672.js","ro":"./_expo/static/js/web/ro-dd1cdab91ad047d9142bdbeeecde5d01.js","sr":"./_expo/static/js/web/sr-9722e461d7c1f4e58c5d1d8254cfbf60.js","sv":"./_expo/static/js/web/sv-b8862ac09ea8eacd24814eeaf2dfd5ba.js","tr":"./_expo/static/js/web/tr-9875c35e5e74450f0f6378d6f51f7c30.js","uk":"./_expo/static/js/web/uk-4daa5bb68b78c73848b603d077676f6e.js"};
const OWN_LANG = LANG_CHUNKS[new URL(self.location.href).searchParams.get('lang')];
// The versioned data files the first screen needs (filled in at build time): kept at install, so the
// next start reads them from here. The page usually fetched them moments ago, so this is mostly the
// browser's HTTP cache answering. Best-effort: a file that fails is simply fetched on first use.
const DATA = ["./data/web-snapshot.json?v=c52a6757a950","./data/club-links.json?v=41c2e3e35f94","./data/club-names.json?v=35052285336b","./data/club-crests.json?v=d4a078be9614","./data/team-grounds-openfootball.json?v=0b5e5d7fd791","./data/espn-venues.json?v=77aa6995bef9","./data/espn-season.json?v=b83434d4c7da","./data/team-grounds-de.json?v=933bcbbc46d2","./data/rbfa-season.json?v=d84429a5dbb9","./data/af-index.json?v=1a6ce1f26242","./data/af-overlay.json?v=4aeaf4b7a73d","./data/crest-local.json?v=5a8b69d13300"];

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
