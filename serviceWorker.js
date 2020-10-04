const whitelistedOrigins = [
    "http://localhost", // dev
    "http://localhost:3000", // dev
    "https://tokenstorage.ropnop.dev", // prod
]

const whitelistedPathRegex = /\/api\/[^.]*$/ // anything under /api

let token = '';

self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting());
    console.log('[SW] serviceworker installed!');
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
    console.log('[SW] serviceworker ready!');
});

self.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'SET_TOKEN') {
        token = event.data.token;
        console.log("[SW] token set!");
    }
})


const addAuthHeader = function (event) {
    destURL = new URL(event.request.url);
    if (whitelistedOrigins.includes(destURL.origin) && whitelistedPathRegex.test(destURL.pathname)) {
        const modifiedHeaders = new Headers(event.request.headers);
        if (token) {
            modifiedHeaders.append('Authorization', token)
        }
        const authReq = new Request(event.request, {headers: modifiedHeaders, mode: 'cors' });
        event.respondWith((async () => fetch(authReq))());
    }
}

self.addEventListener('fetch', addAuthHeader);


