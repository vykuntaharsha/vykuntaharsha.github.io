"use strict";var precacheConfig=[["/index.html","1a9c40112212aae3e796c06b0b5e76de"],["/static/css/main.8bbb9f63.css","31ce8b95a5cd83307de332e6a9628017"],["/static/js/main.4f1974db.js","12eba0a2883b73f7f6b626579ee19d8d"],["/static/media/1.4241942a.png","4241942a142dea9b8dec7a7dee9cca55"],["/static/media/1.7401208f.png","7401208fd9c60b144f8c45e95c0be4c5"],["/static/media/1.d0e86fb6.png","d0e86fb694057cfab595d416937c1c87"],["/static/media/1.d83e3f61.png","d83e3f61245340bf86852031ba835873"],["/static/media/10.e5fa3a78.png","e5fa3a78c9c762feab88321532566363"],["/static/media/2.012dfe43.png","012dfe43bfb882219be9b98c294218e6"],["/static/media/2.0eadc757.png","0eadc757f3b7063409dfc752685aaaef"],["/static/media/2.22231bf2.png","22231bf2aa3b7e82f279b562bbbc8e23"],["/static/media/2.f3287c12.png","f3287c12353d95d89f2c2657e17446c3"],["/static/media/3.78c7144f.png","78c7144fa0b685f112a758ecf04ab4c0"],["/static/media/3.7c004728.png","7c00472863fed6942cba3506e6d8d163"],["/static/media/3.d2639ad8.png","d2639ad8c18d1a9218e67de2e740d4ba"],["/static/media/3.f02b0807.png","f02b080765ea5e7965e828e8c0c75cef"],["/static/media/4.5c7e7eb6.png","5c7e7eb6154dabf7c45e49fde2225e85"],["/static/media/4.7bc16d6a.png","7bc16d6a4ce1b7ba3695d55c16e51658"],["/static/media/4.888d4120.png","888d412064a76b2a5049de6bc104d429"],["/static/media/4.ab41692d.png","ab41692da6de336581adb63f2984e1c7"],["/static/media/5.0d235687.png","0d2356875136486d87dee5456a50e9f9"],["/static/media/5.4a1b2ab9.png","4a1b2ab986399f17e9183917ba41b8fd"],["/static/media/5.fa18736e.png","fa18736e2ce846f18b72b665da8d2097"],["/static/media/6.cacb9038.png","cacb90383febaa120da05a2e3643f9c0"],["/static/media/8.364042fd.png","364042fd7aed36f2192078b9c9d9b7a8"],["/static/media/9.8f1a6170.png","8f1a61702c7c7dccadf07e2ef9f0ac6f"],["/static/media/cover.023f1454.png","023f14543cd189440ba1a088974fda59"],["/static/media/cover.09ccddef.png","09ccddef84eebcc767c70f4eec43d3e3"],["/static/media/cover.473b14e9.png","473b14e988959041672a35a0fe4be773"],["/static/media/cover.a6eaf55d.png","a6eaf55d19194143301dadff79f4d156"],["/static/media/cover.aa728d8b.jpg","aa728d8b965014cc36be5ac18c39435f"],["/static/media/nit.fa83ec1a.png","fa83ec1ac9828f8606427f54ce3c5ef6"],["/static/media/northeastern-university.958de662.png","958de66279d9c97aae273ed4f8844c9a"],["/static/media/owlz-logo.d8831588.svg","d883158843f64ff82085b788818165b1"],["/static/media/plain-logo.0a02ebef.png","0a02ebefe400d927c9923a9cbcaf72cb"],["/static/media/profile.21791227.jpg","21791227fe396890533baa1be7c978ca"],["/static/media/teaching-assistant.c7118011.jpg","c7118011b811d28f3785d3aa91e83be6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});