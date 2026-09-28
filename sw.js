// Groundhop web app: works in the stadium without signal. The page itself is fetched fresh when
// online (so a new version shows up) and falls back to the cached copy offline; so are the match data
// files. The bundle (hashed names) and fonts are cached on first use. 20260928214924 is replaced at build time.
const CACHE = 'groundhop-20260928214924';
// Every screen's code chunk, filled in at build time, so a screen never opened before still opens offline.
const CHUNKS = ["./_expo/static/js/web/+not-found-41a8d44e1a0bea82ba202be35989024c.js","./_expo/static/js/web/[doc]-383de5d135c793299dbb9fa78be8cee1.js","./_expo/static/js/web/[id]-1463af1bec38468668cb4c07c4fc3da0.js","./_expo/static/js/web/[id]-7b3691ac2493dece9571e194d8c488a7.js","./_expo/static/js/web/[id]-8c469871fe35cdb9b0f1bfda951d637c.js","./_expo/static/js/web/[id]-a677f878b8f5323473e569b8331aa668.js","./_expo/static/js/web/[id]-c5a59a99e0dc2daf74efa646b4ee8b25.js","./_expo/static/js/web/[id]-f6898ee198aaca9696e72e9169f348b0.js","./_expo/static/js/web/__common-5cbc98f511bed0279c1261892e088012.js","./_expo/static/js/web/__expo-metro-runtime-ed4c1cfa6193d76fc294130e42bd1916.js","./_expo/static/js/web/_layout-27dc292444760118eb521b6085f41e81.js","./_expo/static/js/web/_layout-76939b7ce551b27c1f48e077be03746a.js","./_expo/static/js/web/account-95e1196310177c7b6bf7dd82d2dbd10d.js","./_expo/static/js/web/account-forgot-f77267345150496ec171c19adf1f4e2c.js","./_expo/static/js/web/account-signin-42039ad7aa64893d6d01ce8fa9c8272d.js","./_expo/static/js/web/add-chooser-020def3eb8bd64e2516c626b294b1a11.js","./_expo/static/js/web/checkin-b18dc965f740bbfdbb00692f8e18d1a5.js","./_expo/static/js/web/club-pick-f26ced505fbec1567a839d5ab872386a.js","./_expo/static/js/web/compare-588435d1af5ee0d27659b30178e65cdd.js","./_expo/static/js/web/competitions-pick-4ffcf706b99739fca781d8cd4bdd4d19.js","./_expo/static/js/web/correct-ticket-e3ef92c70fc172936f1b3a3b55abcaee.js","./_expo/static/js/web/doubleheader-77ede0053a1de4a908343a857f050379.js","./_expo/static/js/web/entry-6846fc3cfc0bbcea5e38417799755ae7.js","./_expo/static/js/web/grounds-b87841e37d915b0c402cf9c4db3e2ea2.js","./_expo/static/js/web/help-f65f954f671afdf66be595661d07e08a.js","./_expo/static/js/web/import-b7079f31d4a4dd41aa6f90ea662e887a.js","./_expo/static/js/web/index-0eaf28dd31be068c9265aa80bd2ce984.js","./_expo/static/js/web/live-12951bad6c05180624550cdc03ab2ecf.js","./_expo/static/js/web/map-73740aec31c95d67acd6c27f83103762.js","./_expo/static/js/web/map-e9f267ef6b7d95a146d3dde9be100a74.js","./_expo/static/js/web/match-add-c2d3f4138d9884317a8caa880da685d2.js","./_expo/static/js/web/matchday-more-e467bc43da21a0f310ec1cacbf94aef7.js","./_expo/static/js/web/my-xi-1d57574643f005fc419f6c3515e761cb.js","./_expo/static/js/web/passport-83904ea8d3442576f4dd823a789ea343.js","./_expo/static/js/web/photos-0f4d5917842c29ed49b25770027834a5.js","./_expo/static/js/web/planner-cb839dee96a32c8b02f348ea0cc6ddde.js","./_expo/static/js/web/puzzle-dfad71d29509ecf427725f6ca1178cab.js","./_expo/static/js/web/search-181da8c3395eccb695f82bb13d0ce6ab.js","./_expo/static/js/web/season-add-8d43ab093eca189cbaa80b711b905023.js","./_expo/static/js/web/settings-cf568e37c4df8ac5359be63c4eb799dd.js","./_expo/static/js/web/share-ticket-64ae7739d769d520edb6bb431df77a15.js","./_expo/static/js/web/shirt-add-ebd2bf6c06260446bd3ff970e5d4cfb0.js","./_expo/static/js/web/shirts-16bbf2030d81725cbf665ef4bbde8b02.js","./_expo/static/js/web/tickets-bcd294832e724b85bf93d5325ed4b93a.js","./_expo/static/js/web/tour-add-4261006a4eddabd89262e9fc10dbc8fd.js","./_expo/static/js/web/trophies-292cd69ff349bd70d1fa628ce9d03204.js","./_expo/static/js/web/visit-add-0197a4edc9c14e15f200b19b2377b4b7.js","./_expo/static/js/web/visit-notes-dc833862a1d611a30f8e270482b198fa.js","./_expo/static/js/web/welcome-b132798b187bdd45450db6307f6e5877.js","./_expo/static/js/web/wrapped-ea2cd1357b57d729b79be08e6dd80d90.js","./_expo/static/js/web/you-c92b5152be4ef740187895b63ce4e7d4.js"];

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
