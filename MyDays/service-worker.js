/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [
    ["MyDays.html", "f088d200f25491abf633d4672cdf85e6"], ["common/css/_index.scss", "a6978d49121b01afdfd0215d06f85308"],
    ["common/css/reset.css", "87d89314256d3e947d2eeda02bee33a0"], ["common/font/pretendard.css", "27b0134499e23c9888b6d84abc4a117c"],
    ["common/img/favicon/android-icon-144x144.png", "fa736d783b77b61143b04d520dee7c44"], ["common/img/favicon/android-icon-192x192.png", "eaa73e672bca32f083435b0f669fd405"],
    ["common/img/favicon/android-icon-36x36.png", "10efc90a373df6d0c65b92df08119f60"], ["common/img/favicon/android-icon-48x48.png", "7a90a1852f7f6c87e143029c48610399"],
    ["common/img/favicon/android-icon-512x512.png", "eaa73e672bca32f083435b0f669fd405"], ["common/img/favicon/android-icon-72x72.png", "48f229834f35bea2a8f05c06690f5a53"],
    ["common/img/favicon/android-icon-96x96.png", "7e02230397d28878aa6955666ecc36dc"], ["common/img/favicon/apple-icon-114x114.png", "a669c35e484329ac02ebed463603a40c"],
    ["common/img/favicon/apple-icon-120x120.png", "b5fd0c68311aa79551b6078ce2f9e821"], ["common/img/favicon/apple-icon-144x144.png", "832ef97308fade3729b554403c211d85"],
    ["common/img/favicon/apple-icon-152x152.png", "7bb9fdfb7badc02c28c4c88456069a29"], ["common/img/favicon/apple-icon-180x180.png", "e361e4b1877d901458a1e1f18c30df3d"],
    ["common/img/favicon/apple-icon-57x57.png", "b2044974204dfe93f1593181ae4535c3"], ["common/img/favicon/apple-icon-60x60.png", "803b5c716dc1dfd46cf43b76eca6309a"],
    ["common/img/favicon/apple-icon-72x72.png", "48f229834f35bea2a8f05c06690f5a53"], ["common/img/favicon/apple-icon-76x76.png", "f417f847313356f72b3834843c9dc179"],
    ["common/img/favicon/apple-icon-precomposed.png", "6ccaa58da1f6ee31058a42c0752e6092"], ["common/img/favicon/apple-icon.png", "6ccaa58da1f6ee31058a42c0752e6092"],
    ["common/img/favicon/browserconfig.xml", "653d077300a12f09a69caeea7a8947f8"], ["common/img/favicon/favicon-16x16.png", "c5e4c4a8998e583b0f1cf27f8ec95b7b"],
    ["common/img/favicon/favicon-32x32.png", "3e658deb96a21755a1f031bc0c567170"], ["common/img/favicon/favicon-96x96.png", "c0d4b893b4579873d228a208804ef3d3"],
    ["common/img/favicon/favicon.ico", "6ea2c72445bee614d46b298d65ff5dc6"], ["common/img/favicon/ms-icon-144x144.png", "832ef97308fade3729b554403c211d85"],
    ["common/img/favicon/ms-icon-150x150.png", "8b46bea057db63a1cc7052724b21d930"], ["common/img/favicon/ms-icon-310x310.png", "8630c53f812b73157a2cf48988e6dbc3"],
    ["common/img/favicon/ms-icon-70x70.png", "a608fe50328be640c6204639e8c3a981"], ["common/js/prefixfree.min.js", "6801482ad79d62e66b7bcadeb49299d6"],
    ["index.html", "c8c4ee3b4758b6f2de5feb730a173ab3"], ["lib/css/Mydays.css", "e259587745ded6c6f0f5ba8ae0a16503"], ["lib/css/Mydays.css.map", "f006f3cf8d8ae10b4a13f18fe260a7c7"],
    ["lib/css/Mydays.scss", "b328ca4bf6a2b1464e1411a8b80e4bde"], ["lib/css/datepicker.css", "b75677cb978162651e05faa54bcabbb2"], ["lib/img/close_btn.svg", "79b535b08ba40bfa67c041804b701198"],
    ["lib/img/d_day_con01.jpg", "acad1647419c6ab74cfe872a5e279abe"], ["lib/img/d_day_con02.jpg", "76c78ff67611efbbd35c84d845c78f0e"], ["lib/img/d_day_con03.jpg", "6c5168d1315f4ceca65c4a9ade8bd5b8"],
    ["lib/img/d_day_con04.jpg", "a73defe80a6a9f829d62eb5870dcfb90"], ["lib/img/d_day_icon01.png", "71188c4695b9f871d2802b3aef17892b"], ["lib/img/d_day_icon02.png", "499d6b6c2fab35b58f5f3f5b50757b59"],
    ["lib/img/d_day_icon03.png", "5f8c7f538c7382179997a4ffc435a69b"], ["lib/img/d_day_icon04.png", "c19ee0d9a953b7b68aacf35aa8e3adfe"], ["lib/img/d_day_icon05.png", "f13e101805b8a46a8ba9bf53bfc2f7f0"],
    ["lib/img/d_day_icon06.png", "516bf8a861fa24619873ed8fa63d5c9f"], ["lib/img/d_day_icon07.png", "dc2c070a6b269ce185bb5916588a9d52"], ["lib/img/d_day_icon08.png", "e3efbbc712446251388fb5ae91b4cb53"],
    ["lib/img/d_day_icon09.png", "41e648135c133d77d6a8a041ca3c5acf"], ["lib/img/d_day_icon10.png", "9b6f5446fd978297536e3ee4fc84913d"], ["lib/img/d_day_icon11.png", "8bbe2bae26ef49072bc91ba40dbb69ac"],
    ["lib/img/d_day_icon12.png", "47a58a0169f2ab2003993dc3c16b147e"], ["lib/img/datepicker.png", "180e9d84cbed154033d18eb9d04eced3"], ["lib/img/more_content_img01.png", "e382e19beeaf0e9a6a073dc7989b9d7f"],
    ["lib/img/more_content_img02.gif", "6f511e0570351689eecd7bb10219a73d"], ["lib/img/upload_img.png", "4b66932642dc17396fe636d99fe92633"], ["lib/js/Datepicker.js", "fe6c35e634ca47219edf979b675642a5"],
    ["lib/js/MyDays.js", "ffdedc50188b3ea93b377252355a6985"], ["lib/js/MyDaysFirebase.js", "85848d4cdf881ae815e90b6ceb63e7fa"], ["lib/js/SignupFirebase.js", "70f343c35ffb192a3657f0330cc4b029"],
    ["signup.html", "78ee8989674e62b4f69ea565f4faa8c0"]
];

var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() is happy when passed either a stream or a Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
        return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
        .split('&') // Split into an array of 'key=value' strings
        .map(function (kv) {
            return kv.split('='); // Split each 'key=value' string into a [key, value] array
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
            });
        })
        .map(function (kv) {
            return kv.join('='); // Join each [key, value] array into a 'key=value' string
        })
        .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
};


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // If we don't have a key matching url in the cache already, add it.
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // Bail out of installation unless we get back a 200 OK for
                                // every request.
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        }).then(function () {

            // Force the SW to transition from installing -> active state
            return self.skipWaiting();

        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {

            return self.clients.claim();

        })
    );
});


self.addEventListener('fetch', function (event) {
    if (event.request.method === 'GET') {
        // Should we call event.respondWith() inside this fetch event handler?
        // This needs to be determined synchronously, which will give other fetch
        // handlers a chance to handle the request if need be.
        var shouldRespond;

        // First, remove all the ignored parameters and hash fragment, and see if we
        // have that URL in our cache. If so, great! shouldRespond will be true.
        var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
        shouldRespond = urlsToCacheKeys.has(url);

        // If shouldRespond is false, check again, this time with 'index.html'
        // (or whatever the directoryIndex option is set to) at the end.
        var directoryIndex = 'index.html';
        if (!shouldRespond && directoryIndex) {
            url = addDirectoryIndex(url, directoryIndex);
            shouldRespond = urlsToCacheKeys.has(url);
        }

        // If shouldRespond is still false, check to see if this is a navigation
        // request, and if so, whether the URL matches navigateFallbackWhitelist.
        var navigateFallback = '';
        if (!shouldRespond &&
            navigateFallback &&
            (event.request.mode === 'navigate') &&
            isPathWhitelisted([], event.request.url)) {
            url = new URL(navigateFallback, self.location).toString();
            shouldRespond = urlsToCacheKeys.has(url);
        }

        // If shouldRespond was set to true at any point, then call
        // event.respondWith(), using the appropriate cache key.
        if (shouldRespond) {
            event.respondWith(
                caches.open(cacheName).then(function (cache) {
                    return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                        if (response) {
                            return response;
                        }
                        throw Error('The cached response that was expected is missing.');
                    });
                }).catch(function (e) {
                    // Fall back to just fetch()ing the request if some unexpected error
                    // prevented the cached response from being valid.
                    console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                    return fetch(event.request);
                })
            );
        }
    }
});