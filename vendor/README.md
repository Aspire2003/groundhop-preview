# Map library files served by the app itself

Copied once from the npm packages (via cdn.jsdelivr.net, 10 Nov 2026) so the web map no longer loads
code from another site at runtime: the same origin holds the fan's account session, and the map now
also opens offline once the service worker has kept these files.

| File | Package and version | SHA-256 |
| --- | --- | --- |
| maplibre-gl.js | maplibre-gl@5.24.0 `dist/maplibre-gl.js` (BSD-3-Clause, see maplibre-gl.LICENSE.txt) | 45a9b07a9189ce56054c620a947ccf41e291e58c95e9b61533b740aaa65ee5cb |
| maplibre-gl.css | maplibre-gl@5.24.0 `dist/maplibre-gl.css` | ab1e70d59ec40465bae7e7030da2f3ccf28133fd502e62bd598eefbadfd7a732 |
| topojson-client.min.js | topojson-client@3.1.0 `dist/topojson-client.min.js` (ISC, Mike Bostock) | 25cd02ae486cc5063e0215a4e4cfb15de83700c87ac48bac4d57dc6aaf3ebb89 |
| countries-110m.json | world-atlas@2.0.2 `countries-110m.json` (ISC; Natural Earth data, public domain) | 2516c915867c7baf18ddec727aec46c315541a07cfb3d79a6559b05d5e94eee8 |

To update: download the new version of the same file, replace it here, update this table.
MapLibre must stay on a version with a classic `dist/maplibre-gl.js` (see src/components/map-libre.ts).
