// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline; so are the match data
// files. The bundle (hashed names) and fonts are cached on first use. 20260930154732 is replaced at build time.
const CACHE = 'groundhop-20260930154732';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-63c50fbdce81cddb51be892df359f105.js","./_expo/static/js/web/[doc]-d7a71ac53c1cc04eb2058847d2083ea5.js","./_expo/static/js/web/[id]-03c2e47a58c42e9d2486e2d09e968a6d.js","./_expo/static/js/web/[id]-10c4fdc608cf3e3ce7ba4b2d3a3311a3.js","./_expo/static/js/web/[id]-263b50df416dc1148198c9d00ef874ed.js","./_expo/static/js/web/[id]-5da4cfbd3c7990e7fd46b1844bcf5c1e.js","./_expo/static/js/web/[id]-8859b2fefb9792b7594afe938b5c27be.js","./_expo/static/js/web/[id]-e61834e0608e80ee72285ebc5b0614bb.js","./_expo/static/js/web/__common-6da05cb11d7cb4b090cc326d7ba612c2.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-67877d13667cc631a47e28f900553bff.js","./_expo/static/js/web/_layout-78ce6a240312100403d2a220425cfc98.js","./_expo/static/js/web/account-c333a5ff3dad3cf6fb0db050f04349bd.js","./_expo/static/js/web/account-forgot-e4b3de2865d4aa9c57bae5d13023f685.js","./_expo/static/js/web/account-signin-ce8e013631dce3692d552cd63556c779.js","./_expo/static/js/web/add-chooser-0a5637c64aba2f325ec2bef8c58f91cd.js","./_expo/static/js/web/checkin-9b77b2406d5337e5e76907c3ce211604.js","./_expo/static/js/web/club-pick-3fb6e90adde3876a0a855d9bee3e022f.js","./_expo/static/js/web/compare-e01726904e2eb55bd41485d6a320e2a1.js","./_expo/static/js/web/competitions-pick-56130ddeabc977be415f055c1f522f7a.js","./_expo/static/js/web/correct-ticket-9c8dd5222185755ba243cdc25713bfce.js","./_expo/static/js/web/doubleheader-3b8a8ade9a1a92e6172bd3e7e69a8302.js","./_expo/static/js/web/entry-eec2e4786f05d2c95fc18359c357f659.js","./_expo/static/js/web/grounds-b81deba85b617f664959737137b00830.js","./_expo/static/js/web/help-43cc8dd15e072ab3fcd791af409f3dc4.js","./_expo/static/js/web/import-e33689a9cce3be52f1ab86ac211620d9.js","./_expo/static/js/web/index-eac6c3a04c01a3121e0f9bf1aa9916d8.js","./_expo/static/js/web/live-4fd148bef46227ad6633910792054498.js","./_expo/static/js/web/map-6e8de5ea1ea35ed25fa3dd77ef6f7ce8.js","./_expo/static/js/web/map-db45755d918d25d57c44d10631001156.js","./_expo/static/js/web/match-add-7b29f263f628c938395ff7677e246484.js","./_expo/static/js/web/matchday-more-98e52e4991f99d7a82e0d7979b564013.js","./_expo/static/js/web/my-xi-170d7f7c89574ed87c8498b927e3a070.js","./_expo/static/js/web/passport-f8c53882b6ee3d846a12185ac531af07.js","./_expo/static/js/web/photos-910fc02ada08142935e776fdfa50eb9d.js","./_expo/static/js/web/planner-0407a5ac6a0695afaa9e138887f83c12.js","./_expo/static/js/web/puzzle-97937e05261bf694497e5a5ec682d9a4.js","./_expo/static/js/web/search-468cc972855fc68da4d6ec4181bac4b8.js","./_expo/static/js/web/season-add-45899b9fa8e6dfafad97297535adc8ab.js","./_expo/static/js/web/settings-7245f9ce63440d41a0f0e848c988ca60.js","./_expo/static/js/web/share-ticket-50c97395643295de2c3ebe7012b3466b.js","./_expo/static/js/web/shirt-add-4241c7416569d0a2dbb675aaefce1e79.js","./_expo/static/js/web/shirts-3cd28bebfa8a8a16a079da62c109f396.js","./_expo/static/js/web/sources-408635bd2dbf5f386a75b0dd63c21154.js","./_expo/static/js/web/tickets-d9fd54f84f73d6244d863846bf16c0c8.js","./_expo/static/js/web/tour-add-4a0d3734a4682b407bc4799ba805318d.js","./_expo/static/js/web/trophies-c918c42e7d196ce1c9728bb300368514.js","./_expo/static/js/web/visit-add-2d0cb6bfbe9bf0dfc56505966413cd78.js","./_expo/static/js/web/visit-notes-56891880b53f2103c5badb58a3c97630.js","./_expo/static/js/web/welcome-793576859bb9a2228b9053fbaaa09b05.js","./_expo/static/js/web/wrapped-b77928497e77dd8dffaec899a2d08132.js","./_expo/static/js/web/you-d4b41ec147b657d267f4ff86a632dac5.js"];

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
