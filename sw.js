// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline; so are the match data
// files. The bundle (hashed names) and fonts are cached on first use. 20260928191537 is replaced at build time.
const CACHE = 'groundhop-20260928191537';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-bba800fca5f41a1c2c2c6436c0cd40cc.js","./_expo/static/js/web/[doc]-33ec49ba159bb8f54041092b7cd3b853.js","./_expo/static/js/web/[id]-03b99cb69247863f6c9a1984e3c1ccaa.js","./_expo/static/js/web/[id]-229f5564ddc146d1595fc40e551b3421.js","./_expo/static/js/web/[id]-6ac8c0db22f727ab0ea5be316c83474c.js","./_expo/static/js/web/[id]-8db1c12095a7b80097009b5f03012e86.js","./_expo/static/js/web/[id]-a93db147612524d2de213bfdf01c409a.js","./_expo/static/js/web/[id]-e3d10cca8ce7c401e4db9ae6bca9b096.js","./_expo/static/js/web/__common-b12ca37c169069a32c9f56ac9addcc94.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-d1d65f4258d3ef4c065b14b6a371cc9e.js","./_expo/static/js/web/_layout-e039e7ba5cdf9fcaabd02e155c96389d.js","./_expo/static/js/web/account-7994087da5e03ddbdd5bfa53e4f23f58.js","./_expo/static/js/web/account-forgot-cd391d39a22afb30844a3e3c1729f1c6.js","./_expo/static/js/web/account-signin-73149d8620c25397a8d9a30099d020c8.js","./_expo/static/js/web/add-chooser-6bf085517d84bf88eeb2b6fdca12fe9c.js","./_expo/static/js/web/checkin-ee33f343c327d3c59b58601d8ccc2317.js","./_expo/static/js/web/club-pick-d1bbd20846b4087c92a4c2c5501d9fee.js","./_expo/static/js/web/compare-b2477d4feb7909729b8f000275a84961.js","./_expo/static/js/web/competitions-pick-10d375d13e0c793a2f277556284856bb.js","./_expo/static/js/web/correct-ticket-f19ec4f6727cda0b590045cb315cb792.js","./_expo/static/js/web/doubleheader-b81f21c95fb647c635542fd0f6216e7c.js","./_expo/static/js/web/entry-b9bbe68a8c4c4cb724d768a76b560423.js","./_expo/static/js/web/grounds-7f147b9ebfae8ca3781ca042726caeff.js","./_expo/static/js/web/help-29b0ba79dc8e00cf21be83151d4710a8.js","./_expo/static/js/web/import-223ce7d6bb83c6e6294160d97d9ab21e.js","./_expo/static/js/web/index-51a4a34ac044bcb76b9225f6d53e4a15.js","./_expo/static/js/web/live-b5577ce04ca9162a3002977fea0325fa.js","./_expo/static/js/web/map-4cc8aebb1491fe03b6e0a23c17167e57.js","./_expo/static/js/web/map-b48c2b3c9a1b159910c0955bf0294901.js","./_expo/static/js/web/match-add-db8c02ae74ca0b1d8b4fd252c6655e06.js","./_expo/static/js/web/my-xi-4f7188f14e9615fff2c6bed4d1072344.js","./_expo/static/js/web/passport-4006d0fb223cb6f3a7a560fe6de92346.js","./_expo/static/js/web/photos-cdf1e8b718c35f81d56b77be7ac1bcf7.js","./_expo/static/js/web/planner-bc979aa27b15ab5045ca7d4fa019a922.js","./_expo/static/js/web/puzzle-8bf153361bda4699a7321b007bbe31e5.js","./_expo/static/js/web/search-7d992f5ca28b4bfda1fbe48f05d3c669.js","./_expo/static/js/web/season-add-5094917077c2d04bb750d46a38476473.js","./_expo/static/js/web/settings-b3489d26878206794edcd7ec71d14eb5.js","./_expo/static/js/web/share-ticket-7623b9d71403e81e512a87270e1ba21e.js","./_expo/static/js/web/shirt-add-3d9248881c4536cb0b767f0f91e9801c.js","./_expo/static/js/web/shirts-d878ac019551b87775afbfa651ba3cab.js","./_expo/static/js/web/tickets-cd90b67995eaade7ca54f34994226c62.js","./_expo/static/js/web/tour-add-ee8eea55da436468413cc8694e04d2d6.js","./_expo/static/js/web/trophies-b633e1dde366d709eea1a6574b0b3b7e.js","./_expo/static/js/web/visit-add-e6af1bce166489c76a1871da7327222b.js","./_expo/static/js/web/visit-notes-d6c7e131f42f270d3fe0411e53556e43.js","./_expo/static/js/web/welcome-aa160c153d56c76a66b5820f9d97e80b.js","./_expo/static/js/web/wrapped-dda4412b3aca8e0b4af6a4625915b5bb.js","./_expo/static/js/web/you-63b952296c74e8ce88adf03751e2566c.js"];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(['./', './index.html', './manifest.webmanifest', ...CHUNKS])).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith('groundhop-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
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
  // Match data and the version file: fresh when online (new results, new version), the cached copy offline.
  const path = new URL(req.url).pathname;
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
