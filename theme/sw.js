self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('cacheTitle').then(function(cache) {
			return cache.addAll([
				'/',
				'/rest/manifest/v1/manifest.json',
				'sw.js',
				'/img/PWA$favicon.png',
				'/img/PWA$logo512.png',
				'/img/PWA$logo192.png'
			]);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});